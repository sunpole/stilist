const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT = path.join(ROOT, 'tools', 'hub-builder', 'hub-builder-report.json');

const ignore = new Set([
  '.git',
  'node_modules'
]);

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

    try {
      const html = fs.readFileSync(full, 'utf8');
      const titleMatch = html.match(/<title>(.*?)<\/title>/i);

      projects.push({
        file: path.relative(ROOT, full),
        title: titleMatch ? titleMatch[1].trim() : '',
        sizeBytes: fs.statSync(full).size
      });
    } catch (err) {
      projects.push({
        file: path.relative(ROOT, full),
        error: err.message
      });
    }
  }
}
