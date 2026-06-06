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

  return {
    id,
    title,
    path: pathValue,
    launchUrl: pathValue,
    category: 'Нужно разобрать',
    status: 'review',
    maturity: 'draft',
    featured: false,
    quality: {
      grade: 'C1',
      stars: 1,
      label: 'Автоматически найденный проект',
      score: 0
    },
    tags: ['auto-scan'],
    description: 'Проект найден автоматическим сканером. Требуется ручная проверка.',
    note: `Источник: ${item.file}`,
    imageUrl: '',
    fallbackImageUrl: '',
    icon: '📦',
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
      readiness: 0,
      visual: 0,
      technical: 0,
      documentation: 0,
      repositorySharePercent: 0
    },
    tech: {
      type: 'static-html',
      language: 'unknown',
      hasManifest: false,
      hasOpenGraph: false,
      hasScreenshot: false,
      languages: []
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
