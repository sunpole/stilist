window.SUNPOLE_HUB_VERSION = {
  name: "SUNPOLE HUB",
  version: "0.7.0-auto-catalog",
  codename: "Auto Catalog",
  stage: "catalog-generation",
  updatedAt: "2026-06-13",
  status: "alpha",
  description: "Автоматически пересобран полный каталог проектов SUNPOLE HUB на основе HTML-страниц репозитория.",
  changelogUrl: "docs/hub-version.html",
  repository: "sunpole/stilist",
  safeMode: true,
  projectCount: 194,
  scanSummary: {
    main: 6,
    review: 170,
    experiment: 18,
    withScreenshots: 168,
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
    "Builder v0.7.0 сканирует вероятные entrypoint HTML-файлы и исключает служебные HUB/admin/docs страницы.",
    "Каталог data/projects-hub.js теперь можно воспроизвести командами scan + generate --write-data.",
    "Автооценки и связи являются черновыми: проекты с низкой готовностью помечены как review или experiment.",
    "Старые файлы проектов не удаляются и не переименовываются."
  ]
};
