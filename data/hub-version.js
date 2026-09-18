window.SUNPOLE_HUB_VERSION = {
  name: "SUNPOLE HUB",
  version: "0.8.2-canonical-project-260008",
  codename: "Canonical Music Table",
  stage: "project-migration",
  updatedAt: "2026-09-18",
  status: "alpha",
  description: "Каталог с отдельно публикуемыми canonical-проектами, шестизначной нумерацией и безопасно сохранёнными legacy-карточками.",
  changelogUrl: "docs/hub-version.html",
  repository: "sunpole/stilist",
  safeMode: true,
  projectCount: 207,
  scanSummary: {
    main: 17,
    review: 167,
    experiment: 14,
    archive: 9,
    withScreenshots: 179,
    withManifest: 8,
    withOpenGraph: 7
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
    "Каждый canonical-проект имеет собственные локальную Git-папку, public GitHub repository и GitHub Pages страницу с одинаковым шестизначным slug.",
    "Legacy-карточки сохраняются как скрытые редиректные записи: они не удаляются до проверки обратных ссылок.",
    "Публичная публикация блокируется при любом подтверждённом секрете или подозрительном файле."
  ]
};
