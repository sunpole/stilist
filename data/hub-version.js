window.SUNPOLE_HUB_VERSION = {
  name: "SUNPOLE HUB",
  version: "0.7.4-legacy-redirects",
  codename: "Legacy Redirects",
  stage: "project-migration",
  updatedAt: "2026-09-18",
  status: "alpha",
  description: "Каталог с отдельно публикуемыми canonical-проектами и безопасно сохранёнными legacy-карточками.",
  changelogUrl: "docs/hub-version.html",
  repository: "sunpole/stilist",
  safeMode: true,
  projectCount: 200,
  scanSummary: {
    main: 11,
    review: 170,
    experiment: 18,
    archive: 1,
    withScreenshots: 174,
    withManifest: 4,
    withOpenGraph: 3
  },
  topCategories: [
    "Нужно разобрать: 52",
    "Полиграфия / Дизайн: 41",
    "Игры: 40",
    "Церковь: 17",
    "Обучение: 12",
    "Файлы / Данные: 12"
],
  notes: [
    "Каждый canonical-проект имеет собственные локальную Git-папку, public GitHub repository и GitHub Pages страницу с одинаковым slug.",
    "Legacy-карточки сохраняются как скрытые редиректные записи: они не удаляются до проверки обратных ссылок.",
    "Публичная публикация блокируется при любом подтверждённом секрете или подозрительном файле."
  ]
};
