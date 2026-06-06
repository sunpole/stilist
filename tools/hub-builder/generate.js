const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'tools', 'hub-builder', 'hub-builder-report.json');
const OUTPUT = path.join(ROOT, 'tools', 'hub-builder', 'projects-hub.generated.js');

if (!fs.existsSync(REPORT)) {
  console.error('Report not found:', REPORT);
  console.error('Run first: node tools/hub-builder/scan.js');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
const projects = (report.projects || []).map((item, index) => {
  const id = makeId(item.file, index);
  const title = item.title || id;
  const pathValue = item.file;
  const quality = item.qualityGuess || { grade: 'C1', stars: 1, label: 'Автоматически найденный проект', score: 0 };
  const tech = item.techGuess || { html: 1, css: 0, js: 0 };
  const totalTech = Math.max(1, tech.html + tech.css + tech.js);

  return {
    id,
    title,
    path: pathValue,
    launchUrl: pathValue,
    category: item.categoryGuess || 'Нужно разобрать',
    status: item.statusGuess || 'review',
    maturity: item.maturityGuess || 'draft',
    featured: false,
    quality,
    tags: buildTags(item),
    description: item.description || 'Проект найден автоматическим сканером. Требуется ручная проверка.',
    note: `Источник: ${item.file}`,
    imageUrl: item.recommendedImage || '',
    fallbackImageUrl: '',
    icon: guessIcon(item.categoryGuess),
    source: 'hub-builder',
    versionOf: null,
    related: [],
    isVisible: true,
    links: {
      launch: pathValue,
      hub: 'hub-current.html',
      source: ''
    },
    metrics: {
      readiness: item.readinessScore || 0,
      visual: item.hasScreenshot ? 65 : 20,
      technical: item.complexityScore || 0,
      documentation: item.description ? 40 : 10,
      repositorySharePercent: 0
    },
    tech: {
      type: 'static-html',
      language: 'unknown',
      hasManifest: Boolean(item.hasManifest),
      hasOpenGraph: Boolean(item.hasOpenGraph),
      hasScreenshot: Boolean(item.hasScreenshot),
      languages: [
        { name: 'HTML', percent: Math.round((tech.html / totalTech) * 100) },
        { name: 'JavaScript', percent: Math.round((tech.js / totalTech) * 100) },
        { name: 'CSS', percent: Math.round((tech.css / totalTech) * 100) }
      ].filter(x => x.percent > 0)
    },
    builder: {
      file: item.file,
      sizeBytes: item.sizeBytes || 0,
      screenshots: item.screenshots || [],
      cssLinks: item.cssLinks || [],
      jsLinks: item.jsLinks || [],
      generatedAt: report.generatedAt,
      needsHumanReview: true
    }
  };
});

const output = `window.SUNPOLE_HUB_META = {
  name: "SUNPOLE HUB",
  version: "generated-draft",
  updatedAt: "${new Date().toISOString()}",
  source: "tools/hub-builder/generate.js"
};

window.SUNPOLE_PROJECTS = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync(OUTPUT, output);
console.log('Generated:', OUTPUT);
console.log('Projects generated:', projects.length);

function buildTags(item) {
  const tags = new Set(['auto-scan']);
  const category = String(item.categoryGuess || '').toLowerCase();
  if (category.includes('полиграф')) tags.add('полиграфия');
  if (category.includes('дизайн')) tags.add('дизайн');
  if (category.includes('игры')) tags.add('игра');
  if (category.includes('церковь')) tags.add('церковь');
  if (category.includes('telegram')) tags.add('telegram');
  if (category.includes('файлы')) tags.add('файлы');
  if (item.hasScreenshot) tags.add('скриншот');
  if (item.hasManifest) tags.add('manifest');
  if (item.hasOpenGraph) tags.add('opengraph');
  return [...tags];
}

function guessIcon(category) {
  const v = String(category || '').toLowerCase();
  if (v.includes('полиграф')) return '🖨️';
  if (v.includes('дизайн')) return '🎨';
  if (v.includes('игры')) return '🎮';
  if (v.includes('церковь')) return '⛪';
  if (v.includes('файлы')) return '🔎';
  if (v.includes('telegram')) return '✍️';
  return '📦';
}

function makeId(file, index) {
  const clean = String(file || '')
    .replace(/\\/g, '/')
    .replace(/\.html$/i, '')
    .replace(/index$/i, '')
    .replace(/\/$/, '')
    .replace(/[^a-zA-Z0-9а-яА-ЯёЁ]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

  return clean || `project-${index + 1}`;
}
