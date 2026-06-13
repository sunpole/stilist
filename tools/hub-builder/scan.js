const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BUILDER_DIR = path.join(ROOT, 'tools', 'hub-builder');
const REPORT = path.join(BUILDER_DIR, 'hub-builder-report.json');

const IGNORE_DIRS = new Set([
  '.git',
  '.github',
  'node_modules',
  '.vscode',
  '.idea'
]);

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const SCREENSHOT_HINTS = ['preview', 'screenshot', 'screen', 'cover', 'thumb', 'thumbnail', 'stilist'];
const PROJECT_ENTRY_RE = /(?:^|\/)(index\d*\.html|[^/]+\/index\.html)$/i;

const projects = [];
const warnings = [];

walk(ROOT);

projects.sort((a, b) => a.file.localeCompare(b.file, 'en', { numeric: true }));

const summary = buildSummary(projects);
const report = {
  schemaVersion: 2,
  builderVersion: '0.7.0-auto-catalog',
  generatedAt: new Date().toISOString(),
  repository: 'sunpole/stilist',
  root: path.basename(ROOT),
  projectCount: projects.length,
  summary,
  warnings,
  projects
};

fs.mkdirSync(BUILDER_DIR, { recursive: true });
fs.writeFileSync(REPORT, `${JSON.stringify(report, null, 2)}\n`);

console.log('Report saved:', REPORT);
console.log('Projects found:', projects.length);
console.log('Ready projects:', summary.byStatus.main || 0);
console.log('Review projects:', summary.byStatus.review || 0);

function walk(dir) {
  let items = [];
  try {
    items = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    warnings.push({ type: 'read-dir-failed', path: relativePath(dir), message: err.message });
    return;
  }

  for (const item of items) {
    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (IGNORE_DIRS.has(item.name)) continue;
      walk(full);
      continue;
    }

    if (!item.isFile() || path.extname(item.name).toLowerCase() !== '.html') continue;
    if (!isLikelyProjectEntry(full)) continue;
    scanHtml(full);
  }
}

function isLikelyProjectEntry(full) {
  const rel = relativePath(full);
  if (rel.startsWith('docs/')) return false;
  if (rel.startsWith('add/')) return false;
  if (rel.startsWith('admin/')) return false;
  if (rel.startsWith('tools/')) return false;
  if (/^hub(?:-|\.|$)/i.test(rel)) return false;
  if (/^project-view/i.test(rel)) return false;
  if (/^shop/i.test(rel) || /^c\d*-shop/i.test(rel)) return false;
  return PROJECT_ENTRY_RE.test(rel);
}

function scanHtml(full) {
  const rel = relativePath(full);

  try {
    const html = fs.readFileSync(full, 'utf8');
    const dir = path.dirname(full);
    const title = firstNonEmpty(
      metaContent(html, 'property', 'og:title'),
      matchContent(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
      titleFromPath(rel)
    );
    const description = firstNonEmpty(
      metaContent(html, 'name', 'description'),
      metaContent(html, 'property', 'og:description')
    );
    const ogImage = metaContent(html, 'property', 'og:image');
    const hasManifest = /<link[^>]+rel=["'][^"']*manifest[^"']*["']/i.test(html);
    const hasOpenGraph = /<meta[^>]+property=["']og:/i.test(html);
    const cssLinks = unique([...html.matchAll(/<link[^>]+href=["']([^"']+\.css(?:\?[^"']*)?)["']/gi)].map(m => m[1]));
    const jsLinks = unique([...html.matchAll(/<script[^>]+src=["']([^"']+\.js(?:\?[^"']*)?)["']/gi)].map(m => m[1]));
    const inlineScriptCount = (html.match(/<script(?![^>]+src=)/gi) || []).length;
    const inlineStyleCount = (html.match(/<style\b/gi) || []).length;
    const screenshots = findScreenshots(dir, rel, ogImage);
    const sizeBytes = fs.statSync(full).size;
    const text = stripTags(html).slice(0, 12000);
    const categoryGuess = guessCategory([title, description, rel, text.slice(0, 800)].join(' '));
    const languageGuess = guessLanguage(html, text);
    const assessment = assessProject({
      rel,
      title,
      description,
      sizeBytes,
      hasManifest,
      hasOpenGraph,
      hasScreenshot: screenshots.length > 0,
      cssCount: cssLinks.length + inlineStyleCount,
      jsCount: jsLinks.length + inlineScriptCount,
      textLength: text.length
    });

    projects.push({
      file: rel,
      id: makeId(rel),
      title,
      description,
      sizeBytes,
      categoryGuess,
      statusGuess: assessment.statusGuess,
      maturityGuess: assessment.maturityGuess,
      qualityGuess: assessment.qualityGuess,
      complexityScore: assessment.complexityScore,
      readinessScore: assessment.readinessScore,
      hasManifest,
      hasOpenGraph,
      hasScreenshot: screenshots.length > 0,
      recommendedImage: screenshots[0] || normalizeAssetPath(ogImage, path.dirname(rel)),
      screenshots,
      cssLinks,
      jsLinks,
      inlineScriptCount,
      inlineStyleCount,
      languageGuess,
      techGuess: {
        html: 1,
        css: cssLinks.length + inlineStyleCount,
        js: jsLinks.length + inlineScriptCount
      },
      reasons: assessment.reasons
    });
  } catch (err) {
    warnings.push({ type: 'scan-html-failed', path: rel, message: err.message });
  }
}

function assessProject(info) {
  const reasons = [];
  let complexityScore = 0;
  let readinessScore = 0;

  if (info.title) add('title', 20, 'readiness');
  if (info.description) add('description', 14, 'readiness');
  if (info.hasScreenshot) add('screenshot', 18, 'readiness');
  if (info.hasOpenGraph) add('open-graph', 10, 'readiness');
  if (info.hasManifest) add('manifest', 8, 'readiness');
  if (info.jsCount > 0) add('javascript', 10, 'readiness');
  if (info.cssCount > 0) add('styles', 8, 'readiness');
  if (info.sizeBytes > 20_000) add('substantial-html', 6, 'readiness');
  if (info.textLength > 1500) add('content', 6, 'readiness');

  if (info.sizeBytes > 20_000) add('20kb+', 18, 'complexity');
  if (info.sizeBytes > 80_000) add('80kb+', 18, 'complexity');
  if (info.sizeBytes > 180_000) add('180kb+', 16, 'complexity');
  if (info.jsCount) add('js-count', Math.min(22, info.jsCount * 4), 'complexity');
  if (info.cssCount) add('css-count', Math.min(16, info.cssCount * 3), 'complexity');
  if (info.hasManifest) add('app-shell', 5, 'complexity');

  complexityScore = clamp(complexityScore);
  readinessScore = clamp(readinessScore);

  const score = clamp((complexityScore * 0.35) + (readinessScore * 0.65));
  const statusGuess = readinessScore >= 68 ? 'main' : readinessScore >= 42 ? 'review' : 'experiment';
  const maturityGuess = readinessScore >= 78 ? 'ready' : readinessScore >= 52 ? 'beta' : 'draft';

  return {
    complexityScore,
    readinessScore,
    qualityGuess: scoreToQuality(score),
    statusGuess,
    maturityGuess,
    reasons
  };

  function add(reason, value, bucket) {
    if (bucket === 'readiness') readinessScore += value;
    if (bucket === 'complexity') complexityScore += value;
    reasons.push({ bucket, reason, value });
  }
}

function scoreToQuality(score) {
  if (score >= 90) return quality('A4', 4, score, 'Auto: showcase project');
  if (score >= 82) return quality('A3', 3, score, 'Auto: very strong project');
  if (score >= 74) return quality('A2', 2, score, 'Auto: quality project');
  if (score >= 66) return quality('A1', 1, score, 'Auto: strong project');
  if (score >= 58) return quality('B4', 4, score, 'Auto: nearly ready project');
  if (score >= 50) return quality('B3', 3, score, 'Auto: good working project');
  if (score >= 42) return quality('B2', 2, score, 'Auto: working project');
  if (score >= 34) return quality('B1', 1, score, 'Auto: simple working project');
  if (score >= 25) return quality('C4', 4, score, 'Auto: good prototype');
  if (score >= 18) return quality('C3', 3, score, 'Auto: prototype');
  if (score >= 10) return quality('C2', 2, score, 'Auto: early prototype');
  return quality('C1', 1, score, 'Auto: needs review');
}

function quality(grade, stars, score, label) {
  return { grade, stars, score, label };
}

function findScreenshots(dir, htmlRel, ogImage = '') {
  const found = new Set();
  const htmlDirRel = path.dirname(htmlRel).replace(/\\/g, '/');
  const normalizedOg = normalizeAssetPath(ogImage, htmlDirRel);

  if (normalizedOg) found.add(normalizedOg);
  scanImages(dir, htmlDirRel === '.' ? '' : htmlDirRel, found, 2);

  return [...found].filter(Boolean).sort((a, b) => scoreImageName(b) - scoreImageName(a));
}

function scanImages(dir, relDir, found, depth) {
  if (depth < 0) return;

  let items = [];
  try {
    items = fs.readdirSync(dir, { withFileTypes: true });
  } catch (_) {
    return;
  }

  for (const item of items) {
    const full = path.join(dir, item.name);
    const rel = path.join(relDir, item.name).replace(/\\/g, '/').replace(/^\.\//, '');

    if (item.isDirectory()) {
      if (!IGNORE_DIRS.has(item.name)) scanImages(full, rel, found, depth - 1);
      continue;
    }

    if (!IMAGE_EXTENSIONS.has(path.extname(item.name).toLowerCase())) continue;
    if (SCREENSHOT_HINTS.some(hint => item.name.toLowerCase().includes(hint))) found.add(rel);
  }
}

function buildSummary(items) {
  return {
    byStatus: countBy(items, 'statusGuess'),
    byCategory: countBy(items, 'categoryGuess'),
    withScreenshots: items.filter(item => item.hasScreenshot).length,
    withManifest: items.filter(item => item.hasManifest).length,
    withOpenGraph: items.filter(item => item.hasOpenGraph).length
  };
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || 'unknown';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function guessCategory(text) {
  const v = String(text || '').toLowerCase();
  if (/(типограф|полиграф|печать|фольг|лак|ppi|пиксел|prepress|print|polygraph)/i.test(v)) return 'Полиграфия / Дизайн';
  if (/(church|церков|служен|библ|христ)/i.test(v)) return 'Церковь';
  if (/(pdf|zip|exif|metadata|file|файл|json)/i.test(v)) return 'Файлы / Данные';
  if (/(telegram|текст|пост|copy|content)/i.test(v)) return 'Текст / Контент';
  if (/(цвет|color|rgb|design|стил|ui|css)/i.test(v)) return 'Дизайн / UI';
  if (/(математ|логик|обуч|quiz|learn|skill)/i.test(v)) return 'Обучение';
  if (/(игра|game|rpg|idle|dungeon|arcade|clicker|miner|castle|симулятор)/i.test(v)) return 'Игры';
  return 'Нужно разобрать';
}

function guessLanguage(html, text) {
  const lang = matchContent(html, /<html[^>]+lang=["']([^"']+)["']/i);
  if (lang) return lang.toLowerCase();
  const cyrillic = (String(text).match(/[А-Яа-яЁё]/g) || []).length;
  const latin = (String(text).match(/[A-Za-z]/g) || []).length;
  if (cyrillic > latin * 0.4) return 'ru';
  if (latin > 0) return 'en';
  return 'unknown';
}

function titleFromPath(rel) {
  return rel.replace(/\/index\.html$/i, '').replace(/\.html$/i, '').replace(/[-_]/g, ' ');
}

function makeId(file) {
  return String(file || '')
    .replace(/\\/g, '/')
    .replace(/\/index\.html$/i, '')
    .replace(/\.html$/i, '')
    .replace(/[^a-zA-Z0-9А-Яа-яЁё]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase() || 'project';
}

function metaContent(html, attr, value) {
  const re = new RegExp(`<meta[^>]+${attr}=["']${escapeRegExp(value)}["'][^>]+content=["']([^"']*)["'][^>]*>`, 'i');
  return matchContent(html, re);
}

function normalizeAssetPath(value, baseDir) {
  const raw = String(value || '').trim();
  if (!raw || /^https?:\/\//i.test(raw) || raw.startsWith('data:')) return raw;
  return path.join(baseDir || '', raw).replace(/\\/g, '/').replace(/^\.\//, '');
}

function scoreImageName(value) {
  const low = String(value || '').toLowerCase();
  let score = 0;
  if (low.includes('preview')) score += 5;
  if (low.includes('screenshot')) score += 4;
  if (low.includes('stilist')) score += 3;
  if (low.endsWith('.webp')) score += 2;
  if (low.endsWith('.jpg') || low.endsWith('.jpeg')) score += 1;
  return score;
}

function stripTags(html) {
  return String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchContent(text, re) {
  const match = String(text || '').match(re);
  return match ? clean(match[1]) : '';
}

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function firstNonEmpty(...values) {
  return values.find(value => String(value || '').trim()) || '';
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function clamp(n) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

function relativePath(full) {
  return path.relative(ROOT, full).replace(/\\/g, '/');
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
