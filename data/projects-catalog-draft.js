// Draft catalog for SUNPOLE HUB
// This file is a safe preparation step. It is not connected to shop.html yet.
// Status values: main, archive, experiment, review

const PROJECTS_CATALOG_DRAFT = [
  {
    id: "320",
    title: "Раскладка изделий на печатном листе",
    path: "320/",
    category: "Полиграфия",
    status: "main",
    tags: ["полиграфия", "раскладка", "печать", "калькулятор"],
    note: "Отдельный полезный производственный инструмент. Оставить в основной витрине."
  },
  {
    id: "350",
    title: "Конвертер мм ↔ пиксели",
    path: "350/",
    category: "Полиграфия / Дизайн",
    status: "main",
    tags: ["дизайн", "ppi", "пиксели", "миллиметры"],
    note: "Полезный инструмент для дизайна и печати."
  },
  {
    id: "3502",
    title: "Калькулятор полиграфических операций",
    path: "3502/",
    category: "Полиграфия",
    status: "main",
    tags: ["полиграфия", "калькулятор", "уф-лак", "фольгирование"],
    note: "Предпочтительная версия вместо 3501: есть OG, Twitter Card, manifest и favicon."
  },
  {
    id: "3501",
    title: "Калькулятор 6 полиграфических операций",
    path: "3501/",
    category: "Полиграфия",
    status: "archive",
    tags: ["полиграфия", "калькулятор", "старая версия"],
    note: "Вероятно старая версия 3502. Не удалять."
  },
  {
    id: "81",
    title: "Типография — Бизнес симулятор",
    path: "81/",
    category: "Полиграфия / Игры",
    status: "main",
    tags: ["игра", "типография", "бизнес", "симулятор"],
    note: "Более доработанная версия по сравнению с 80."
  },
  {
    id: "80",
    title: "Типография — Бизнес симулятор",
    path: "80/",
    category: "Полиграфия / Игры",
    status: "archive",
    tags: ["игра", "типография", "старая версия"],
    note: "Вероятно старая версия 81. Не удалять."
  },
  {
    id: "400",
    title: "Церковный симулятор — полный",
    path: "400/",
    category: "Церковь / Игры",
    status: "main",
    tags: ["церковь", "игра", "симулятор", "менеджмент"],
    note: "Основная версия вместо index120.html."
  },
  {
    id: "index120",
    title: "Церковный симулятор",
    path: "index120.html",
    category: "Церковь / Игры",
    status: "archive",
    tags: ["церковь", "игра", "старая версия"],
    note: "Вероятно старая версия проекта 400. Не удалять."
  },
  {
    id: "5",
    title: "Анализатор текста для Telegram",
    path: "5/",
    category: "Текст / Telegram",
    status: "main",
    tags: ["текст", "telegram", "анализ", "инструмент"],
    note: "Специализированный инструмент для Telegram."
  },
  {
    id: "index5",
    title: "Текст-Трансформер",
    path: "index5.html",
    category: "Текст",
    status: "experiment",
    tags: ["текст", "трансформация", "инструмент"],
    note: "Не прямой дубликат проекта 5. Оставить как отдельный инструмент/эксперимент."
  },
  {
    id: "370-index10",
    title: "Математический Спринт — улучшенная версия",
    path: "370/index10.html",
    category: "Игры / Обучение",
    status: "main",
    tags: ["игра", "математика", "обучение", "тренажёр"],
    note: "Кандидат на основную версию среди вариантов 370."
  },
  {
    id: "370",
    title: "Математический Спринт",
    path: "370/",
    category: "Игры / Обучение",
    status: "archive",
    tags: ["игра", "математика", "версия"],
    note: "Базовая версия. Оставить как архив/версию после проверки."
  },
  {
    id: "index20",
    title: "PDF Info Viewer Pro",
    path: "index20.html",
    category: "Файлы / PDF",
    status: "main",
    tags: ["pdf", "файлы", "анализ", "инструмент"],
    note: "PDF-специализированная утилита. Добавить в HUB."
  },
  {
    id: "index50",
    title: "JSON Admin Panel",
    path: "index50.html",
    category: "Файлы / JSON",
    status: "main",
    tags: ["json", "админка", "импорт", "инструмент"],
    note: "Полезная основа для будущего JSON Validator."
  },
  {
    id: "index70",
    title: "RGB Color Picker",
    path: "index70.html",
    category: "Дизайн / Цвет",
    status: "experiment",
    tags: ["цвет", "rgb", "дизайн", "инструмент"],
    note: "Небольшой дизайн-инструмент."
  },
  {
    id: "index90",
    title: "File Analyzer Pro",
    path: "index90.html",
    category: "Файлы / Метаданные",
    status: "main",
    tags: ["файлы", "metadata", "exif", "pdf", "zip", "анализ"],
    note: "Сильный кандидат в основные инструменты: EXIF, PDF.js, JSZip, file-type, jsmediatags."
  },
  {
    id: "index100",
    title: "Дерево навыков — Запоминалка",
    path: "index100.html",
    category: "Обучение / Эксперимент",
    status: "experiment",
    tags: ["обучение", "дерево навыков", "запоминание"],
    note: "Обучающий эксперимент с большим деревом навыков."
  },
  {
    id: "index110",
    title: "IDLE RPG Dungeon — исправленная версия",
    path: "index110.html",
    category: "Игры",
    status: "main",
    tags: ["игра", "rpg", "idle", "dungeon"],
    note: "Кандидат в основные игровые проекты."
  },
  {
    id: "index30",
    title: "Семейная игра: 5 элементов",
    path: "index30.html",
    category: "Игры / Семья",
    status: "main",
    tags: ["игра", "семья", "дети", "5 элементов"],
    note: "Семейная мини-игра."
  },
  {
    id: "index60",
    title: "Castle Wars",
    path: "index60.html",
    category: "Игры / Стратегия",
    status: "experiment",
    tags: ["игра", "стратегия", "замки", "прототип"],
    note: "Англоязычный стратегический прототип."
  },
  {
    id: "index130",
    title: "Мухобойка",
    path: "index130.html",
    category: "Игры / Аркада",
    status: "main",
    tags: ["игра", "аркада", "мобильная"],
    note: "Полноэкранная мобильная аркада."
  }
];
