const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'tools', 'hub-builder', 'hub-builder-report.json');

const ignore = new Set(['.git', 'node_modules']);
const imageExt = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const screenshotKeywords = ['preview', 'screenshot', 'screen', 'cover', 'thumb', 'thumbnail', 'stilist'];
const screenshotNames = ['preview.jpg', 'preview.png', 'screenshot.jpg', 'screenshot.png', 'Screenshot.jpg', 'Screenshot.png'];
const projects = [];

walk(ROOT);

fs.writeFileSync(REPORT, JSON.stringify({
  generatedAt: new Date().toISOString(),
  projectCount: projects.length,
  projects
}, null, 2));

console.log('Report saved:', REPORT);
console.log('Projects found:', projects.length);

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (ignore.has(item.name)) continue;
      walk(full);
      continue;
    }

    if (!item.name.endsWith('.html')) continue;
    scanHtml(full);
  }
}

function scanHtml(full) {
  try {
    const html = fs.readFileSync(full, 'utf8');
    const rel = path.relative(ROOT, full).replace(/\\/g, '/');
    const dir = path.dirname(full);
    const title = matchContent(html, /<title>(.*?)<\/title>/i);
    const description = matchContent(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    const ogTitle = matchContent(html, /<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
    const ogImage = matchContent(html, /<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);
    const hasManifest = /rel=["']manifest["']/i.test(html);
    const hasOpenGraph = /property=["']og:/i.test(html);
    const cssLinks = [...html.matchAll(/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi)].map(m => m[1]);
    const jsLinks = [...html.matchAll(/<script[^>]+src=["']([^"']+\.js[^"']*)["']/gi)].map(m => m[1]);
    const inlineScriptCount = (html.match(/<script(?![^>]+src=)/gi) || []).length;
    const inlineStyleCount = (html.match(/<style/gi) || []).length;
    const screenshots = findScreenshots(dir, rel, ogImage);
    const recommendedImage = screenshots[0] || ogImage || '';
    const sizeBytes = fs.statSync(full).size;
    const assessment = assessProject({
      sizeBytes,
      hasManifest,
      hasOpenGraph,
      hasScreenshot: screenshots.length > 0,
      cssCount: cssLinks.length + inlineStyleCount,
      jsCount: jsLinks.length + inlineScriptCount,
      description,
      title: title || ogTitle || '',
      rel
    });

    projects.push({
      file: rel,
      title: title || ogTitle || '',
      description,
      sizeBytes,
      categoryGuess: guessCategory([title, description, rel].join(' ')),
      statusGuess: assessment.statusGuess,
      maturityGuess: assessment.maturityGuess,
      qualityGuess: assessment.qualityGuess,
      complexityScore: assessment.complexityScore,
      readinessScore: assessment.readinessScore,
      hasManifest,
      hasOpenGraph,
      hasScreenshot: screenshots.length > 0,
      recommendedImage,
      screenshots,
      cssLinks,
      jsLinks,
      inlineScriptCount,
      inlineStyleCount,
      techGuess: {
        html: 1,
        css: cssLinks.length + inlineStyleCount,
        js: jsLinks.length + inlineScriptCount
      }
    });
  } catch (err) {
    projects.push({
      file: path.relative(ROOT, full).replace(/\\/g, '/'),
      error: err.message
    });
  }
}

function assessProject(info) {
  let complexityScore = 0;
  let readinessScore = 0;

  if (info.sizeBytes > 20_000) complexityScore += 20;
  if (info.sizeBytes > 80_000) complexityScore += 20;
  if (info.sizeBytes > 180_000) complexityScore += 20;
  complexityScore += Math.min(20, info.jsCount * 4);
  complexityScore += Math.min(15, info.cssCount * 3);
  if (info.hasManifest) complexityScore += 5;

  if (info.title) readinessScore += 20;
  if (info.description) readinessScore += 15;
  if (info.hasScreenshot) readinessScore += 20;
  if (info.hasOpenGraph) readinessScore += 10;
  if (info.hasManifest) readinessScore += 10;
  if (info.jsCount > 0) readinessScore += 10;
  if (info.cssCount > 0) readinessScore += 10;
  if (info.sizeBytes > 20_000) readinessScore += 5;

  complexityScore = clamp(complexityScore);
  readinessScore = clamp(readinessScore);

  const total = Math.round((complexityScore * 0.35) + (readinessScore * 0.65));
  const qualityGuess = scoreToQuality(total);
  const maturityGuess = readinessScore >= 75 ? 'ready' : readinessScore >= 45 ? 'beta' : 'draft';
  const statusGuess = info.rel.includes('archive') ? 'archive' : readinessScore >= 70 ? 'main' : 'review';

  return { complexityScore, readinessScore, qualityGuess, maturityGuess, statusGuess };
}

function scoreToQuality(score) {
  if (score >= 90) return { grade: 'A4', stars: 4, score, label: 'Автооценка: витринный проект' };
  if (score >= 82) return { grade: 'A3', stars: 3, score, label: 'Автооценка: очень сильный проект' };
  if (score >= 74) return { grade: 'A2', stars: 2, score, label: 'Автооценка: качественный проект' };
  if (score >= 66) return { grade: 'A1', stars: 1, score, label: 'Автооценка: сильный проект' };
  if (score >= 58) return { grade: 'B4', stars: 4, score, label: 'Автооценка: почти готовый проект' };
  if (score >= 50) return { grade: 'B3', stars: 3, score, label: 'Автооценка: хороший рабочий проект' };
  if (score >= 42) return { grade: 'B2', stars: 2, score, label: 'Автооценка: рабочий проект' };
  if (score >= 34) return { grade: 'B1', stars: 1, score, label: 'Автооценка: простой рабочий проект' };
  if (score >= 25) return { grade: 'C4', stars: 4, score, label: 'Автооценка: хороший прототип' };
  if (score >= 18) return { grade: 'C3', stars: 3, score, label: 'Автооценка: прототип' };
  if (score >= 10) return { grade: 'C2', stars: 2, score, label: 'Автооценка: ранний прототип' };
  return { grade: 'C1', stars: 1, score, label: 'Автооценка: требует проверки' };
}

function clamp(n) { return Math.max(0, Math.min(100, Math.round(n))); }

function findScreenshots(dir, htmlRel, ogImage = '') {
  const found = new Set();
  const htmlDirRel = path.dirname(htmlRel).replace(/\\/g, '/');

  if (ogImage && !/^https?:\/\//i.test(ogImage)) {
    found.add(path.join(htmlDirRel, ogImage).replace(/\\/g, '/').replace(/^\.\//, ''));
  }

  for (const name of screenshotNames) {
    const full = path.join(dir, name);
    if (fs.existsSync(full)) found.add(path.join(htmlDirRel, name).replace(/\\/g, '/').replace(/^\.\//, ''));
  }

  scanImages(dir, htmlDirRel, found, 2);
  return [...found];
}

function scanImages(dir, relDir, found, depth) {
  if (depth < 0) return;
  let items = [];
  try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch (_) { return; }

  for (const item of items) {
    const full = path.join(dir, item.name);
    const rel = path.join(relDir, item.name).replace(/\\/g, '/').replace(/^\.\//, '');

    if (item.isDirectory()) {
      if (ignore.has(item.name)) continue;
      scanImages(full, rel, found, depth - 1);
      continue;
    }

    const ext = path.extname(item.name).toLowerCase();
    if (!imageExt.has(ext)) continue;

    const low = item.name.toLowerCase();
    const likelyScreenshot = screenshotKeywords.some(k => low.includes(k));
    if (likelyScreenshot) found.add(rel);
  }
}

function matchContent(text, re) {
  const match = text.match(re);
  return match ? clean(match[1]) : '';
}

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function guessCategory(text) {
  const v = String(text || '').toLowerCase();
  if (/(полиграф|печать|типограф|фольг|уф|ppi|мм|пиксел|prepress)/.test(v)) return 'Полиграфия / Дизайн';
  if (/(игра|game|rpg|idle|dungeon|аркад|симулятор)/.test(v)) return 'Игры';
  if (/(церков|служен|библи|christ|христиан)/.test(v)) return 'Церковь';
  if (/(pdf|zip|exif|metadata|file|файл)/.test(v)) return 'Файлы / Метаданные';
  if (/(telegram|текст|пост)/.test(v)) return 'Текст / Telegram';
  if (/(математ|логик|обуч)/.test(v)) return 'Игры / Обучение';
  return 'Нужно разобрать';
}
