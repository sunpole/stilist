const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BUILDER_DIR = path.join(ROOT, 'tools', 'hub-builder');
const REPORT = path.join(BUILDER_DIR, 'hub-builder-report.json');
const GENERATED_OUTPUT = path.join(BUILDER_DIR, 'projects-hub.generated.js');
const DATA_OUTPUT = path.join(ROOT, 'data', 'projects-hub.js');
const VERSION_OUTPUT = path.join(ROOT, 'data', 'hub-version.js');

const WRITE_DATA = process.argv.includes('--write-data');
const BUILDER_VERSION = '0.7.0-auto-catalog';
const UPDATED_AT = '2026-06-13';

if (!fs.existsSync(REPORT)) {
  console.error('Report not found:', REPORT);
  console.error('Run first: node tools/hub-builder/scan.js');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
const projects = (report.projects || []).map(toHubProject);

applyRelated(projects);
applyRepositoryShare(projects);
projects.sort(projectSort);

const hubFile = renderHubFile(projects, {
  source: 'tools/hub-builder/generate.js',
  output: WRITE_DATA ? 'data/projects-hub.js' : 'tools/hub-builder/projects-hub.generated.js'
});

fs.writeFileSync(GENERATED_OUTPUT, hubFile);
console.log('Generated draft:', GENERATED_OUTPUT);

if (WRITE_DATA) {
  fs.mkdirSync(path.dirname(DATA_OUTPUT), { recursive: true });
  fs.writeFileSync(DATA_OUTPUT, hubFile);
  fs.writeFileSync(VERSION_OUTPUT, renderVersionFile(report, projects));
  console.log('Updated data catalog:', DATA_OUTPUT);
  console.log('Updated version file:', VERSION_OUTPUT);
}

console.log('Projects generated:', projects.length);
console.log('Main projects:', projects.filter(project => project.status === 'main').length);
console.log('Review projects:', projects.filter(project => project.status === 'review').length);

function toHubProject(item, index) {
  const id = item.id || makeId(item.file, index);
  const launchUrl = item.file;
  const quality = item.qualityGuess || quality('C1', 1, 0, 'Auto: needs review');
  const tech = item.techGuess || { html: 1, css: 0, js: 0 };
  const totalTech = Math.max(1, tech.html + tech.css + tech.js);
  const category = item.categoryGuess || 'Нужно разобрать';
  const status = item.statusGuess || 'review';
  const language = item.languageGuess || 'unknown';

  return {
    id,
    title: item.title || id,
    path: launchUrl,
    launchUrl,
    category,
    status,
    maturity: item.maturityGuess || 'draft',
    featured: status === 'main' && (item.readinessScore || 0) >= 78,
    quality,
    tags: buildTags(item, category, language),
    description: item.description || 'Проект найден автоматическим сканером. Требуется ручная проверка описания.',
    note: buildNote(item),
    imageUrl: item.recommendedImage || '',
    fallbackImageUrl: fallbackImageUrl(item.recommendedImage),
    icon: guessIcon(category),
    source: 'hub-builder',
    versionOf: null,
    related: [],
    isVisible: true,
    links: {
      launch: launchUrl,
      hub: 'hub-current.html',
      source: `https://github.com/sunpole/stilist/blob/main/${launchUrl}`
    },
    metrics: {
      readiness: item.readinessScore || 0,
      visual: item.hasScreenshot ? 68 : 20,
      technical: item.complexityScore || 0,
      documentation: item.description ? 45 : 12,
      repositorySharePercent: 0
    },
    tech: {
      type: 'static-html',
      language,
      hasManifest: Boolean(item.hasManifest),
      hasOpenGraph: Boolean(item.hasOpenGraph),
      hasScreenshot: Boolean(item.hasScreenshot),
      languages: [
        { name: 'HTML', percent: Math.round((tech.html / totalTech) * 100) },
        { name: 'JavaScript', percent: Math.round((tech.js / totalTech) * 100) },
        { name: 'CSS', percent: Math.round((tech.css / totalTech) * 100) }
      ].filter(part => part.percent > 0)
    },
    builder: {
      file: item.file,
      sizeBytes: item.sizeBytes || 0,
      screenshots: item.screenshots || [],
      cssLinks: item.cssLinks || [],
      jsLinks: item.jsLinks || [],
      inlineScriptCount: item.inlineScriptCount || 0,
      inlineStyleCount: item.inlineStyleCount || 0,
      generatedAt: report.generatedAt,
      builderVersion: report.builderVersion || BUILDER_VERSION,
      needsHumanReview: status !== 'main',
      reasons: item.reasons || [],
      relationReasons: []
    }
  };
}

function renderHubFile(projects, meta) {
  return `window.SUNPOLE_HUB_META = {
  name: "SUNPOLE HUB",
  version: "${BUILDER_VERSION}",
  updatedAt: "${UPDATED_AT}",
  theme: "auto-catalog",
  repository: "sunpole/stilist",
  homeUrl: "hub-current.html",
  projectCount: ${projects.length},
  source: "${meta.source}",
  output: "${meta.output}",
  safeMode: true
};

window.SUNPOLE_PROJECTS = ${JSON.stringify(projects, null, 2)};
`;
}

function renderVersionFile(report, projects) {
  const summary = report.summary || {};
  const byStatus = summary.byStatus || {};
  const byCategory = summary.byCategory || {};
  const topCategories = Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => `${name}: ${count}`);

  return `window.SUNPOLE_HUB_VERSION = {
  name: "SUNPOLE HUB",
  version: "${BUILDER_VERSION}",
  codename: "Auto Catalog",
  stage: "catalog-generation",
  updatedAt: "${UPDATED_AT}",
  status: "alpha",
  description: "Автоматически пересобран полный каталог проектов SUNPOLE HUB на основе HTML-страниц репозитория.",
  changelogUrl: "docs/hub-version.html",
  repository: "sunpole/stilist",
  safeMode: true,
  projectCount: ${projects.length},
  scanSummary: {
    main: ${byStatus.main || 0},
    review: ${byStatus.review || 0},
    experiment: ${byStatus.experiment || 0},
    withScreenshots: ${summary.withScreenshots || 0},
    withManifest: ${summary.withManifest || 0},
    withOpenGraph: ${summary.withOpenGraph || 0}
  },
  topCategories: ${JSON.stringify(topCategories, null, 4)},
  notes: [
    "Builder v0.7.0 сканирует вероятные entrypoint HTML-файлы и исключает служебные HUB/admin/docs страницы.",
    "Каталог data/projects-hub.js теперь можно воспроизвести командами scan + generate --write-data.",
    "Автооценки и связи являются черновыми: проекты с низкой готовностью помечены как review или experiment.",
    "Старые файлы проектов не удаляются и не переименовываются."
  ]
};
`;
}

function applyRelated(projects) {
  for (const a of projects) {
    const scores = [];

    for (const b of projects) {
      if (a.id === b.id) continue;
      const result = relationScore(a, b);
      if (result.score >= 35) scores.push({ id: b.id, ...result });
    }

    scores.sort((x, y) => y.score - x.score || x.id.localeCompare(y.id));
    a.related = scores.slice(0, 6).map(item => item.id);
    a.builder.relationReasons = scores.slice(0, 6).map(item => ({
      id: item.id,
      score: item.score,
      reasons: item.reasons
    }));
  }
}

function relationScore(a, b) {
  let score = 0;
  const reasons = [];
  const aDir = parentDir(a.path);
  const bDir = parentDir(b.path);

  if (aDir && aDir === bDir) add(38, 'same-folder');
  if (baseFamily(a.id) && baseFamily(a.id) === baseFamily(b.id)) add(35, 'same-id-family');
  if (a.category === b.category && a.category !== 'Нужно разобрать') add(15, 'same-category');

  const sharedTags = (a.tags || []).filter(tag => (b.tags || []).includes(tag) && tag !== 'auto-scan');
  if (sharedTags.length) add(Math.min(30, sharedTags.length * 10), `shared-tags:${sharedTags.join(',')}`);

  const titleSimilarity = wordSimilarity(a.title, b.title);
  if (titleSimilarity >= 0.35) add(Math.round(titleSimilarity * 25), `similar-title:${titleSimilarity.toFixed(2)}`);

  return { score, reasons };

  function add(value, reason) {
    score += value;
    reasons.push(reason);
  }
}

function applyRepositoryShare(projects) {
  const total = projects.reduce((sum, project) => sum + (project.builder.sizeBytes || 0), 0) || 1;
  for (const project of projects) {
    project.metrics.repositorySharePercent = Number((((project.builder.sizeBytes || 0) / total) * 100).toFixed(2));
  }
}

function projectSort(a, b) {
  const statusWeight = { main: 0, review: 1, experiment: 2, archive: 3 };
  return (statusWeight[a.status] ?? 9) - (statusWeight[b.status] ?? 9)
    || (b.metrics.readiness - a.metrics.readiness)
    || a.id.localeCompare(b.id, 'en', { numeric: true });
}

function buildTags(item, category, language) {
  const tags = new Set(['auto-scan']);
  for (const part of String(category || '').split('/')) {
    const value = part.trim();
    if (value) tags.add(value);
  }
  if (language && language !== 'unknown') tags.add(language);
  if (item.hasScreenshot) tags.add('screenshot');
  if (item.hasManifest) tags.add('manifest');
  if (item.hasOpenGraph) tags.add('opengraph');
  if ((item.jsLinks || []).length || item.inlineScriptCount) tags.add('javascript');
  if ((item.cssLinks || []).length || item.inlineStyleCount) tags.add('css');
  return [...tags].slice(0, 10);
}

function buildNote(item) {
  const parts = [`Источник: ${item.file}`];
  if (item.hasScreenshot) parts.push('есть изображение');
  if (item.hasManifest) parts.push('есть manifest');
  if (item.hasOpenGraph) parts.push('есть Open Graph');
  parts.push(`готовность ${item.readinessScore || 0}/100`);
  return parts.join('; ');
}

function fallbackImageUrl(image) {
  if (!image || /^https?:\/\//i.test(image)) return '';
  return `https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/${image}`;
}

function guessIcon(category) {
  const value = String(category || '').toLowerCase();
  if (value.includes('полиграф')) return '🖨️';
  if (value.includes('дизайн')) return '🎨';
  if (value.includes('игры')) return '🎮';
  if (value.includes('церковь')) return '⛪';
  if (value.includes('файлы')) return '🔎';
  if (value.includes('текст')) return '✍️';
  if (value.includes('обуч')) return '🧠';
  return '📦';
}

function parentDir(value) {
  const dir = path.dirname(String(value || '').replace(/\\/g, '/'));
  return dir === '.' ? '' : dir;
}

function baseFamily(id) {
  return String(id || '')
    .replace(/[-_]?v?\d+$/i, '')
    .replace(/[-_]?index\d+$/i, '')
    .replace(/[-_]+$/g, '');
}

function wordSimilarity(a, b) {
  const aw = words(a);
  const bw = words(b);
  if (!aw.length || !bw.length) return 0;
  const shared = aw.filter(word => bw.includes(word));
  return shared.length / Math.max(aw.length, bw.length);
}

function words(value) {
  return String(value || '')
    .toLowerCase()
    .split(/[^a-zа-яё0-9]+/i)
    .filter(word => word.length >= 3);
}

function makeId(file, index) {
  const clean = String(file || '')
    .replace(/\\/g, '/')
    .replace(/\/index\.html$/i, '')
    .replace(/\.html$/i, '')
    .replace(/[^a-zA-Z0-9А-Яа-яЁё]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return clean || `project-${index + 1}`;
}

function quality(grade, stars, score, label) {
  return { grade, stars, score, label };
}
