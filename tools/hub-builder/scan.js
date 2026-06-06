const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'tools', 'hub-builder', 'hub-builder-report.json');

const ignore = new Set(['.git', 'node_modules']);
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
    const hasManifest = /rel=["']manifest["']/i.test(html);
    const hasOpenGraph = /property=["']og:/i.test(html);
    const cssLinks = [...html.matchAll(/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi)].map(m => m[1]);
    const jsLinks = [...html.matchAll(/<script[^>]+src=["']([^"']+\.js[^"']*)["']/gi)].map(m => m[1]);
    const inlineScriptCount = (html.match(/<script(?![^>]+src=)/gi) || []).length;
    const inlineStyleCount = (html.match(/<style/gi) || []).length;
    const screenshots = findScreenshots(dir, rel);

    projects.push({
      file: rel,
      title: title || ogTitle || '',
      description,
      sizeBytes: fs.statSync(full).size,
      categoryGuess: guessCategory([title, description, rel].join(' ')),
      statusGuess: rel.includes('archive') ? 'archive' : 'review',
      hasManifest,
      hasOpenGraph,
      hasScreenshot: screenshots.length > 0,
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

function findScreenshots(dir, htmlRel) {
  const found = [];
  const htmlDirRel = path.dirname(htmlRel).replace(/\\/g, '/');
  for (const name of screenshotNames) {
    const full = path.join(dir, name);
    if (fs.existsSync(full)) found.push(path.join(htmlDirRel, name).replace(/\\/g, '/').replace(/^\.\//, ''));
  }
  return found;
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
