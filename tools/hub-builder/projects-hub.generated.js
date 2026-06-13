window.SUNPOLE_HUB_META = {
  name: "SUNPOLE HUB",
  version: "0.7.0-auto-catalog",
  updatedAt: "2026-06-13",
  theme: "auto-catalog",
  repository: "sunpole/stilist",
  homeUrl: "hub-current.html",
  projectCount: 194,
  source: "tools/hub-builder/generate.js",
  output: "data/projects-hub.js",
  safeMode: true
};

window.SUNPOLE_PROJECTS = [
  {
    "id": "3502",
    "title": "Калькулятор полиграфических операций",
    "path": "3502/index.html",
    "launchUrl": "3502/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "main",
    "maturity": "ready",
    "featured": true,
    "quality": {
      "grade": "A1",
      "stars": 1,
      "score": 73,
      "label": "Auto: strong project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "manifest",
      "opengraph",
      "javascript",
      "css"
    ],
    "description": "Расчет 6 операций УФ-лакирования и фольгирования. Экспорт в PDF и TXT.",
    "note": "Источник: 3502/index.html; есть изображение; есть manifest; есть Open Graph; готовность 94/100",
    "imageUrl": "https://sunpole.github.io/stilist/3502/preview.jpg",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "3501",
      "350",
      "350-index1",
      "80",
      "81",
      "82"
    ],
    "isVisible": true,
    "links": {
      "launch": "3502/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/3502/index.html"
    },
    "metrics": {
      "readiness": 94,
      "visual": 68,
      "technical": 34,
      "documentation": 45,
      "repositorySharePercent": 0.57
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": true,
      "hasOpenGraph": true,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "3502/index.html",
      "sizeBytes": 35558,
      "screenshots": [
        "https://sunpole.github.io/stilist/3502/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": false,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "description",
          "value": 14
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "open-graph",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "manifest",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        },
        {
          "bucket": "complexity",
          "reason": "app-shell",
          "value": 5
        }
      ],
      "relationReasons": [
        {
          "id": "3501",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "350",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,manifest,opengraph,javascript,css"
          ]
        },
        {
          "id": "350-index1",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "80",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "81",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "82",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "350",
    "title": "Конвертер мм ↔ пиксели",
    "path": "350/index.html",
    "launchUrl": "350/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "main",
    "maturity": "ready",
    "featured": true,
    "quality": {
      "grade": "B4",
      "stars": 4,
      "score": 61,
      "label": "Auto: nearly ready project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "manifest",
      "opengraph",
      "javascript",
      "css"
    ],
    "description": "Конвертер миллиметров в пиксели и обратно",
    "note": "Источник: 350/index.html; есть изображение; есть manifest; есть Open Graph; готовность 88/100",
    "imageUrl": "https://sunpole.github.io/stilist/350/preview.jpg",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "350-index1",
      "3501",
      "3502",
      "80",
      "81",
      "82"
    ],
    "isVisible": true,
    "links": {
      "launch": "350/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/350/index.html"
    },
    "metrics": {
      "readiness": 88,
      "visual": 68,
      "technical": 12,
      "documentation": 45,
      "repositorySharePercent": 0.23
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": true,
      "hasOpenGraph": true,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "350/index.html",
      "sizeBytes": 14303,
      "screenshots": [
        "https://sunpole.github.io/stilist/350/preview.jpg",
        "350/preview.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": false,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "description",
          "value": 14
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "open-graph",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "manifest",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        },
        {
          "bucket": "complexity",
          "reason": "app-shell",
          "value": 5
        }
      ],
      "relationReasons": [
        {
          "id": "350-index1",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "3501",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "3502",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,manifest,opengraph,javascript,css"
          ]
        },
        {
          "id": "80",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "81",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "82",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "pass",
    "title": "⚡ NEON PASS 2026 — генератор безопасных паролей",
    "path": "pass/index.html",
    "launchUrl": "pass/index.html",
    "category": "Дизайн / UI",
    "status": "main",
    "maturity": "ready",
    "featured": true,
    "quality": {
      "grade": "B4",
      "stars": 4,
      "score": 65,
      "label": "Auto: nearly ready project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "opengraph",
      "javascript",
      "css"
    ],
    "description": "Современный неоновый генератор с уникальными алгоритмами и военным стилем",
    "note": "Источник: pass/index.html; есть изображение; есть Open Graph; готовность 86/100",
    "imageUrl": "https://github.com/sunpole/stilist/raw/main/pass/Screenshot.jpg",
    "fallbackImageUrl": "",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "101",
      "index100",
      "index154",
      "index2",
      "index23",
      "index24"
    ],
    "isVisible": true,
    "links": {
      "launch": "pass/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/pass/index.html"
    },
    "metrics": {
      "readiness": 86,
      "visual": 68,
      "technical": 25,
      "documentation": 45,
      "repositorySharePercent": 0.48
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": true,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "pass/index.html",
      "sizeBytes": 29532,
      "screenshots": [
        "https://github.com/sunpole/stilist/raw/main/pass/Screenshot.jpg",
        "pass/Screenshot.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": false,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "description",
          "value": 14
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "open-graph",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "101",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index24",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index90",
    "title": "File Analyzer Pro",
    "path": "index90.html",
    "launchUrl": "index90.html",
    "category": "Файлы / Данные",
    "status": "main",
    "maturity": "ready",
    "featured": true,
    "quality": {
      "grade": "B4",
      "stars": 4,
      "score": 62,
      "label": "Auto: nearly ready project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "en",
      "screenshot",
      "manifest",
      "javascript",
      "css"
    ],
    "description": "Мощный анализатор файлов с поддержкой метаданных",
    "note": "Источник: index90.html; есть изображение; есть manifest; готовность 78/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index86",
      "index87",
      "index88",
      "index10",
      "index113",
      "index13"
    ],
    "isVisible": true,
    "links": {
      "launch": "index90.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index90.html"
    },
    "metrics": {
      "readiness": 78,
      "visual": 68,
      "technical": 33,
      "documentation": 45,
      "repositorySharePercent": 0.25
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": true,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 11
        },
        {
          "name": "JavaScript",
          "percent": 67
        },
        {
          "name": "CSS",
          "percent": 22
        }
      ]
    },
    "builder": {
      "file": "index90.html",
      "sizeBytes": 15544,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      ],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
        "https://cdn.jsdelivr.net/npm/file-type@16.5.4/dist/index.umd.min.js",
        "https://cdn.jsdelivr.net/npm/jsmediatags@3.9.7/dist/jsmediatags.min.js"
      ],
      "inlineScriptCount": 2,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": false,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "description",
          "value": 14
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "manifest",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 22
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "app-shell",
          "value": 5
        }
      ],
      "relationReasons": [
        {
          "id": "index86",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index87",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index88",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "2025",
    "title": "Lетучие клетки",
    "path": "2025/index.html",
    "launchUrl": "2025/index.html",
    "category": "Игры",
    "status": "main",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Головоломка с переключением клеток 3x3",
    "note": "Источник: 2025/index.html; есть изображение; готовность 70/100",
    "imageUrl": "2025/stilist_2025.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/2025/stilist_2025.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "102",
      "index102",
      "index104",
      "index105",
      "index106",
      "index107"
    ],
    "isVisible": true,
    "links": {
      "launch": "2025/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/2025/index.html"
    },
    "metrics": {
      "readiness": 70,
      "visual": 68,
      "technical": 10,
      "documentation": 45,
      "repositorySharePercent": 0.09
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "2025/index.html",
      "sizeBytes": 5745,
      "screenshots": [
        "2025/stilist_2025.jpg"
      ],
      "cssLinks": [
        "styles.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [
        "app.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 0,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": false,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "description",
          "value": 14
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "102",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index10",
    "title": "Демо — элемент \"1\" (a) — варианты и live CSS",
    "path": "index10.html",
    "launchUrl": "index10.html",
    "category": "Файлы / Данные",
    "status": "main",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 54,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index10.html; есть изображение; готовность 68/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index113",
      "index13",
      "index20",
      "index48",
      "index49",
      "index50"
    ],
    "isVisible": true,
    "links": {
      "launch": "index10.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index10.html"
    },
    "metrics": {
      "readiness": 68,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.33
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index10.html",
      "sizeBytes": 20777,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 2,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": false,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "readiness",
          "reason": "content",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index20",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index48",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index49",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index50",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index70",
    "title": "RGB Color Picker",
    "path": "index70.html",
    "launchUrl": "index70.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 47,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "manifest",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index70.html; есть изображение; есть manifest; готовность 64/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index148",
      "index149",
      "index39",
      "index4",
      "index5",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index70.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index70.html"
    },
    "metrics": {
      "readiness": 64,
      "visual": 68,
      "technical": 16,
      "documentation": 12,
      "repositorySharePercent": 0.07
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": true,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index70.html",
      "sizeBytes": 4124,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 2,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "manifest",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        },
        {
          "bucket": "complexity",
          "reason": "app-shell",
          "value": 5
        }
      ],
      "relationReasons": [
        {
          "id": "index148",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index149",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index39",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index4",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index5",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index96",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "5",
    "title": "Анализатор текста для Telegram",
    "path": "5/index.html",
    "launchUrl": "5/index.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 5/index.html; есть изображение; готовность 62/100",
    "imageUrl": "5/stilist_5.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/5/stilist_5.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index148",
      "index149",
      "index39",
      "index4",
      "index5",
      "index70"
    ],
    "isVisible": true,
    "links": {
      "launch": "5/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/5/index.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.61
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "5/index.html",
      "sizeBytes": 37749,
      "screenshots": [
        "5/stilist_5.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index148",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index149",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index39",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index4",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index5",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index70",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "320",
    "title": "Расчет раскладки изделий на печатном листе",
    "path": "320/index.html",
    "launchUrl": "320/index.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 320/index.html; есть изображение; готовность 62/100",
    "imageUrl": "320/stilist_320.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/320/stilist_320.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [],
    "isVisible": true,
    "links": {
      "launch": "320/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/320/index.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.73
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "320/index.html",
      "sizeBytes": 45518,
      "screenshots": [
        "320/stilist_320.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": []
    }
  },
  {
    "id": "370",
    "title": "Математический Спринт",
    "path": "370/index.html",
    "launchUrl": "370/index.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index2",
      "370-index3",
      "370-index4",
      "370-index5",
      "370-index6",
      "370-index7"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.56
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index.html",
      "sizeBytes": 34620,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index2",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index3",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index4",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index5",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index6",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index7",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index2",
    "title": "Математический Спринт",
    "path": "370/index2.html",
    "launchUrl": "370/index2.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index2.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index3",
      "370-index4",
      "370-index5",
      "370-index6",
      "370-index7",
      "370-index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index2.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index2.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.6
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index2.html",
      "sizeBytes": 37423,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index3",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index4",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index5",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index6",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index7",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index10",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index3",
    "title": "Математический Спринт",
    "path": "370/index3.html",
    "launchUrl": "370/index3.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index3.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index2",
      "370-index4",
      "370-index5",
      "370-index6",
      "370-index7",
      "370-index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index3.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index3.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.61
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index3.html",
      "sizeBytes": 38168,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index2",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index4",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index5",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index6",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index7",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index10",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index4",
    "title": "Математический Спринт",
    "path": "370/index4.html",
    "launchUrl": "370/index4.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index4.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index2",
      "370-index3",
      "370-index5",
      "370-index6",
      "370-index7",
      "370-index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index4.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index4.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.91
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index4.html",
      "sizeBytes": 56421,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index2",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index3",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index5",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index6",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index7",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index10",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index5",
    "title": "Математический Спринт",
    "path": "370/index5.html",
    "launchUrl": "370/index5.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index5.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index2",
      "370-index3",
      "370-index4",
      "370-index6",
      "370-index7",
      "370-index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index5.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index5.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 1.12
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index5.html",
      "sizeBytes": 69484,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index2",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index3",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index4",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index6",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index7",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index10",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index6",
    "title": "Математический Спринт",
    "path": "370/index6.html",
    "launchUrl": "370/index6.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index6.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index2",
      "370-index3",
      "370-index4",
      "370-index5",
      "370-index7",
      "370-index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index6.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index6.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 1.12
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index6.html",
      "sizeBytes": 69484,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index2",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index3",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index4",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index5",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index7",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index10",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index7",
    "title": "Математический Спринт",
    "path": "370/index7.html",
    "launchUrl": "370/index7.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index7.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index2",
      "370-index3",
      "370-index4",
      "370-index5",
      "370-index6",
      "370-index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index7.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index7.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 1.19
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index7.html",
      "sizeBytes": 73947,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index2",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index3",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index4",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index5",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index6",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index10",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index8",
    "title": "Математический Спринт — Улучшенная версия",
    "path": "370/index8.html",
    "launchUrl": "370/index8.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index8.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index10",
      "370-index9",
      "370-index2",
      "370-index3",
      "370-index4",
      "370-index5"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index8.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index8.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.32
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index8.html",
      "sizeBytes": 82197,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index10",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index9",
          "score": 137,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "370-index2",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index3",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index4",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index5",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index9",
    "title": "Математический Спринт — Исправленная версия",
    "path": "370/index9.html",
    "launchUrl": "370/index9.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index9.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index10",
      "370-index8",
      "370-index2",
      "370-index3",
      "370-index4",
      "370-index5"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index9.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index9.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 1.07
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index9.html",
      "sizeBytes": 66496,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index10",
          "score": 137,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "370-index8",
          "score": 137,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "370-index2",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index3",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index4",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index5",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "370-index10",
    "title": "Математический Спринт — Улучшенная версия",
    "path": "370/index10.html",
    "launchUrl": "370/index10.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 370/index10.html; есть изображение; готовность 62/100",
    "imageUrl": "370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "370-index8",
      "370-index9",
      "370-index2",
      "370-index3",
      "370-index4",
      "370-index5"
    ],
    "isVisible": true,
    "links": {
      "launch": "370/index10.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/370/index10.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.32
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "370/index10.html",
      "sizeBytes": 82197,
      "screenshots": [
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "370-index8",
          "score": 143,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "370-index9",
          "score": 137,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "370-index2",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index3",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index4",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "370-index5",
          "score": 131,
          "reasons": [
            "same-folder",
            "same-id-family",
            "same-category",
            "shared-tags:Обучение,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "400",
    "title": "Церковный симулятор — полный",
    "path": "400/index.html",
    "launchUrl": "400/index.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 400/index.html; есть изображение; готовность 62/100",
    "imageUrl": "400/stilist_400.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/400/stilist_400.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "400-index2",
      "index116",
      "index119",
      "index120",
      "index121",
      "index122"
    ],
    "isVisible": true,
    "links": {
      "launch": "400/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/400/index.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.63
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "400/index.html",
      "sizeBytes": 38931,
      "screenshots": [
        "400/stilist_400.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "400-index2",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index119",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index120",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index121",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index122",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "400-index2",
    "title": "Церковный симулятор — полный",
    "path": "400/index2.html",
    "launchUrl": "400/index2.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 400/index2.html; есть изображение; готовность 62/100",
    "imageUrl": "400/stilist_400.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/400/stilist_400.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "400",
      "index116",
      "index119",
      "index120",
      "index121",
      "index122"
    ],
    "isVisible": true,
    "links": {
      "launch": "400/index2.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/400/index2.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.63
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "400/index2.html",
      "sizeBytes": 38935,
      "screenshots": [
        "400/stilist_400.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "400",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index119",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index120",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index121",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index122",
          "score": 62,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "3501",
    "title": "Калькулятор 6 полиграфических операций",
    "path": "3501/index.html",
    "launchUrl": "3501/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 3501/index.html; есть изображение; готовность 62/100",
    "imageUrl": "3501/stilist_3501.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/3501/stilist_3501.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "3502",
      "350",
      "350-index1",
      "80",
      "81",
      "82"
    ],
    "isVisible": true,
    "links": {
      "launch": "3501/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/3501/index.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 29,
      "documentation": 12,
      "repositorySharePercent": 0.47
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "3501/index.html",
      "sizeBytes": 29482,
      "screenshots": [
        "3501/stilist_3501.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "3502",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "350",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "350-index1",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "80",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "81",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "82",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index5",
    "title": "Текст-Трансформер",
    "path": "index5.html",
    "launchUrl": "index5.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index5.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index148",
      "index149",
      "index39",
      "index4",
      "index70",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index5.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index5.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.37
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index5.html",
      "sizeBytes": 23170,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index148",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index149",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index39",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index4",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index70",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index96",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index6",
    "title": "Торговый Терминал 1984",
    "path": "index6.html",
    "launchUrl": "index6.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index6.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index11",
      "index7",
      "index8",
      "index9",
      "index",
      "index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "index6.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index6.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.35
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index6.html",
      "sizeBytes": 21995,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index11",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index7",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index8",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index9",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index11",
    "title": "Торговый Терминал 1984",
    "path": "index11.html",
    "launchUrl": "index11.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index11.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index6",
      "index7",
      "index8",
      "index9",
      "index",
      "index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "index11.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index11.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.37
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index11.html",
      "sizeBytes": 23186,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index6",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index7",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index8",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index9",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index14",
    "title": "Retro Platformer",
    "path": "index14.html",
    "launchUrl": "index14.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index14.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index102",
      "index104",
      "index105",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index14.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index14.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.34
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index14.html",
      "sizeBytes": 21077,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index18",
    "title": "Станок крафта - POE Style",
    "path": "index18.html",
    "launchUrl": "index18.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index18.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index15",
      "index16",
      "index",
      "index10",
      "index100",
      "index101"
    ],
    "isVisible": true,
    "links": {
      "launch": "index18.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index18.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.65
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index18.html",
      "sizeBytes": 40476,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index15",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index16",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index19",
    "title": "Геймбой Эмулятор",
    "path": "index19.html",
    "launchUrl": "index19.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index19.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index21",
      "index22",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index19.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index19.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.38
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index19.html",
      "sizeBytes": 23327,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index21",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index22",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index21",
    "title": "Геймбой Эмулятор",
    "path": "index21.html",
    "launchUrl": "index21.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index21.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index19",
      "index22",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index21.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index21.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.43
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index21.html",
      "sizeBytes": 26937,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index19",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index22",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index22",
    "title": "Геймбой Эмулятор PRO",
    "path": "index22.html",
    "launchUrl": "index22.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index22.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index19",
      "index21",
      "index",
      "index10",
      "index100",
      "index101"
    ],
    "isVisible": true,
    "links": {
      "launch": "index22.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index22.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.52
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index22.html",
      "sizeBytes": 32329,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index19",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index21",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index23",
    "title": "Память: Цвет и Число",
    "path": "index23.html",
    "launchUrl": "index23.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 54,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index23.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index100",
      "index154",
      "index2",
      "index24",
      "index25",
      "index26"
    ],
    "isVisible": true,
    "links": {
      "launch": "index23.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index23.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 38,
      "documentation": 12,
      "repositorySharePercent": 0.35
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 29
        },
        {
          "name": "CSS",
          "percent": 57
        }
      ]
    },
    "builder": {
      "file": "index23.html",
      "sizeBytes": 21779,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 12
        }
      ],
      "relationReasons": [
        {
          "id": "index100",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index24",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index25",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index26",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index24",
    "title": "Супер Память: 50 раундов",
    "path": "index24.html",
    "launchUrl": "index24.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 54,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index24.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index25",
      "index100",
      "index154",
      "index2",
      "index23",
      "index26"
    ],
    "isVisible": true,
    "links": {
      "launch": "index24.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index24.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 38,
      "documentation": 12,
      "repositorySharePercent": 0.45
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 29
        },
        {
          "name": "CSS",
          "percent": 57
        }
      ]
    },
    "builder": {
      "file": "index24.html",
      "sizeBytes": 27796,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 12
        }
      ],
      "relationReasons": [
        {
          "id": "index25",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index100",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index26",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index25",
    "title": "Супер Память: 50 раундов",
    "path": "index25.html",
    "launchUrl": "index25.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 52,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index25.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index24",
      "index100",
      "index154",
      "index2",
      "index23",
      "index26"
    ],
    "isVisible": true,
    "links": {
      "launch": "index25.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index25.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 34,
      "documentation": 12,
      "repositorySharePercent": 0.47
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 17
        },
        {
          "name": "CSS",
          "percent": 67
        }
      ]
    },
    "builder": {
      "file": "index25.html",
      "sizeBytes": 29479,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 12
        }
      ],
      "relationReasons": [
        {
          "id": "index24",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index100",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index26",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index27",
    "title": "Музыкальные аккорды - Игра и обучение",
    "path": "index27.html",
    "launchUrl": "index27.html",
    "category": "Обучение",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index27.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index",
      "index10",
      "index100",
      "index101",
      "index102",
      "index103"
    ],
    "isVisible": true,
    "links": {
      "launch": "index27.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index27.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.48
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index27.html",
      "sizeBytes": 30062,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index103",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index28",
    "title": "Музыкальная Война",
    "path": "index28.html",
    "launchUrl": "index28.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index28.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index29",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index28.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index28.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.61
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index28.html",
      "sizeBytes": 38105,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index29",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index29",
    "title": "Музыкальная Война (Упрощенная)",
    "path": "index29.html",
    "launchUrl": "index29.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index29.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index28",
      "index102",
      "index104",
      "index105",
      "index106",
      "index107"
    ],
    "isVisible": true,
    "links": {
      "launch": "index29.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index29.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.39
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index29.html",
      "sizeBytes": 24433,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index28",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index34",
    "title": "Догонялки",
    "path": "index34.html",
    "launchUrl": "index34.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index34.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index35",
      "index102",
      "index104",
      "index105",
      "index106",
      "index107"
    ],
    "isVisible": true,
    "links": {
      "launch": "index34.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index34.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.74
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index34.html",
      "sizeBytes": 46000,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index35",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index35",
    "title": "Догонялки PRO",
    "path": "index35.html",
    "launchUrl": "index35.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index35.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index34",
      "index102",
      "index104",
      "index105",
      "index106",
      "index107"
    ],
    "isVisible": true,
    "links": {
      "launch": "index35.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index35.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.9
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index35.html",
      "sizeBytes": 55566,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index34",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index36",
    "title": "Космический самолётик",
    "path": "index36.html",
    "launchUrl": "index36.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index36.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index37",
      "index40",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index36.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index36.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.37
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index36.html",
      "sizeBytes": 23258,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index37",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index40",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index37",
    "title": "Космический самолётик",
    "path": "index37.html",
    "launchUrl": "index37.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index37.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index36",
      "index40",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index37.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index37.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.38
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index37.html",
      "sizeBytes": 23546,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index36",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index40",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index40",
    "title": "Космический выживальщик",
    "path": "index40.html",
    "launchUrl": "index40.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index40.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index36",
      "index37",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index40.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index40.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.78
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index40.html",
      "sizeBytes": 48434,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index36",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index37",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index41",
    "title": "Быстрые заказы - Кафе-симулятор",
    "path": "index41.html",
    "launchUrl": "index41.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index41.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index42",
      "index43",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index41.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index41.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.45
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index41.html",
      "sizeBytes": 27708,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index42",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index43",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index43",
    "title": "Городское Кафе - Кухонный симулятор",
    "path": "index43.html",
    "launchUrl": "index43.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index43.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index41",
      "index42",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index43.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index43.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.94
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index43.html",
      "sizeBytes": 58584,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index41",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index42",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index47",
    "title": "Торговая Империя",
    "path": "index47.html",
    "launchUrl": "index47.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index47.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index46",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index47.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index47.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.36
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index47.html",
      "sizeBytes": 22626,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index46",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index52",
    "title": "Tower Defense Spray Mechanic",
    "path": "index52.html",
    "launchUrl": "index52.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index52.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index38",
      "index124",
      "index154",
      "index58",
      "index59",
      "index65"
    ],
    "isVisible": true,
    "links": {
      "launch": "index52.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index52.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.32
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index52.html",
      "sizeBytes": 20120,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index38",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index124",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index154",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index58",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index59",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index65",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index60",
    "title": "Castle Wars",
    "path": "index60.html",
    "launchUrl": "index60.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index60.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index102",
      "index104",
      "index105",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index60.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index60.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.55
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index60.html",
      "sizeBytes": 34357,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index65",
    "title": "Custom Tower Defense",
    "path": "index65.html",
    "launchUrl": "index65.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index65.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index124",
      "index154",
      "index59",
      "index102",
      "index104",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index65.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index65.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.64
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index65.html",
      "sizeBytes": 39516,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index124",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index154",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index59",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:en,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index66",
    "title": "TD — Кастомные башни из расходников",
    "path": "index66.html",
    "launchUrl": "index66.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index66.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index67",
      "index68",
      "index69",
      "index102",
      "index104",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index66.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index66.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.47
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index66.html",
      "sizeBytes": 29116,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index67",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index68",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index69",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index67",
    "title": "TD — Кастомные башни из расходников",
    "path": "index67.html",
    "launchUrl": "index67.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index67.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index66",
      "index68",
      "index69",
      "index102",
      "index104",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index67.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index67.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.48
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index67.html",
      "sizeBytes": 29747,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index66",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index68",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index69",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index68",
    "title": "TD — Кастомные башни из расходников (Pro)",
    "path": "index68.html",
    "launchUrl": "index68.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index68.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index69",
      "index66",
      "index67",
      "index102",
      "index104",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index68.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index68.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.63
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index68.html",
      "sizeBytes": 38844,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index69",
          "score": 100,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.80"
          ]
        },
        {
          "id": "index66",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index67",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index69",
    "title": "TD — Кастомные башни из расходников (Pro) — Исправлено",
    "path": "index69.html",
    "launchUrl": "index69.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index69.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index68",
      "index66",
      "index67",
      "index102",
      "index104",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index69.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index69.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.74
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index69.html",
      "sizeBytes": 45630,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index68",
          "score": 100,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.80"
          ]
        },
        {
          "id": "index66",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index67",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index71",
    "title": "RPG Adventure",
    "path": "index71.html",
    "launchUrl": "index71.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index71.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index102",
      "index104",
      "index105",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index71.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index71.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.65
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index71.html",
      "sizeBytes": 40456,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index86",
    "title": "File Analyzer Pro",
    "path": "index86.html",
    "launchUrl": "index86.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 52,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index86.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index87",
      "index88",
      "index90",
      "index10",
      "index113",
      "index13"
    ],
    "isVisible": true,
    "links": {
      "launch": "index86.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index86.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 33,
      "documentation": 12,
      "repositorySharePercent": 0.51
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 20
        },
        {
          "name": "JavaScript",
          "percent": 60
        },
        {
          "name": "CSS",
          "percent": 20
        }
      ]
    },
    "builder": {
      "file": "index86.html",
      "sizeBytes": 31508,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/exif-js/2.3.0/exif.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.7/jsmediatags.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 12
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index87",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index88",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index90",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index87",
    "title": "File Analyzer Pro",
    "path": "index87.html",
    "launchUrl": "index87.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index87.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index86",
      "index88",
      "index90",
      "index10",
      "index113",
      "index13"
    ],
    "isVisible": true,
    "links": {
      "launch": "index87.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index87.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.34
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index87.html",
      "sizeBytes": 20945,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index86",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index88",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index90",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index89",
    "title": "Калькулятор стоимости бумаги",
    "path": "index89.html",
    "launchUrl": "index89.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index89.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index91",
      "index92",
      "index93",
      "index94",
      "index95",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index89.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index89.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.68
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index89.html",
      "sizeBytes": 42252,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index95",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index96",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index91",
    "title": "Калькулятор стоимости бумаги",
    "path": "index91.html",
    "launchUrl": "index91.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index91.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index89",
      "index92",
      "index93",
      "index94",
      "index95",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index91.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index91.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.68
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index91.html",
      "sizeBytes": 42045,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index95",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index96",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index92",
    "title": "Калькулятор стоимости бумаги",
    "path": "index92.html",
    "launchUrl": "index92.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index92.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index89",
      "index91",
      "index93",
      "index94",
      "index95",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index92.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index92.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.71
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index92.html",
      "sizeBytes": 44058,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index95",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index96",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index93",
    "title": "Калькулятор стоимости бумаги",
    "path": "index93.html",
    "launchUrl": "index93.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index93.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index89",
      "index91",
      "index92",
      "index94",
      "index95",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index93.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index93.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.69
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index93.html",
      "sizeBytes": 42948,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index95",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index96",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index94",
    "title": "Калькулятор стоимости бумаги",
    "path": "index94.html",
    "launchUrl": "index94.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index94.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index89",
      "index91",
      "index92",
      "index93",
      "index95",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index94.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index94.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.69
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index94.html",
      "sizeBytes": 42948,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index95",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index96",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index95",
    "title": "Калькулятор стоимости бумаги",
    "path": "index95.html",
    "launchUrl": "index95.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index95.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index89",
      "index91",
      "index92",
      "index93",
      "index94",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index95.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index95.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.64
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index95.html",
      "sizeBytes": 39576,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index96",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index96",
    "title": "Калькулятор стоимости бумаги",
    "path": "index96.html",
    "launchUrl": "index96.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index96.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index99",
      "index89",
      "index91",
      "index92",
      "index93",
      "index94"
    ],
    "isVisible": true,
    "links": {
      "launch": "index96.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index96.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.67
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index96.html",
      "sizeBytes": 41790,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index99",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index97",
    "title": "Калькулятор стоимости бумаги",
    "path": "index97.html",
    "launchUrl": "index97.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index97.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index98",
      "index89",
      "index91",
      "index92",
      "index93",
      "index94"
    ],
    "isVisible": true,
    "links": {
      "launch": "index97.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index97.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.57
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index97.html",
      "sizeBytes": 35158,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index98",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index98",
    "title": "Калькулятор стоимости бумаги",
    "path": "index98.html",
    "launchUrl": "index98.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index98.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index97",
      "index89",
      "index91",
      "index92",
      "index93",
      "index94"
    ],
    "isVisible": true,
    "links": {
      "launch": "index98.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index98.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.55
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index98.html",
      "sizeBytes": 34131,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index97",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index99",
    "title": "Калькулятор стоимости бумаги",
    "path": "index99.html",
    "launchUrl": "index99.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index99.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index96",
      "index89",
      "index91",
      "index92",
      "index93",
      "index94"
    ],
    "isVisible": true,
    "links": {
      "launch": "index99.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index99.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.35
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index99.html",
      "sizeBytes": 21920,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index96",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index89",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index91",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index92",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index93",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index94",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index100",
    "title": "Дерево навыков - Запоминалка",
    "path": "index100.html",
    "launchUrl": "index100.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index100.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index154",
      "index2",
      "index23",
      "index24",
      "index25",
      "index26"
    ],
    "isVisible": true,
    "links": {
      "launch": "index100.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index100.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.39
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index100.html",
      "sizeBytes": 24241,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index154",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index24",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index25",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index26",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index104",
    "title": "RPG Dungeon Simulator deepseek",
    "path": "index104.html",
    "launchUrl": "index104.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index104.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index106",
      "index114",
      "index115",
      "index107",
      "index108",
      "index112"
    ],
    "isVisible": true,
    "links": {
      "launch": "index104.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index104.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.66
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index104.html",
      "sizeBytes": 103230,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index106",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index114",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index115",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index107",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index108",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index112",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index105",
    "title": "GPT - IDLE RPG Dungeon — Переработанная версия - GPT",
    "path": "index105.html",
    "launchUrl": "index105.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index105.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index107",
      "index110",
      "index111",
      "index109",
      "index106",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index105.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index105.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.86
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index105.html",
      "sizeBytes": 53637,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index107",
          "score": 98,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.71"
          ]
        },
        {
          "id": "index110",
          "score": 94,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.57"
          ]
        },
        {
          "id": "index111",
          "score": 94,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.57"
          ]
        },
        {
          "id": "index109",
          "score": 92,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.46"
          ]
        },
        {
          "id": "index106",
          "score": 91,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.43"
          ]
        },
        {
          "id": "index108",
          "score": 91,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.43"
          ]
        }
      ]
    }
  },
  {
    "id": "index106",
    "title": "IDLE RPG Dungeon - DEEPSEEK",
    "path": "index106.html",
    "launchUrl": "index106.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index106.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index104",
      "index107",
      "index108",
      "index112",
      "index110",
      "index111"
    ],
    "isVisible": true,
    "links": {
      "launch": "index106.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index106.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.6
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index106.html",
      "sizeBytes": 99515,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index104",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index107",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index108",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index112",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index110",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index111",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        }
      ]
    }
  },
  {
    "id": "index107",
    "title": "GPT IDLE RPG Dungeon",
    "path": "index107.html",
    "launchUrl": "index107.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index107.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index106",
      "index108",
      "index112",
      "index110",
      "index111",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index107.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index107.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.6
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index107.html",
      "sizeBytes": 99504,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index106",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index108",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index112",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index110",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index111",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index105",
          "score": 94,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.57"
          ]
        }
      ]
    }
  },
  {
    "id": "index108",
    "title": "IDLE RPG Dungeon - deep",
    "path": "index108.html",
    "launchUrl": "index108.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index108.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index106",
      "index107",
      "index112",
      "index110",
      "index111",
      "index104"
    ],
    "isVisible": true,
    "links": {
      "launch": "index108.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index108.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.6
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index108.html",
      "sizeBytes": 99500,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index106",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index107",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index112",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index110",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index111",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index104",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index109",
    "title": "GPT IDLE RPG Dungeon — Обновлённая версия (маг: % урон, бафы, без лимита уровней HP/MP/DMG)",
    "path": "index109.html",
    "launchUrl": "index109.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index109.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index105",
      "index102",
      "index104",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index109.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index109.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.99
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index109.html",
      "sizeBytes": 61739,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index105",
          "score": 90,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.38"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index110",
    "title": "IDLE RPG Dungeon — Исправленная версия",
    "path": "index110.html",
    "launchUrl": "index110.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index110.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index111",
      "index106",
      "index107",
      "index108",
      "index112",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index110.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index110.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.99
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index110.html",
      "sizeBytes": 61148,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index111",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index106",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index107",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index108",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index112",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index105",
          "score": 94,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.57"
          ]
        }
      ]
    }
  },
  {
    "id": "index111",
    "title": "IDLE RPG Dungeon — Исправленная версия",
    "path": "index111.html",
    "launchUrl": "index111.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index111.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index110",
      "index106",
      "index107",
      "index108",
      "index112",
      "index105"
    ],
    "isVisible": true,
    "links": {
      "launch": "index111.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index111.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.99
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index111.html",
      "sizeBytes": 61148,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index110",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index106",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index107",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index108",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index112",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index105",
          "score": 94,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.57"
          ]
        }
      ]
    }
  },
  {
    "id": "index112",
    "title": "IDLE RPG Dungeon",
    "path": "index112.html",
    "launchUrl": "index112.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index112.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index106",
      "index107",
      "index108",
      "index114",
      "index115",
      "index110"
    ],
    "isVisible": true,
    "links": {
      "launch": "index112.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index112.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 1.07
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index112.html",
      "sizeBytes": 66679,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index106",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index107",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index108",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index114",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index115",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index110",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        }
      ]
    }
  },
  {
    "id": "index113",
    "title": "Исправленный IDLE RPG Dungeon — единый файл",
    "path": "index113.html",
    "launchUrl": "index113.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index113.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index10",
      "index13",
      "index20",
      "index48",
      "index49",
      "index50"
    ],
    "isVisible": true,
    "links": {
      "launch": "index113.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index113.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.53
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index113.html",
      "sizeBytes": 32858,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index20",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index48",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index49",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index50",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index114",
    "title": "RPG Dungeon Simulator",
    "path": "index114.html",
    "launchUrl": "index114.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index114.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index115",
      "index104",
      "index112",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index114.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index114.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 1.04
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index114.html",
      "sizeBytes": 64372,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index115",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index104",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index112",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index106",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index107",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index108",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index115",
    "title": "RPG Dungeon Simulator",
    "path": "index115.html",
    "launchUrl": "index115.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index115.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index114",
      "index104",
      "index112",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index115.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index115.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.96
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index115.html",
      "sizeBytes": 59834,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index114",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index104",
          "score": 99,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "index112",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index106",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index107",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index108",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index116",
    "title": "Церковный симулятор — полный",
    "path": "index116.html",
    "launchUrl": "index116.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index116.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index119",
      "index120",
      "index121",
      "index122",
      "index125",
      "index126"
    ],
    "isVisible": true,
    "links": {
      "launch": "index116.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index116.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.63
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index116.html",
      "sizeBytes": 38931,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index119",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index120",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index121",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index122",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index125",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index126",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index117",
    "title": "Церковный симулятор — профессиональная версия",
    "path": "index117.html",
    "launchUrl": "index117.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index117.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index116",
      "index119",
      "index120",
      "index121",
      "index122",
      "index125"
    ],
    "isVisible": true,
    "links": {
      "launch": "index117.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index117.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.95
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index117.html",
      "sizeBytes": 58889,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index116",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index119",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index120",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index121",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index122",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index125",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index118",
    "title": "Церковный симулятор — переработка (полный файл)",
    "path": "index118.html",
    "launchUrl": "index118.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index118.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index116",
      "index117",
      "index119",
      "index120",
      "index121",
      "index122"
    ],
    "isVisible": true,
    "links": {
      "launch": "index118.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index118.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.65
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index118.html",
      "sizeBytes": 40405,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index116",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index117",
          "score": 90,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.40"
          ]
        },
        {
          "id": "index119",
          "score": 90,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.40"
          ]
        },
        {
          "id": "index120",
          "score": 90,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.40"
          ]
        },
        {
          "id": "index121",
          "score": 90,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.40"
          ]
        },
        {
          "id": "index122",
          "score": 90,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.40"
          ]
        }
      ]
    }
  },
  {
    "id": "index119",
    "title": "Церковный симулятор",
    "path": "index119.html",
    "launchUrl": "index119.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index119.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index120",
      "index121",
      "index122",
      "index125",
      "index127",
      "index116"
    ],
    "isVisible": true,
    "links": {
      "launch": "index119.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index119.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.6
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index119.html",
      "sizeBytes": 37145,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index120",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index121",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index122",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index125",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index127",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index120",
    "title": "Церковный симулятор",
    "path": "index120.html",
    "launchUrl": "index120.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index120.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index119",
      "index121",
      "index122",
      "index125",
      "index127",
      "index116"
    ],
    "isVisible": true,
    "links": {
      "launch": "index120.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index120.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.64
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index120.html",
      "sizeBytes": 39427,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index119",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index121",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index122",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index125",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index127",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index121",
    "title": "Церковный симулятор",
    "path": "index121.html",
    "launchUrl": "index121.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index121.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index119",
      "index120",
      "index122",
      "index125",
      "index127",
      "index116"
    ],
    "isVisible": true,
    "links": {
      "launch": "index121.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index121.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.51
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index121.html",
      "sizeBytes": 31494,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index119",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index120",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index122",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index125",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index127",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index122",
    "title": "Церковный симулятор",
    "path": "index122.html",
    "launchUrl": "index122.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index122.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index119",
      "index120",
      "index121",
      "index125",
      "index127",
      "index116"
    ],
    "isVisible": true,
    "links": {
      "launch": "index122.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index122.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.53
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index122.html",
      "sizeBytes": 33091,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index119",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index120",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index121",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index125",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index127",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index123",
    "title": "Воскресное служение",
    "path": "index123.html",
    "launchUrl": "index123.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index123.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index116",
      "index117",
      "index118",
      "index119",
      "index120",
      "index121"
    ],
    "isVisible": true,
    "links": {
      "launch": "index123.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index123.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.36
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index123.html",
      "sizeBytes": 22555,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index116",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index117",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index118",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index119",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index120",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index121",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index124",
    "title": "Церковный Tower Defense",
    "path": "index124.html",
    "launchUrl": "index124.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index124.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index154",
      "index59",
      "index65",
      "index116",
      "index117",
      "index118"
    ],
    "isVisible": true,
    "links": {
      "launch": "index124.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index124.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.56
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index124.html",
      "sizeBytes": 35039,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index154",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index59",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index65",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index116",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index117",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index118",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index125",
    "title": "Церковный Симулятор",
    "path": "index125.html",
    "launchUrl": "index125.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index125.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index119",
      "index120",
      "index121",
      "index122",
      "index127",
      "index116"
    ],
    "isVisible": true,
    "links": {
      "launch": "index125.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index125.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.45
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index125.html",
      "sizeBytes": 28105,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index119",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index120",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index121",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index122",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index127",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index126",
    "title": "Церковный Симулятор 2025",
    "path": "index126.html",
    "launchUrl": "index126.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index126.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index116",
      "index119",
      "index120",
      "index121",
      "index122",
      "index125"
    ],
    "isVisible": true,
    "links": {
      "launch": "index126.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index126.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.62
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index126.html",
      "sizeBytes": 38580,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index116",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index119",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index120",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index121",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index122",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index125",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index127",
    "title": "Церковный Симулятор",
    "path": "index127.html",
    "launchUrl": "index127.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index127.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index119",
      "index120",
      "index121",
      "index122",
      "index125",
      "index116"
    ],
    "isVisible": true,
    "links": {
      "launch": "index127.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index127.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.72
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index127.html",
      "sizeBytes": 44807,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index119",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index120",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index121",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index122",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index125",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index116",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index128",
    "title": "Вселенная Правил",
    "path": "index128.html",
    "launchUrl": "index128.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index128.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index102",
      "index104",
      "index105",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index128.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index128.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.75
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index128.html",
      "sizeBytes": 46663,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index129",
    "title": "Модульная Арена",
    "path": "index129.html",
    "launchUrl": "index129.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index129.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index",
      "index10",
      "index100",
      "index101",
      "index102",
      "index103"
    ],
    "isVisible": true,
    "links": {
      "launch": "index129.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index129.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.58
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index129.html",
      "sizeBytes": 36015,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index103",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index130",
    "title": "Мухобойка",
    "path": "index130.html",
    "launchUrl": "index130.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index130.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index102",
      "index104",
      "index105",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index130.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index130.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.46
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index130.html",
      "sizeBytes": 28530,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index131",
    "title": "Идл-Типография",
    "path": "index131.html",
    "launchUrl": "index131.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index131.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index101",
      "index132",
      "index133",
      "index134",
      "index135",
      "index136"
    ],
    "isVisible": true,
    "links": {
      "launch": "index131.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index131.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.47
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index131.html",
      "sizeBytes": 29265,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index101",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index132",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index133",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index134",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index135",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index136",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index132",
    "title": "Бизнес-Типография",
    "path": "index132.html",
    "launchUrl": "index132.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index132.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index133",
      "index134",
      "index137",
      "index138",
      "index139",
      "index140"
    ],
    "isVisible": true,
    "links": {
      "launch": "index132.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index132.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.73
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index132.html",
      "sizeBytes": 45417,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index133",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index134",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index137",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index138",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index139",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index140",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index133",
    "title": "Бизнес-Типография",
    "path": "index133.html",
    "launchUrl": "index133.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index133.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index132",
      "index134",
      "index137",
      "index138",
      "index139",
      "index140"
    ],
    "isVisible": true,
    "links": {
      "launch": "index133.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index133.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.73
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index133.html",
      "sizeBytes": 45417,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index132",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index134",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index137",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index138",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index139",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index140",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index134",
    "title": "Типография Бизнес",
    "path": "index134.html",
    "launchUrl": "index134.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index134.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index132",
      "index133",
      "index137",
      "index138",
      "index139",
      "index140"
    ],
    "isVisible": true,
    "links": {
      "launch": "index134.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index134.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.55
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index134.html",
      "sizeBytes": 34067,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index132",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index133",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index137",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index138",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index139",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index140",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index135",
    "title": "Типография Pro",
    "path": "index135.html",
    "launchUrl": "index135.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 54,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index135.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index136",
      "index101",
      "index131",
      "index132",
      "index133",
      "index134"
    ],
    "isVisible": true,
    "links": {
      "launch": "index135.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index135.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 39,
      "documentation": 12,
      "repositorySharePercent": 0.85
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 43
        },
        {
          "name": "CSS",
          "percent": 43
        }
      ]
    },
    "builder": {
      "file": "index135.html",
      "sizeBytes": 53026,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/chart.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 12
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index136",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index101",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index131",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index132",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index133",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index134",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index136",
    "title": "Типография Pro",
    "path": "index136.html",
    "launchUrl": "index136.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 54,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index136.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index135",
      "index101",
      "index131",
      "index132",
      "index133",
      "index134"
    ],
    "isVisible": true,
    "links": {
      "launch": "index136.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index136.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 39,
      "documentation": 12,
      "repositorySharePercent": 0.9
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 43
        },
        {
          "name": "CSS",
          "percent": 43
        }
      ]
    },
    "builder": {
      "file": "index136.html",
      "sizeBytes": 56158,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/chart.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 12
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index135",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index101",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index131",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index132",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index133",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index134",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index137",
    "title": "Бизнес-Типография",
    "path": "index137.html",
    "launchUrl": "index137.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 54,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index137.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index132",
      "index133",
      "index134",
      "index138",
      "index139",
      "index140"
    ],
    "isVisible": true,
    "links": {
      "launch": "index137.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index137.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 39,
      "documentation": 12,
      "repositorySharePercent": 0.46
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 43
        },
        {
          "name": "CSS",
          "percent": 43
        }
      ]
    },
    "builder": {
      "file": "index137.html",
      "sizeBytes": 28289,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://code.jquery.com/jquery-3.6.0.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 12
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index132",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index133",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index134",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index138",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index139",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index140",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index138",
    "title": "Бизнес-Типография",
    "path": "index138.html",
    "launchUrl": "index138.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 54,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index138.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index132",
      "index133",
      "index134",
      "index137",
      "index139",
      "index140"
    ],
    "isVisible": true,
    "links": {
      "launch": "index138.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index138.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 39,
      "documentation": 12,
      "repositorySharePercent": 0.46
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 43
        },
        {
          "name": "CSS",
          "percent": 43
        }
      ]
    },
    "builder": {
      "file": "index138.html",
      "sizeBytes": 28289,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://code.jquery.com/jquery-3.6.0.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 12
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index132",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index133",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index134",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index137",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index139",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index140",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index139",
    "title": "Типография Бизнес",
    "path": "index139.html",
    "launchUrl": "index139.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 53,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index139.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index132",
      "index133",
      "index134",
      "index137",
      "index138",
      "index140"
    ],
    "isVisible": true,
    "links": {
      "launch": "index139.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index139.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 35,
      "documentation": 12,
      "repositorySharePercent": 0.98
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index139.html",
      "sizeBytes": 60938,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index132",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index133",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index134",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index137",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index138",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index140",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index140",
    "title": "Типография Бизнес — Игра",
    "path": "index140.html",
    "launchUrl": "index140.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 53,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index140.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index132",
      "index133",
      "index134",
      "index137",
      "index138",
      "index139"
    ],
    "isVisible": true,
    "links": {
      "launch": "index140.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index140.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 35,
      "documentation": 12,
      "repositorySharePercent": 1.19
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index140.html",
      "sizeBytes": 73642,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index132",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index133",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index134",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index137",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index138",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index139",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index142",
    "title": "Типография: Бизнес-симулятор 142-DEEP",
    "path": "index142.html",
    "launchUrl": "index142.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 53,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index142.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index143",
      "index144",
      "index145",
      "index146",
      "index147",
      "index132"
    ],
    "isVisible": true,
    "links": {
      "launch": "index142.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index142.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 35,
      "documentation": 12,
      "repositorySharePercent": 0.58
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index142.html",
      "sizeBytes": 35696,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index143",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index144",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index145",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index146",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index147",
          "score": 95,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.60"
          ]
        },
        {
          "id": "index132",
          "score": 90,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.40"
          ]
        }
      ]
    }
  },
  {
    "id": "index143",
    "title": "Типография — Бизнес-симулятор",
    "path": "index143.html",
    "launchUrl": "index143.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 53,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index143.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index144",
      "index145",
      "index146",
      "index147",
      "index132",
      "index133"
    ],
    "isVisible": true,
    "links": {
      "launch": "index143.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index143.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 35,
      "documentation": 12,
      "repositorySharePercent": 0.82
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index143.html",
      "sizeBytes": 50737,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index144",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index145",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index146",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index147",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index132",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index133",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index145",
    "title": "Типография — Бизнес-симулятор",
    "path": "index145.html",
    "launchUrl": "index145.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 53,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index145.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index143",
      "index144",
      "index146",
      "index147",
      "index132",
      "index133"
    ],
    "isVisible": true,
    "links": {
      "launch": "index145.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index145.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 35,
      "documentation": 12,
      "repositorySharePercent": 0.75
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index145.html",
      "sizeBytes": 46437,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index143",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index144",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index146",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index147",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index132",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index133",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index146",
    "title": "Типография — Бизнес-симулятор",
    "path": "index146.html",
    "launchUrl": "index146.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 53,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index146.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index143",
      "index144",
      "index145",
      "index147",
      "index132",
      "index133"
    ],
    "isVisible": true,
    "links": {
      "launch": "index146.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index146.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 35,
      "documentation": 12,
      "repositorySharePercent": 0.75
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index146.html",
      "sizeBytes": 46437,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index143",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index144",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index145",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index147",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index132",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index133",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index147",
    "title": "Типография — Бизнес-симулятор",
    "path": "index147.html",
    "launchUrl": "index147.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 53,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index147.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index143",
      "index144",
      "index145",
      "index146",
      "index132",
      "index133"
    ],
    "isVisible": true,
    "links": {
      "launch": "index147.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index147.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 35,
      "documentation": 12,
      "repositorySharePercent": 0.72
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index147.html",
      "sizeBytes": 44913,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index143",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index144",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index145",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index146",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index132",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index133",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index148",
    "title": "КОСМИЧЕСКИЕ РЕЙНДЖЕРЫ",
    "path": "index148.html",
    "launchUrl": "index148.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index148.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index149",
      "index39",
      "index4",
      "index5",
      "index70",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index148.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index148.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.48
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index148.html",
      "sizeBytes": 30060,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index149",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index39",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index4",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index5",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index70",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index96",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index150",
    "title": "Типографский Магнат",
    "path": "index150.html",
    "launchUrl": "index150.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index150.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index151",
      "index152",
      "index200",
      "index500",
      "index501",
      "index502"
    ],
    "isVisible": true,
    "links": {
      "launch": "index150.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index150.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.5
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index150.html",
      "sizeBytes": 30809,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index151",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index152",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index200",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index500",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index501",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index502",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index151",
    "title": "Типографский Магнат",
    "path": "index151.html",
    "launchUrl": "index151.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 49,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index151.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index150",
      "index152",
      "index200",
      "index500",
      "index501",
      "index502"
    ],
    "isVisible": true,
    "links": {
      "launch": "index151.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index151.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 25,
      "documentation": 12,
      "repositorySharePercent": 0.66
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index151.html",
      "sizeBytes": 40977,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index150",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index152",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index200",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index500",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index501",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index502",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index152",
    "title": "Типографский Магнат",
    "path": "index152.html",
    "launchUrl": "index152.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index152.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index150",
      "index151",
      "index200",
      "index500",
      "index501",
      "index502"
    ],
    "isVisible": true,
    "links": {
      "launch": "index152.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index152.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 41,
      "documentation": 12,
      "repositorySharePercent": 0.72
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "index152.html",
      "sizeBytes": 44523,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/plugin/duration.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/plugin/relativeTime.js",
        "https://cdn.jsdelivr.net/npm/localforage@1.10.0/dist/localforage.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index150",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index151",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index200",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index500",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index501",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index502",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index154",
    "title": "Tower Defense Game",
    "path": "index154.html",
    "launchUrl": "index154.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index154.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index124",
      "index59",
      "index65",
      "index100",
      "index2",
      "index23"
    ],
    "isVisible": true,
    "links": {
      "launch": "index154.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index154.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 29,
      "documentation": 12,
      "repositorySharePercent": 0.95
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index154.html",
      "sizeBytes": 58687,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://pixijs.download/release/pixi.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index124",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index59",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index65",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index100",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index200",
    "title": "Типографский Магнат",
    "path": "index200.html",
    "launchUrl": "index200.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index200.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index150",
      "index151",
      "index152",
      "index500",
      "index501",
      "index502"
    ],
    "isVisible": true,
    "links": {
      "launch": "index200.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index200.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.62
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index200.html",
      "sizeBytes": 100518,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index150",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index151",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index152",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index500",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index501",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index502",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index500",
    "title": "Типографский Магнат",
    "path": "index500.html",
    "launchUrl": "index500.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index500.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index150",
      "index151",
      "index152",
      "index200",
      "index501",
      "index502"
    ],
    "isVisible": true,
    "links": {
      "launch": "index500.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index500.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.62
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index500.html",
      "sizeBytes": 100518,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index150",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index151",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index152",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index200",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index501",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index502",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "index501",
    "title": "Типографский Магнат",
    "path": "index501.html",
    "launchUrl": "index501.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 55,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index501.html; есть изображение; готовность 62/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index150",
      "index151",
      "index152",
      "index200",
      "index500",
      "index502"
    ],
    "isVisible": true,
    "links": {
      "launch": "index501.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index501.html"
    },
    "metrics": {
      "readiness": 62,
      "visual": 68,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.62
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index501.html",
      "sizeBytes": 100518,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index150",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index151",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index152",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index200",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index500",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index502",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "80",
    "title": "Типография - Бизнес симулятор",
    "path": "80/index.html",
    "launchUrl": "80/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 44,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 80/index.html; есть изображение; готовность 56/100",
    "imageUrl": "80/stilist_80.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/80/stilist_80.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "81",
      "82",
      "83",
      "84",
      "85",
      "86"
    ],
    "isVisible": true,
    "links": {
      "launch": "80/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/80/index.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.14
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "80/index.html",
      "sizeBytes": 8528,
      "screenshots": [
        "80/stilist_80.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "81",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "82",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "83",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "84",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "85",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "86",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "81",
    "title": "Типография - Бизнес симулятор",
    "path": "81/index.html",
    "launchUrl": "81/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 44,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 81/index.html; есть изображение; готовность 56/100",
    "imageUrl": "81/stilist_81.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/81/stilist_81.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "80",
      "82",
      "83",
      "84",
      "85",
      "86"
    ],
    "isVisible": true,
    "links": {
      "launch": "81/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/81/index.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.18
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "81/index.html",
      "sizeBytes": 11243,
      "screenshots": [
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "80",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "82",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "83",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "84",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "85",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "86",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "101",
    "title": "Simple Clicker RPG",
    "path": "101/index.html",
    "launchUrl": "101/index.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 46,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 101/index.html; есть изображение; готовность 56/100",
    "imageUrl": "101/stilist_101.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/101/stilist_101.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index100",
      "index154",
      "index2",
      "index23",
      "index24",
      "index25"
    ],
    "isVisible": true,
    "links": {
      "launch": "101/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/101/index.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.09
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 9
        },
        {
          "name": "JavaScript",
          "percent": 73
        },
        {
          "name": "CSS",
          "percent": 18
        }
      ]
    },
    "builder": {
      "file": "101/index.html",
      "sizeBytes": 5372,
      "screenshots": [
        "101/stilist_101.jpg"
      ],
      "cssLinks": [
        "https://cdn.simplecss.org/simple.min.css"
      ],
      "jsLinks": [
        "https://polyfill.io/v3/polyfill.min.js?features=es6,Array.prototype.includes,Promise,Object.values",
        "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
        "https://cdn.jsdelivr.net/npm/phaser@3.60/dist/phaser.min.js",
        "https://cdn.jsdelivr.net/npm/localforage@1.10.0/dist/localforage.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/plugin/duration.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/plugin/relativeTime.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 22
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index100",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index24",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index25",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "102",
    "title": "Idle Miner - Шахтёрский симулятор",
    "path": "102/index.html",
    "launchUrl": "102/index.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 46,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 102/index.html; есть изображение; готовность 56/100",
    "imageUrl": "102/stilist_102.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/102/stilist_102.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "2025",
      "index102",
      "index104",
      "index105",
      "index106",
      "index107"
    ],
    "isVisible": true,
    "links": {
      "launch": "102/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/102/index.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.22
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 10
        },
        {
          "name": "JavaScript",
          "percent": 70
        },
        {
          "name": "CSS",
          "percent": 20
        }
      ]
    },
    "builder": {
      "file": "102/index.html",
      "sizeBytes": 13935,
      "screenshots": [
        "102/stilist_102.jpg"
      ],
      "cssLinks": [
        "https://cdn.simplecss.org/simple.min.css"
      ],
      "jsLinks": [
        "https://polyfill.io/v3/polyfill.min.js?features=es6,Array.prototype.includes,Promise,Object.values,Number.isFinite",
        "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
        "https://cdn.jsdelivr.net/npm/phaser@3.60/dist/phaser.min.js",
        "https://cdn.jsdelivr.net/npm/localforage@1.10.0/dist/localforage.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1.11.9/plugin/duration.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 22
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "2025",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "350-index1",
    "title": "Конвертер мм ↔ пиксели",
    "path": "350/index1.html",
    "launchUrl": "350/index1.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 350/index1.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "350",
      "3501",
      "3502",
      "80",
      "81",
      "82"
    ],
    "isVisible": true,
    "links": {
      "launch": "350/index1.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/350/index1.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.18
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "350/index1.html",
      "sizeBytes": 11394,
      "screenshots": [
        "350/preview.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "350",
          "score": 108,
          "reasons": [
            "same-folder",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "3501",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "3502",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "80",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "81",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "82",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index",
    "title": "Главная — Навигация по страницам",
    "path": "index.html",
    "launchUrl": "index.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index10",
      "index100",
      "index101",
      "index102",
      "index103",
      "index104"
    ],
    "isVisible": true,
    "links": {
      "launch": "index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.16
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index.html",
      "sizeBytes": 9655,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index103",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index2",
    "title": "STYLIST | Демо стилей",
    "path": "index2.html",
    "launchUrl": "index2.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index2.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index3",
      "index100",
      "index154",
      "index23",
      "index24",
      "index25"
    ],
    "isVisible": true,
    "links": {
      "launch": "index2.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index2.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.06
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index2.html",
      "sizeBytes": 3560,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index3",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index100",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index24",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index25",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index3",
    "title": "STYLIST | Демо выпадающих списков",
    "path": "index3.html",
    "launchUrl": "index3.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index3.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index2",
      "index100",
      "index154",
      "index23",
      "index24",
      "index25"
    ],
    "isVisible": true,
    "links": {
      "launch": "index3.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index3.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.12
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index3.html",
      "sizeBytes": 7752,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index2",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index100",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index24",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index25",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index4",
    "title": "Конструктор стилей | Выпадающий список",
    "path": "index4.html",
    "launchUrl": "index4.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index4.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index148",
      "index149",
      "index39",
      "index5",
      "index70",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index4.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index4.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.16
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index4.html",
      "sizeBytes": 9797,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index148",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index149",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index39",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index5",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index70",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index96",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index7",
    "title": "Торговый Терминал 1984",
    "path": "index7.html",
    "launchUrl": "index7.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index7.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index11",
      "index6",
      "index8",
      "index9",
      "index",
      "index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "index7.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index7.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.25
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index7.html",
      "sizeBytes": 15495,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index11",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index6",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index8",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index9",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index8",
    "title": "Торговый Терминал 1984",
    "path": "index8.html",
    "launchUrl": "index8.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index8.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index11",
      "index6",
      "index7",
      "index9",
      "index",
      "index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "index8.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index8.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.21
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index8.html",
      "sizeBytes": 12886,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index11",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index6",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index7",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index9",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index9",
    "title": "Торговый Терминал 1984",
    "path": "index9.html",
    "launchUrl": "index9.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index9.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index11",
      "index6",
      "index7",
      "index8",
      "index",
      "index10"
    ],
    "isVisible": true,
    "links": {
      "launch": "index9.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index9.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.13
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index9.html",
      "sizeBytes": 8105,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index11",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index6",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index7",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index8",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index12",
    "title": "Буквомёт",
    "path": "index12.html",
    "launchUrl": "index12.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index12.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index17",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index12.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index12.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.12
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index12.html",
      "sizeBytes": 7233,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index17",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index13",
    "title": "Аудио-нарезчик",
    "path": "index13.html",
    "launchUrl": "index13.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index13.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index10",
      "index113",
      "index20",
      "index48",
      "index49",
      "index50"
    ],
    "isVisible": true,
    "links": {
      "launch": "index13.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index13.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 11,
      "documentation": 12,
      "repositorySharePercent": 0.19
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index13.html",
      "sizeBytes": 11761,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index20",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index48",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index49",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index50",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index15",
    "title": "Обменник валют - POE Style",
    "path": "index15.html",
    "launchUrl": "index15.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index15.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index16",
      "index18",
      "index",
      "index10",
      "index100",
      "index101"
    ],
    "isVisible": true,
    "links": {
      "launch": "index15.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index15.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.24
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index15.html",
      "sizeBytes": 15042,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index16",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index18",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index16",
    "title": "Генератор наград - POE Style",
    "path": "index16.html",
    "launchUrl": "index16.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index16.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index15",
      "index18",
      "index",
      "index10",
      "index100",
      "index101"
    ],
    "isVisible": true,
    "links": {
      "launch": "index16.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index16.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.3
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index16.html",
      "sizeBytes": 18452,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index15",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index18",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index17",
    "title": "Буквомёт",
    "path": "index17.html",
    "launchUrl": "index17.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index17.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index12",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index17.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index17.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.11
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index17.html",
      "sizeBytes": 6666,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index12",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index20",
    "title": "PDF Info Viewer Pro",
    "path": "index20.html",
    "launchUrl": "index20.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index20.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index10",
      "index113",
      "index13",
      "index48",
      "index49",
      "index50"
    ],
    "isVisible": true,
    "links": {
      "launch": "index20.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index20.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.21
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index20.html",
      "sizeBytes": 13029,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index48",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index49",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index50",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index26",
    "title": "Логическая игра \"Запомни последовательность\"",
    "path": "index26.html",
    "launchUrl": "index26.html",
    "category": "Дизайн / UI",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Дизайн",
      "UI",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index26.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎨",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index100",
      "index154",
      "index2",
      "index23",
      "index24",
      "index25"
    ],
    "isVisible": true,
    "links": {
      "launch": "index26.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index26.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.17
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index26.html",
      "sizeBytes": 10560,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index100",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index154",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index2",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index23",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index24",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index25",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Дизайн,UI,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index30",
    "title": "Семейная игра: 5 элементов",
    "path": "index30.html",
    "launchUrl": "index30.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 41,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index30.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index31",
      "index102",
      "index104",
      "index105",
      "index106",
      "index107"
    ],
    "isVisible": true,
    "links": {
      "launch": "index30.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index30.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 14,
      "documentation": 12,
      "repositorySharePercent": 0.12
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 20
        },
        {
          "name": "JavaScript",
          "percent": 40
        },
        {
          "name": "CSS",
          "percent": 40
        }
      ]
    },
    "builder": {
      "file": "index30.html",
      "sizeBytes": 7742,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index31",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index31",
    "title": "5 Элементов: Семейная версия",
    "path": "index31.html",
    "launchUrl": "index31.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 41,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index31.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index30",
      "index102",
      "index104",
      "index105",
      "index106",
      "index107"
    ],
    "isVisible": true,
    "links": {
      "launch": "index31.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index31.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 14,
      "documentation": 12,
      "repositorySharePercent": 0.24
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 20
        },
        {
          "name": "JavaScript",
          "percent": 40
        },
        {
          "name": "CSS",
          "percent": 40
        }
      ]
    },
    "builder": {
      "file": "index31.html",
      "sizeBytes": 14984,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index30",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index32",
    "title": "Угадай ноту",
    "path": "index32.html",
    "launchUrl": "index32.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index32.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index102",
      "index104",
      "index105",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index32.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index32.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.12
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index32.html",
      "sizeBytes": 7283,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index33",
    "title": "Веб-синтезатор звуков",
    "path": "index33.html",
    "launchUrl": "index33.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index33.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index102",
      "index104",
      "index105",
      "index106",
      "index107",
      "index108"
    ],
    "isVisible": true,
    "links": {
      "launch": "index33.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index33.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 11,
      "documentation": 12,
      "repositorySharePercent": 0.25
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index33.html",
      "sizeBytes": 15675,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/lamejs@1.2.0/lame.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index38",
    "title": "Tower Defense Spray Mechanic",
    "path": "index38.html",
    "launchUrl": "index38.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index38.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index52",
      "index124",
      "index154",
      "index58",
      "index59",
      "index65"
    ],
    "isVisible": true,
    "links": {
      "launch": "index38.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index38.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.17
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index38.html",
      "sizeBytes": 10534,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index52",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index124",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index154",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index58",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index59",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index65",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index39",
    "title": "Угадай текст наоборот",
    "path": "index39.html",
    "launchUrl": "index39.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index39.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index148",
      "index149",
      "index4",
      "index5",
      "index70",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index39.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index39.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.14
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index39.html",
      "sizeBytes": 8790,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index148",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index149",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index4",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index5",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index70",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index96",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index42",
    "title": "Кухня Хаоса - Кафе-симулятор",
    "path": "index42.html",
    "launchUrl": "index42.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index42.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index41",
      "index43",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index42.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index42.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 10,
      "documentation": 12,
      "repositorySharePercent": 0.28
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index42.html",
      "sizeBytes": 17430,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index41",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index43",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index44",
    "title": "Memori Chests",
    "path": "index44.html",
    "launchUrl": "index44.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index44.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index",
      "index10",
      "index100",
      "index101",
      "index102",
      "index103"
    ],
    "isVisible": true,
    "links": {
      "launch": "index44.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index44.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.11
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index44.html",
      "sizeBytes": 6919,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index103",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index45",
    "title": "Сундучный Магнат",
    "path": "index45.html",
    "launchUrl": "index45.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index45.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index150",
      "index151",
      "index152",
      "index200",
      "index500",
      "index501"
    ],
    "isVisible": true,
    "links": {
      "launch": "index45.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index45.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.15
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index45.html",
      "sizeBytes": 9407,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index150",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index151",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index152",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index200",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index500",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index501",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index46",
    "title": "Торговая Империя",
    "path": "index46.html",
    "launchUrl": "index46.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index46.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index47",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index46.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index46.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.18
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index46.html",
      "sizeBytes": 10909,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index47",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index48",
    "title": "Админка TD Game",
    "path": "index48.html",
    "launchUrl": "index48.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 42,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index48.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index10",
      "index113",
      "index13",
      "index20",
      "index49",
      "index50"
    ],
    "isVisible": true,
    "links": {
      "launch": "index48.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index48.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 17,
      "documentation": 12,
      "repositorySharePercent": 0.1
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index48.html",
      "sizeBytes": 6506,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
        "admin.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index20",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index49",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index50",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index49",
    "title": "JSON Table Editor",
    "path": "index49.html",
    "launchUrl": "index49.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index49.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index10",
      "index113",
      "index13",
      "index20",
      "index48",
      "index50"
    ],
    "isVisible": true,
    "links": {
      "launch": "index49.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index49.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.23
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index49.html",
      "sizeBytes": 14583,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index20",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index48",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index50",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index50",
    "title": "JSON Admin Panel",
    "path": "index50.html",
    "launchUrl": "index50.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 42,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index50.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index51",
      "index10",
      "index113",
      "index13",
      "index20",
      "index48"
    ],
    "isVisible": true,
    "links": {
      "launch": "index50.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index50.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 17,
      "documentation": 12,
      "repositorySharePercent": 0.07
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index50.html",
      "sizeBytes": 4648,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
        "adminjson.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index51",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index20",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index48",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index51",
    "title": "JSON Admin Panel",
    "path": "index51.html",
    "launchUrl": "index51.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 42,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index51.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index50",
      "index10",
      "index113",
      "index13",
      "index20",
      "index48"
    ],
    "isVisible": true,
    "links": {
      "launch": "index51.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index51.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 17,
      "documentation": 12,
      "repositorySharePercent": 0.17
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index51.html",
      "sizeBytes": 10274,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
        "adminjson.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index50",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index20",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index48",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index53",
    "title": "Огненный снаряд",
    "path": "index53.html",
    "launchUrl": "index53.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index53.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index54",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index53.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index53.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.13
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index53.html",
      "sizeBytes": 7866,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index54",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index54",
    "title": "Реалистичный огненный снаряд",
    "path": "index54.html",
    "launchUrl": "index54.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index54.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index53",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index54.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index54.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.17
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index54.html",
      "sizeBytes": 10561,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index53",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index55",
    "title": "Язык пламени",
    "path": "index55.html",
    "launchUrl": "index55.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index55.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index",
      "index10",
      "index100",
      "index101",
      "index102",
      "index103"
    ],
    "isVisible": true,
    "links": {
      "launch": "index55.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index55.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.11
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index55.html",
      "sizeBytes": 7053,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index103",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index56",
    "title": "Огненная пушка",
    "path": "index56.html",
    "launchUrl": "index56.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index56.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index57",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index56.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index56.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.18
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index56.html",
      "sizeBytes": 11339,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index57",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index57",
    "title": "Огненная пушка с эффектами",
    "path": "index57.html",
    "launchUrl": "index57.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index57.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index56",
      "index",
      "index10",
      "index100",
      "index101",
      "index102"
    ],
    "isVisible": true,
    "links": {
      "launch": "index57.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index57.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.24
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index57.html",
      "sizeBytes": 15134,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index56",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index58",
    "title": "Tower Defense Water Map",
    "path": "index58.html",
    "launchUrl": "index58.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index58.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index124",
      "index154",
      "index38",
      "index52",
      "index59",
      "index65"
    ],
    "isVisible": true,
    "links": {
      "launch": "index58.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index58.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.27
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index58.html",
      "sizeBytes": 16952,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index124",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index154",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index38",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index52",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index59",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index65",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index59",
    "title": "Tower Defense (PixiJS)",
    "path": "index59.html",
    "launchUrl": "index59.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index59.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index124",
      "index154",
      "index65",
      "index38",
      "index52",
      "index58"
    ],
    "isVisible": true,
    "links": {
      "launch": "index59.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index59.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 11,
      "documentation": 12,
      "repositorySharePercent": 0.31
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index59.html",
      "sizeBytes": 19503,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://pixijs.download/v7.3.0/pixi.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index124",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index154",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index65",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:en,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index38",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index52",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index58",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,en,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index61",
    "title": "Крестики-нолики (P2P)",
    "path": "index61.html",
    "launchUrl": "index61.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index61.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index",
      "index10",
      "index100",
      "index101",
      "index102",
      "index103"
    ],
    "isVisible": true,
    "links": {
      "launch": "index61.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index61.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 11,
      "documentation": 12,
      "repositorySharePercent": 0.1
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index61.html",
      "sizeBytes": 6147,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://unpkg.com/peerjs@1.4.7/dist/peerjs.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index103",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index62",
    "title": "P2P Викторина (4 игрока)",
    "path": "index62.html",
    "launchUrl": "index62.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index62.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index63",
      "index64",
      "index",
      "index10",
      "index100",
      "index101"
    ],
    "isVisible": true,
    "links": {
      "launch": "index62.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index62.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 11,
      "documentation": 12,
      "repositorySharePercent": 0.1
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index62.html",
      "sizeBytes": 6028,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://unpkg.com/peerjs@1.4.7/dist/peerjs.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index63",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index64",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index63",
    "title": "P2P Монополия (4 игрока)",
    "path": "index63.html",
    "launchUrl": "index63.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index63.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index62",
      "index64",
      "index",
      "index10",
      "index100",
      "index101"
    ],
    "isVisible": true,
    "links": {
      "launch": "index63.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index63.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 11,
      "documentation": 12,
      "repositorySharePercent": 0.19
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index63.html",
      "sizeBytes": 11978,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://unpkg.com/peerjs@1.4.7/dist/peerjs.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index62",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index64",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index64",
    "title": "P2P Подключение (4 игрока)",
    "path": "index64.html",
    "launchUrl": "index64.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 40,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index64.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index62",
      "index63",
      "index102",
      "index104",
      "index105",
      "index106"
    ],
    "isVisible": true,
    "links": {
      "launch": "index64.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index64.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 11,
      "documentation": 12,
      "repositorySharePercent": 0.1
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "index64.html",
      "sizeBytes": 5921,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [
        "https://unpkg.com/peerjs@1.4.7/dist/peerjs.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index62",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index63",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index102",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index88",
    "title": "File Analyzer Pro",
    "path": "index88.html",
    "launchUrl": "index88.html",
    "category": "Файлы / Данные",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Файлы",
      "Данные",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index88.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🔎",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index86",
      "index87",
      "index90",
      "index10",
      "index113",
      "index13"
    ],
    "isVisible": true,
    "links": {
      "launch": "index88.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index88.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.25
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index88.html",
      "sizeBytes": 15463,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index86",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index87",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index90",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index10",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index113",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index13",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Файлы,Данные,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index101",
    "title": "Типография Idle",
    "path": "index101.html",
    "launchUrl": "index101.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index101.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index131",
      "index132",
      "index133",
      "index134",
      "index135",
      "index136"
    ],
    "isVisible": true,
    "links": {
      "launch": "index101.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index101.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.29
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index101.html",
      "sizeBytes": 18035,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index131",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index132",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index133",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index134",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index135",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index136",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index102",
    "title": "Симулятор приема маммолога",
    "path": "index102.html",
    "launchUrl": "index102.html",
    "category": "Игры",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Игры",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index102.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🎮",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index104",
      "index105",
      "index106",
      "index107",
      "index108",
      "index109"
    ],
    "isVisible": true,
    "links": {
      "launch": "index102.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index102.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.09
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index102.html",
      "sizeBytes": 5876,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index104",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index105",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index106",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index107",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index108",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index109",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Игры,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index103",
    "title": "Шапочный Бизнес",
    "path": "index103.html",
    "launchUrl": "index103.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index103.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index132",
      "index133",
      "index134",
      "index137",
      "index138",
      "index139"
    ],
    "isVisible": true,
    "links": {
      "launch": "index103.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index103.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.16
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index103.html",
      "sizeBytes": 10117,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index132",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index133",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index134",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index137",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index138",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index139",
          "score": 78,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index141",
    "title": "Игра: Типография",
    "path": "index141.html",
    "launchUrl": "index141.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 41,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index141.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index140",
      "index101",
      "index131",
      "index132",
      "index133",
      "index134"
    ],
    "isVisible": true,
    "links": {
      "launch": "index141.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index141.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 14,
      "documentation": 12,
      "repositorySharePercent": 0.14
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 20
        },
        {
          "name": "JavaScript",
          "percent": 40
        },
        {
          "name": "CSS",
          "percent": 40
        }
      ]
    },
    "builder": {
      "file": "index141.html",
      "sizeBytes": 8753,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "index140",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index101",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index131",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index132",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index133",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        },
        {
          "id": "index134",
          "score": 93,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "index144",
    "title": "Типография: Бизнес-симулятор",
    "path": "index144.html",
    "launchUrl": "index144.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 42,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index144.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index143",
      "index145",
      "index146",
      "index147",
      "index132",
      "index133"
    ],
    "isVisible": true,
    "links": {
      "launch": "index144.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index144.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 17,
      "documentation": 12,
      "repositorySharePercent": 0.25
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 17
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "index144.html",
      "sizeBytes": 15246,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
      ],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 9
        }
      ],
      "relationReasons": [
        {
          "id": "index143",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index145",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index146",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index147",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index132",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "index133",
          "score": 97,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "index149",
    "title": "TD Интерфейс",
    "path": "index149.html",
    "launchUrl": "index149.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index149.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index148",
      "index39",
      "index4",
      "index5",
      "index70",
      "index96"
    ],
    "isVisible": true,
    "links": {
      "launch": "index149.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index149.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.2
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index149.html",
      "sizeBytes": 12621,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index148",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index39",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index4",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index5",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index70",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index96",
          "score": 80,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Текст,Контент,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index153",
    "title": "Гео-Фонарик",
    "path": "index153.html",
    "launchUrl": "index153.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index153.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index",
      "index10",
      "index100",
      "index101",
      "index102",
      "index103"
    ],
    "isVisible": true,
    "links": {
      "launch": "index153.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index153.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.27
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index153.html",
      "sizeBytes": 16888,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index10",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index100",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index101",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index102",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,screenshot,javascript,css"
          ]
        },
        {
          "id": "index103",
          "score": 65,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,screenshot,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "index502",
    "title": "Типографский Магнат",
    "path": "index502.html",
    "launchUrl": "index502.html",
    "category": "Полиграфия / Дизайн",
    "status": "review",
    "maturity": "beta",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "screenshot",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: index502.html; есть изображение; готовность 56/100",
    "imageUrl": "350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "index150",
      "index151",
      "index152",
      "index200",
      "index500",
      "index501"
    ],
    "isVisible": true,
    "links": {
      "launch": "index502.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/index502.html"
    },
    "metrics": {
      "readiness": 56,
      "visual": 68,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.16
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": true,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "index502.html",
      "sizeBytes": 10112,
      "screenshots": [
        "350/preview.jpg",
        "3502/preview-poly.jpg",
        "3502/preview.jpg",
        "pass/Screenshot.jpg",
        "101/stilist_101.jpg",
        "102/stilist_102.jpg",
        "2025/stilist_2025.jpg",
        "320/stilist_320.jpg",
        "3501/stilist_3501.jpg",
        "370/stilist_370_1.jpg",
        "370/stilist_370_10.jpg",
        "370/stilist_370_2.jpg",
        "370/stilist_370_3.jpg",
        "370/stilist_370_4.jpg",
        "370/stilist_370_5.jpg",
        "370/stilist_370_6.jpg",
        "370/stilist_370_7.jpg",
        "370/stilist_370_8.jpg",
        "370/stilist_370_9.jpg",
        "400/stilist_400.jpg",
        "5/stilist_5.jpg",
        "80/stilist_80.jpg",
        "81/stilist_81.jpg"
      ],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "screenshot",
          "value": 18
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "index150",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index151",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index152",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index200",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index500",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "index501",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,screenshot,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "m100",
    "title": "Миссия: Община - Интерфейс",
    "path": "m100/index.html",
    "launchUrl": "m100/index.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 42,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: m100/index.html; готовность 50/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "400",
      "400-index2",
      "albion",
      "albion2",
      "index116",
      "index117"
    ],
    "isVisible": true,
    "links": {
      "launch": "m100/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/m100/index.html"
    },
    "metrics": {
      "readiness": 50,
      "visual": 20,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.78
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "m100/index.html",
      "sizeBytes": 48544,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "readiness",
          "reason": "content",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "400",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "400-index2",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "albion",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "albion2",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "index116",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "index117",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "925",
    "title": "Расчет параметров рулона",
    "path": "925/index.html",
    "launchUrl": "925/index.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 38,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 925/index.html; готовность 44/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "924",
      "926",
      "927",
      "921"
    ],
    "isVisible": true,
    "links": {
      "launch": "925/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/925/index.html"
    },
    "metrics": {
      "readiness": 44,
      "visual": 20,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.33
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "925/index.html",
      "sizeBytes": 20511,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "924",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "926",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "927",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "921",
          "score": 43,
          "reasons": [
            "shared-tags:ru,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "926",
    "title": "Расчет параметров рулона",
    "path": "926/index.html",
    "launchUrl": "926/index.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 38,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 926/index.html; готовность 44/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "924",
      "925",
      "927",
      "921"
    ],
    "isVisible": true,
    "links": {
      "launch": "926/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/926/index.html"
    },
    "metrics": {
      "readiness": 44,
      "visual": 20,
      "technical": 28,
      "documentation": 12,
      "repositorySharePercent": 0.35
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "926/index.html",
      "sizeBytes": 21642,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "924",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "925",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "927",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "921",
          "score": 43,
          "reasons": [
            "shared-tags:ru,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "albion",
    "title": "Albion Craft Master",
    "path": "albion/index.html",
    "launchUrl": "albion/index.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 52,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: albion/index.html; готовность 44/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "albion2",
      "albion3",
      "400",
      "400-index2",
      "index116",
      "index117"
    ],
    "isVisible": true,
    "links": {
      "launch": "albion/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/albion/index.html"
    },
    "metrics": {
      "readiness": 44,
      "visual": 20,
      "technical": 68,
      "documentation": 12,
      "repositorySharePercent": 1.33
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 10
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 40
        }
      ]
    },
    "builder": {
      "file": "albion/index.html",
      "sizeBytes": 82616,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
      ],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.7.2/bluebird.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.min.js"
      ],
      "inlineScriptCount": 2,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 12
        }
      ],
      "relationReasons": [
        {
          "id": "albion2",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "albion3",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "400",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "400-index2",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "index116",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "index117",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "albion2",
    "title": "Albion Craft Master",
    "path": "albion2/index.html",
    "launchUrl": "albion2/index.html",
    "category": "Церковь",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "B3",
      "stars": 3,
      "score": 50,
      "label": "Auto: good working project"
    },
    "tags": [
      "auto-scan",
      "Церковь",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: albion2/index.html; готовность 44/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "albion",
      "albion3",
      "400",
      "400-index2",
      "index116",
      "index117"
    ],
    "isVisible": true,
    "links": {
      "launch": "albion2/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/albion2/index.html"
    },
    "metrics": {
      "readiness": 44,
      "visual": 20,
      "technical": 60,
      "documentation": 12,
      "repositorySharePercent": 1.49
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 13
        },
        {
          "name": "JavaScript",
          "percent": 38
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "albion2/index.html",
      "sizeBytes": 92660,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.css"
      ],
      "jsLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/pnotify/3.2.1/pnotify.js",
        "https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 12
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 12
        }
      ],
      "relationReasons": [
        {
          "id": "albion",
          "score": 105,
          "reasons": [
            "same-id-family",
            "same-category",
            "shared-tags:Церковь,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "albion3",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "400",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "400-index2",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "index116",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        },
        {
          "id": "index117",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Церковь,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "albion3",
    "title": "Albion Craft Calculator",
    "path": "albion3/index.html",
    "launchUrl": "albion3/index.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "B1",
      "stars": 1,
      "score": 39,
      "label": "Auto: simple working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: albion3/index.html; готовность 44/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "albion",
      "albion2"
    ],
    "isVisible": true,
    "links": {
      "launch": "albion3/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/albion3/index.html"
    },
    "metrics": {
      "readiness": 44,
      "visual": 20,
      "technical": 29,
      "documentation": 12,
      "repositorySharePercent": 0.41
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 50
        },
        {
          "name": "CSS",
          "percent": 25
        }
      ]
    },
    "builder": {
      "file": "albion3/index.html",
      "sizeBytes": 25437,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [
        "https://unpkg.com/vue@3/dist/vue.global.js"
      ],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "albion",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,javascript,css",
            "similar-title:0.67"
          ]
        },
        {
          "id": "albion2",
          "score": 82,
          "reasons": [
            "same-id-family",
            "shared-tags:ru,javascript,css",
            "similar-title:0.67"
          ]
        }
      ]
    }
  },
  {
    "id": "ru",
    "title": "Алгоритм повелительного наклонения",
    "path": "ru/index.html",
    "launchUrl": "ru/index.html",
    "category": "Текст / Контент",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 31,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Текст",
      "Контент",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: ru/index.html; готовность 44/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "✍️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "5",
      "index148",
      "index149",
      "index39",
      "index4",
      "index5"
    ],
    "isVisible": true,
    "links": {
      "launch": "ru/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/ru/index.html"
    },
    "metrics": {
      "readiness": 44,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.3
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "ru/index.html",
      "sizeBytes": 18638,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "content",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "5",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,javascript,css"
          ]
        },
        {
          "id": "index148",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,javascript,css"
          ]
        },
        {
          "id": "index149",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,javascript,css"
          ]
        },
        {
          "id": "index39",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,javascript,css"
          ]
        },
        {
          "id": "index4",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,javascript,css"
          ]
        },
        {
          "id": "index5",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Текст,Контент,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "win",
    "title": "WebOS - Веб-эмуляция операционной системы",
    "path": "win/index.html",
    "launchUrl": "win/index.html",
    "category": "Нужно разобрать",
    "status": "review",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "B2",
      "stars": 2,
      "score": 44,
      "label": "Auto: working project"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: win/index.html; готовность 44/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [],
    "isVisible": true,
    "links": {
      "launch": "win/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/win/index.html"
    },
    "metrics": {
      "readiness": 44,
      "visual": 20,
      "technical": 43,
      "documentation": 12,
      "repositorySharePercent": 1.62
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "win/index.html",
      "sizeBytes": 100568,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "readiness",
          "reason": "substantial-html",
          "value": 6
        },
        {
          "bucket": "complexity",
          "reason": "20kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "80kb+",
          "value": 18
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": []
    }
  },
  {
    "id": "82",
    "title": "Типография - Бизнес симулятор",
    "path": "82/index.html",
    "launchUrl": "82/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 33,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 82/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "80",
      "81",
      "83",
      "84",
      "85",
      "86"
    ],
    "isVisible": true,
    "links": {
      "launch": "82/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/82/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.21
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "82/index.html",
      "sizeBytes": 13291,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "80",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "81",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "83",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "84",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "85",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "86",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "83",
    "title": "Типография - Бизнес симулятор",
    "path": "83/index.html",
    "launchUrl": "83/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 33,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 83/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "80",
      "81",
      "82",
      "84",
      "85",
      "86"
    ],
    "isVisible": true,
    "links": {
      "launch": "83/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/83/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.22
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "83/index.html",
      "sizeBytes": 13873,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "80",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "81",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "82",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "84",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "85",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "86",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "84",
    "title": "Типография - Бизнес симулятор",
    "path": "84/index.html",
    "launchUrl": "84/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 33,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 84/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "80",
      "81",
      "82",
      "83",
      "85",
      "86"
    ],
    "isVisible": true,
    "links": {
      "launch": "84/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/84/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.22
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "84/index.html",
      "sizeBytes": 13873,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "80",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "81",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "82",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "83",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "85",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "86",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "85",
    "title": "Типография - Бизнес симулятор",
    "path": "85/index.html",
    "launchUrl": "85/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 33,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 85/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "80",
      "81",
      "82",
      "83",
      "84",
      "86"
    ],
    "isVisible": true,
    "links": {
      "launch": "85/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/85/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.22
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "85/index.html",
      "sizeBytes": 13873,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "80",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "81",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "82",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "83",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "84",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "86",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "86",
    "title": "Типография - Бизнес симулятор",
    "path": "86/index.html",
    "launchUrl": "86/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 33,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 86/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "80",
      "81",
      "82",
      "83",
      "84",
      "85"
    ],
    "isVisible": true,
    "links": {
      "launch": "86/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/86/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.32
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "86/index.html",
      "sizeBytes": 19613,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "80",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "81",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "82",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "83",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "84",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "85",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "87",
    "title": "Типография - Бизнес симулятор",
    "path": "87/index.html",
    "launchUrl": "87/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 33,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 87/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "80",
      "81",
      "82",
      "83",
      "84",
      "85"
    ],
    "isVisible": true,
    "links": {
      "launch": "87/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/87/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 23,
      "documentation": 12,
      "repositorySharePercent": 0.28
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 14
        },
        {
          "name": "JavaScript",
          "percent": 71
        },
        {
          "name": "CSS",
          "percent": 14
        }
      ]
    },
    "builder": {
      "file": "87/index.html",
      "sizeBytes": 17275,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [
        "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isoWeek.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/plugin/isBetween.js",
        "https://cdn.jsdelivr.net/npm/dayjs@1/locale/ru.js",
        "game.js"
      ],
      "inlineScriptCount": 0,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 20
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "80",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "81",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "82",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "83",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "84",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "85",
          "score": 70,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "920",
    "title": "Simple Mobile Spreadsheet",
    "path": "920/index.html",
    "launchUrl": "920/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "en",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 920/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [],
    "isVisible": true,
    "links": {
      "launch": "920/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/920/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.13
    },
    "tech": {
      "type": "static-html",
      "language": "en",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "920/index.html",
      "sizeBytes": 7876,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": []
    }
  },
  {
    "id": "921",
    "title": "Калькулятор параметров рулона фольги",
    "path": "921/index.html",
    "launchUrl": "921/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 921/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "922",
      "350",
      "350-index1",
      "3501",
      "3502",
      "80"
    ],
    "isVisible": true,
    "links": {
      "launch": "921/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/921/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.22
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "921/index.html",
      "sizeBytes": 13695,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "922",
          "score": 64,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "350",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "350-index1",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "3501",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "3502",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "80",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "922",
    "title": "Калькулятор рулона фольги",
    "path": "922/index.html",
    "launchUrl": "922/index.html",
    "category": "Полиграфия / Дизайн",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 28,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Полиграфия",
      "Дизайн",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 922/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "921",
      "350",
      "350-index1",
      "3501",
      "3502",
      "80"
    ],
    "isVisible": true,
    "links": {
      "launch": "922/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/922/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 10,
      "documentation": 12,
      "repositorySharePercent": 0.25
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "922/index.html",
      "sizeBytes": 15700,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "921",
          "score": 64,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css",
            "similar-title:0.75"
          ]
        },
        {
          "id": "350",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "350-index1",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "3501",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "3502",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        },
        {
          "id": "80",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Полиграфия,Дизайн,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "924",
    "title": "Расчет параметров рулона",
    "path": "924/index.html",
    "launchUrl": "924/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 28,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 924/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "925",
      "926",
      "927",
      "921"
    ],
    "isVisible": true,
    "links": {
      "launch": "924/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/924/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 10,
      "documentation": 12,
      "repositorySharePercent": 0.31
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "924/index.html",
      "sizeBytes": 19429,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "925",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "926",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "927",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "921",
          "score": 43,
          "reasons": [
            "shared-tags:ru,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "927",
    "title": "Расчет параметров рулона",
    "path": "927/index.html",
    "launchUrl": "927/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 28,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 927/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "924",
      "925",
      "926",
      "921"
    ],
    "isVisible": true,
    "links": {
      "launch": "927/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/927/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 10,
      "documentation": 12,
      "repositorySharePercent": 0.32
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 25
        },
        {
          "name": "JavaScript",
          "percent": 25
        },
        {
          "name": "CSS",
          "percent": 50
        }
      ]
    },
    "builder": {
      "file": "927/index.html",
      "sizeBytes": 19916,
      "screenshots": [],
      "cssLinks": [
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      ],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 6
        }
      ],
      "relationReasons": [
        {
          "id": "924",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "925",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "926",
          "score": 55,
          "reasons": [
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        },
        {
          "id": "921",
          "score": 43,
          "reasons": [
            "shared-tags:ru,javascript,css",
            "similar-title:0.50"
          ]
        }
      ]
    }
  },
  {
    "id": "muz",
    "title": "Полная таблица гамм с пентатоникой",
    "path": "muz/index.html",
    "launchUrl": "muz/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: muz/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "muz2"
    ],
    "isVisible": true,
    "links": {
      "launch": "muz/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/muz/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.24
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "muz/index.html",
      "sizeBytes": 14948,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "muz2",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "muz2",
    "title": "Полная таблица гамм с пентатоникой",
    "path": "muz2/index.html",
    "launchUrl": "muz2/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: muz2/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "muz"
    ],
    "isVisible": true,
    "links": {
      "launch": "muz2/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/muz2/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.25
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "muz2/index.html",
      "sizeBytes": 15611,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "muz",
          "score": 90,
          "reasons": [
            "same-id-family",
            "shared-tags:Нужно разобрать,ru,javascript,css",
            "similar-title:1.00"
          ]
        }
      ]
    }
  },
  {
    "id": "root1",
    "title": "Каскадная клавиатура",
    "path": "root1/index.html",
    "launchUrl": "root1/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: root1/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [],
    "isVisible": true,
    "links": {
      "launch": "root1/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/root1/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.24
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "root1/index.html",
      "sizeBytes": 15186,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": []
    }
  },
  {
    "id": "wb",
    "title": "Калькулятор цен для Wildberries (с НДС)",
    "path": "wb/index.html",
    "launchUrl": "wb/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: wb/index.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "wb-index2",
      "wb-index3"
    ],
    "isVisible": true,
    "links": {
      "launch": "wb/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/wb/index.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.19
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "wb/index.html",
      "sizeBytes": 11805,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "wb-index2",
          "score": 68,
          "reasons": [
            "same-folder",
            "shared-tags:Нужно разобрать,ru,javascript,css"
          ]
        },
        {
          "id": "wb-index3",
          "score": 68,
          "reasons": [
            "same-folder",
            "shared-tags:ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "wb-index2",
    "title": "Калькулятор WB",
    "path": "wb/index2.html",
    "launchUrl": "wb/index2.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: wb/index2.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "wb-index3",
      "wb"
    ],
    "isVisible": true,
    "links": {
      "launch": "wb/index2.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/wb/index2.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.26
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "wb/index2.html",
      "sizeBytes": 15945,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "wb-index3",
          "score": 103,
          "reasons": [
            "same-folder",
            "same-id-family",
            "shared-tags:ru,javascript,css"
          ]
        },
        {
          "id": "wb",
          "score": 68,
          "reasons": [
            "same-folder",
            "shared-tags:Нужно разобрать,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "wb-index3",
    "title": "Калькулятор WB (Гарантированная прибыль)",
    "path": "wb/index3.html",
    "launchUrl": "wb/index3.html",
    "category": "Обучение",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C4",
      "stars": 4,
      "score": 27,
      "label": "Auto: good prototype"
    },
    "tags": [
      "auto-scan",
      "Обучение",
      "ru",
      "javascript",
      "css"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: wb/index3.html; готовность 38/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": null,
    "related": [
      "wb-index2",
      "wb",
      "370",
      "370-index10",
      "370-index2",
      "370-index3"
    ],
    "isVisible": true,
    "links": {
      "launch": "wb/index3.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/wb/index3.html"
    },
    "metrics": {
      "readiness": 38,
      "visual": 20,
      "technical": 7,
      "documentation": 12,
      "repositorySharePercent": 0.18
    },
    "tech": {
      "type": "static-html",
      "language": "ru",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 33
        },
        {
          "name": "JavaScript",
          "percent": 33
        },
        {
          "name": "CSS",
          "percent": 33
        }
      ]
    },
    "builder": {
      "file": "wb/index3.html",
      "sizeBytes": 11170,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 1,
      "inlineStyleCount": 1,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        },
        {
          "bucket": "readiness",
          "reason": "javascript",
          "value": 10
        },
        {
          "bucket": "readiness",
          "reason": "styles",
          "value": 8
        },
        {
          "bucket": "complexity",
          "reason": "js-count",
          "value": 4
        },
        {
          "bucket": "complexity",
          "reason": "css-count",
          "value": 3
        }
      ],
      "relationReasons": [
        {
          "id": "wb-index2",
          "score": 103,
          "reasons": [
            "same-folder",
            "same-id-family",
            "shared-tags:ru,javascript,css"
          ]
        },
        {
          "id": "wb",
          "score": 68,
          "reasons": [
            "same-folder",
            "shared-tags:ru,javascript,css"
          ]
        },
        {
          "id": "370",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Обучение,ru,javascript,css"
          ]
        },
        {
          "id": "370-index10",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Обучение,ru,javascript,css"
          ]
        },
        {
          "id": "370-index2",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Обучение,ru,javascript,css"
          ]
        },
        {
          "id": "370-index3",
          "score": 45,
          "reasons": [
            "same-category",
            "shared-tags:Обучение,ru,javascript,css"
          ]
        }
      ]
    }
  },
  {
    "id": "923",
    "title": "923",
    "path": "923/index.html",
    "launchUrl": "923/index.html",
    "category": "Нужно разобрать",
    "status": "experiment",
    "maturity": "draft",
    "featured": false,
    "quality": {
      "grade": "C2",
      "stars": 2,
      "score": 13,
      "label": "Auto: early prototype"
    },
    "tags": [
      "auto-scan",
      "Нужно разобрать"
    ],
    "description": "Проект найден автоматическим сканером. Требуется ручная проверка описания.",
    "note": "Источник: 923/index.html; готовность 20/100",
    "imageUrl": "",
    "fallbackImageUrl": "",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [],
    "isVisible": true,
    "links": {
      "launch": "923/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/923/index.html"
    },
    "metrics": {
      "readiness": 20,
      "visual": 20,
      "technical": 0,
      "documentation": 12,
      "repositorySharePercent": 0
    },
    "tech": {
      "type": "static-html",
      "language": "unknown",
      "hasManifest": false,
      "hasOpenGraph": false,
      "hasScreenshot": false,
      "languages": [
        {
          "name": "HTML",
          "percent": 100
        }
      ]
    },
    "builder": {
      "file": "923/index.html",
      "sizeBytes": 2,
      "screenshots": [],
      "cssLinks": [],
      "jsLinks": [],
      "inlineScriptCount": 0,
      "inlineStyleCount": 0,
      "generatedAt": "2026-06-13T12:23:54.060Z",
      "builderVersion": "0.7.0-auto-catalog",
      "needsHumanReview": true,
      "reasons": [
        {
          "bucket": "readiness",
          "reason": "title",
          "value": 20
        }
      ],
      "relationReasons": []
    }
  }
];
