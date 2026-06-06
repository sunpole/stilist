(() => {
  const HUB_VERSION = '0.6.0-alpha';
  const HUB_URL = new URL('../../hub-v5.html', document.currentScript?.src || location.href).href;
  const PROJECT_VIEW_URL = new URL('../../project-view-v2.html', document.currentScript?.src || location.href).href;
  const currentPath = location.pathname.split('/').filter(Boolean).pop() || 'index';
  const projectId = document.documentElement.dataset.hubProjectId || window.SUNPOLE_PROJECT_ID || currentPath.replace(/\.html$/i, '');
  const storageKey = `sunpole-hub-overlay-closed-${projectId}`;

  if (sessionStorage.getItem(storageKey) === '1') return;

  const css = `
    .sp-hub-overlay{position:fixed;z-index:2147483000;left:18px;top:18px;max-width:min(460px,calc(100vw - 36px));color:#f5f7fb;font-family:Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
    .sp-hub-card{border:1px solid rgba(99,243,255,.28);background:linear-gradient(135deg,rgba(23,35,56,.96),rgba(11,17,31,.96));border-radius:18px;box-shadow:0 22px 70px rgba(0,0,0,.5),0 0 30px rgba(99,243,255,.12);overflow:hidden;backdrop-filter:blur(10px)}
    .sp-hub-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 12px;border-bottom:1px solid rgba(159,204,255,.14)}
    .sp-hub-title{font-weight:950;letter-spacing:.08em;text-transform:uppercase;color:#63f3ff;font-size:12px}
    .sp-hub-actions{display:flex;gap:6px}
    .sp-hub-btn{border:1px solid rgba(159,204,255,.18);background:rgba(255,255,255,.07);color:#f5f7fb;border-radius:10px;padding:6px 8px;cursor:pointer;font-weight:900;text-decoration:none;font-size:12px}
    .sp-hub-btn:hover{border-color:rgba(99,243,255,.7);box-shadow:0 0 16px rgba(99,243,255,.18)}
    .sp-hub-body{padding:12px;display:grid;gap:10px}
    .sp-hub-name{font-size:18px;font-weight:950;line-height:1.15}
    .sp-hub-meta{display:flex;gap:6px;flex-wrap:wrap}
    .sp-hub-pill{font-size:11px;border-radius:999px;padding:4px 7px;background:rgba(255,255,255,.07);color:#cfe3f8}
    .sp-hub-version{font-size:10px;color:#9fb0c7;text-align:right;padding:0 12px 10px}
    .sp-hub-mini{display:none;width:46px;height:46px;border-radius:16px;border:1px solid rgba(99,243,255,.35);background:linear-gradient(135deg,#172338,#0b111f);color:#63f3ff;box-shadow:0 18px 55px rgba(0,0,0,.45);font-weight:950;cursor:pointer}
    .sp-hub-overlay.min .sp-hub-card{display:none}.sp-hub-overlay.min .sp-hub-mini{display:block}
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const title = document.title || 'SUNPOLE Project';
  const root = document.createElement('div');
  root.className = 'sp-hub-overlay';
  root.innerHTML = `
    <button class="sp-hub-mini" title="SUNPOLE HUB">✶</button>
    <section class="sp-hub-card" role="dialog" aria-label="SUNPOLE HUB Project Passport">
      <div class="sp-hub-head">
        <div class="sp-hub-title">SUNPOLE HUB</div>
        <div class="sp-hub-actions">
          <button class="sp-hub-btn" data-action="min">—</button>
          <button class="sp-hub-btn" data-action="close">×</button>
        </div>
      </div>
      <div class="sp-hub-body">
        <div class="sp-hub-name">${escapeHtml(title)}</div>
        <div class="sp-hub-meta">
          <span class="sp-hub-pill">ID: ${escapeHtml(projectId)}</span>
          <span class="sp-hub-pill">Project Passport</span>
          <span class="sp-hub-pill">Overlay v1</span>
        </div>
        <div class="sp-hub-actions">
          <a class="sp-hub-btn" href="${HUB_URL}">← HUB</a>
          <a class="sp-hub-btn" href="${PROJECT_VIEW_URL}?id=${encodeURIComponent(projectId)}">Паспорт</a>
          <button class="sp-hub-btn" data-action="copy">Копировать ссылку</button>
        </div>
      </div>
      <div class="sp-hub-version">SUNPOLE HUB Overlay v${HUB_VERSION}</div>
    </section>
  `;

  root.querySelector('[data-action="min"]').addEventListener('click', () => root.classList.add('min'));
  root.querySelector('.sp-hub-mini').addEventListener('click', () => root.classList.remove('min'));
  root.querySelector('[data-action="close"]').addEventListener('click', () => {
    sessionStorage.setItem(storageKey, '1');
    root.remove();
  });
  root.querySelector('[data-action="copy"]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      root.querySelector('[data-action="copy"]').textContent = 'Скопировано';
    } catch (_) {
      root.querySelector('[data-action="copy"]').textContent = 'Не скопировано';
    }
  });

  document.body.appendChild(root);

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[ch]));
  }
})();
