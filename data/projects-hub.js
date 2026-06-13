window.SUNPOLE_HUB_META = {
  "name": "SUNPOLE HUB",
  "version": "0.7.0-auto-catalog",
  "updatedAt": "2026-06-13",
  "theme": "auto-catalog",
  "repository": "sunpole/stilist",
  "homeUrl": "hub-current.html",
  "projectCount": 194,
  "source": "tools/hub-builder/generate.js",
  "output": "data/projects-hub.js",
  "safeMode": true
};

window.SUNPOLE_PROJECTS = [
  {
    "id": "3502",
    "title": "Калькулятор полиграфических операций",
    "path": "apps/3502/index.html",
    "launchUrl": "apps/3502/index.html",
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
    "imageUrl": "https://sunpole.github.io/stilist/apps/3502/preview.jpg",
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
      "launch": "apps/3502/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/3502/index.html"
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
      "file": "apps/3502/index.html",
      "sizeBytes": 35558,
      "screenshots": [
        "https://sunpole.github.io/stilist/apps/3502/preview.jpg",
        "apps/3502/preview-poly.jpg",
        "apps/3502/preview.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "350",
    "title": "Конвертер мм ↔ пиксели",
    "path": "apps/350/index.html",
    "launchUrl": "apps/350/index.html",
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
    "imageUrl": "https://sunpole.github.io/stilist/apps/350/preview.jpg",
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
      "launch": "apps/350/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/350/index.html"
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
      "file": "apps/350/index.html",
      "sizeBytes": 14303,
      "screenshots": [
        "https://sunpole.github.io/stilist/apps/350/preview.jpg",
        "apps/350/preview.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "pass",
    "title": "⚡ NEON PASS 2026 — генератор безопасных паролей",
    "path": "apps/pass/index.html",
    "launchUrl": "apps/pass/index.html",
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
    "imageUrl": "https://github.com/sunpole/stilist/raw/main/apps/pass/Screenshot.jpg",
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
      "launch": "apps/pass/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/pass/index.html"
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
      "file": "apps/pass/index.html",
      "sizeBytes": 29532,
      "screenshots": [
        "https://github.com/sunpole/stilist/raw/main/apps/pass/Screenshot.jpg",
        "apps/pass/Screenshot.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "category needs manual review"
  },
  {
    "id": "index90",
    "title": "File Analyzer Pro",
    "path": "apps/index90/index.html",
    "launchUrl": "apps/index90/index.html",
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
      "launch": "apps/index90/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index90/index.html"
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
      "file": "apps/index90/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "2025",
    "title": "Lетучие клетки",
    "path": "apps/2025/index.html",
    "launchUrl": "apps/2025/index.html",
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
    "imageUrl": "apps/2025/stilist_2025.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/2025/stilist_2025.jpg",
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
      "launch": "apps/2025/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/2025/index.html"
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
      "file": "apps/2025/index.html",
      "sizeBytes": 5745,
      "screenshots": [
        "apps/2025/stilist_2025.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "index10",
    "title": "Демо — элемент \"1\" (a) — варианты и live CSS",
    "path": "apps/index10/index.html",
    "launchUrl": "apps/index10/index.html",
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
      "launch": "apps/index10/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index10/index.html"
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
      "file": "apps/index10/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; demo or service page, not a storefront project"
  },
  {
    "id": "index70",
    "title": "RGB Color Picker",
    "path": "apps/index70/index.html",
    "launchUrl": "apps/index70/index.html",
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
      "launch": "apps/index70/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index70/index.html"
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
      "file": "apps/index70/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "5",
    "title": "Анализатор текста для Telegram",
    "path": "apps/5/index.html",
    "launchUrl": "apps/5/index.html",
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
    "imageUrl": "apps/5/stilist_5.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/5/stilist_5.jpg",
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
      "launch": "apps/5/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/5/index.html"
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
      "file": "apps/5/index.html",
      "sizeBytes": 37749,
      "screenshots": [
        "apps/5/stilist_5.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "320",
    "title": "Расчет раскладки изделий на печатном листе",
    "path": "apps/320/index.html",
    "launchUrl": "apps/320/index.html",
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
    "imageUrl": "apps/320/stilist_320.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/320/stilist_320.jpg",
    "icon": "📦",
    "source": "hub-builder",
    "versionOf": null,
    "related": [],
    "isVisible": true,
    "links": {
      "launch": "apps/320/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/320/index.html"
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
      "file": "apps/320/index.html",
      "sizeBytes": 45518,
      "screenshots": [
        "apps/320/stilist_320.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "category needs manual review"
  },
  {
    "id": "370",
    "title": "Математический Спринт",
    "path": "apps/370/index.html",
    "launchUrl": "apps/370/index.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index.html"
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
      "file": "apps/370/index.html",
      "sizeBytes": 34620,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index2",
    "title": "Математический Спринт",
    "path": "apps/370/index2.html",
    "launchUrl": "apps/370/index2.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index2.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index2.html"
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
      "file": "apps/370/index2.html",
      "sizeBytes": 37423,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index3",
    "title": "Математический Спринт",
    "path": "apps/370/index3.html",
    "launchUrl": "apps/370/index3.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index3.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index3.html"
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
      "file": "apps/370/index3.html",
      "sizeBytes": 38168,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index4",
    "title": "Математический Спринт",
    "path": "apps/370/index4.html",
    "launchUrl": "apps/370/index4.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index4.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index4.html"
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
      "file": "apps/370/index4.html",
      "sizeBytes": 56421,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index5",
    "title": "Математический Спринт",
    "path": "apps/370/index5.html",
    "launchUrl": "apps/370/index5.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index5.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index5.html"
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
      "file": "apps/370/index5.html",
      "sizeBytes": 69484,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index6",
    "title": "Математический Спринт",
    "path": "apps/370/index6.html",
    "launchUrl": "apps/370/index6.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index6.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index6.html"
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
      "file": "apps/370/index6.html",
      "sizeBytes": 69484,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": "370-index5",
    "hasRealScreenshot": true,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index7",
    "title": "Математический Спринт",
    "path": "apps/370/index7.html",
    "launchUrl": "apps/370/index7.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index7.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index7.html"
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
      "file": "apps/370/index7.html",
      "sizeBytes": 73947,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index8",
    "title": "Математический Спринт — Улучшенная версия",
    "path": "apps/370/index8.html",
    "launchUrl": "apps/370/index8.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index8.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index8.html"
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
      "file": "apps/370/index8.html",
      "sizeBytes": 82197,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": "370-index10",
    "hasRealScreenshot": true,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index9",
    "title": "Математический Спринт — Исправленная версия",
    "path": "apps/370/index9.html",
    "launchUrl": "apps/370/index9.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
    "icon": "🧠",
    "source": "hub-builder",
    "versionOf": "370-index10",
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
      "launch": "apps/370/index9.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index9.html"
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
      "file": "apps/370/index9.html",
      "sizeBytes": 66496,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "370-index10",
    "title": "Математический Спринт — Улучшенная версия",
    "path": "apps/370/index10.html",
    "launchUrl": "apps/370/index10.html",
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
    "imageUrl": "apps/370/stilist_370_1.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/370/stilist_370_1.jpg",
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
      "launch": "apps/370/index10.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/370/index10.html"
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
      "file": "apps/370/index10.html",
      "sizeBytes": 82197,
      "screenshots": [
        "apps/370/stilist_370_1.jpg",
        "apps/370/stilist_370_10.jpg",
        "apps/370/stilist_370_2.jpg",
        "apps/370/stilist_370_3.jpg",
        "apps/370/stilist_370_4.jpg",
        "apps/370/stilist_370_5.jpg",
        "apps/370/stilist_370_6.jpg",
        "apps/370/stilist_370_7.jpg",
        "apps/370/stilist_370_8.jpg",
        "apps/370/stilist_370_9.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "400",
    "title": "Церковный симулятор — полный",
    "path": "apps/400/index.html",
    "launchUrl": "apps/400/index.html",
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
    "imageUrl": "apps/400/stilist_400.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/400/stilist_400.jpg",
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
      "launch": "apps/400/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/400/index.html"
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
      "file": "apps/400/index.html",
      "sizeBytes": 38931,
      "screenshots": [
        "apps/400/stilist_400.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "400-index2",
    "title": "Церковный симулятор — полный",
    "path": "apps/400/index2.html",
    "launchUrl": "apps/400/index2.html",
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
    "imageUrl": "apps/400/stilist_400.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/400/stilist_400.jpg",
    "icon": "⛪",
    "source": "hub-builder",
    "versionOf": "400",
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
      "launch": "apps/400/index2.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/400/index2.html"
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
      "file": "apps/400/index2.html",
      "sizeBytes": 38935,
      "screenshots": [
        "apps/400/stilist_400.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "3501",
    "title": "Калькулятор 6 полиграфических операций",
    "path": "archive/3501/index.html",
    "launchUrl": "archive/3501/index.html",
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
    "imageUrl": "archive/3501/stilist_3501.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/archive/3501/stilist_3501.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": "3502",
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
      "launch": "archive/3501/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/3501/index.html"
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
      "file": "archive/3501/index.html",
      "sizeBytes": 29482,
      "screenshots": [
        "archive/3501/stilist_3501.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "index5",
    "title": "Текст-Трансформер",
    "path": "apps/index5/index.html",
    "launchUrl": "apps/index5/index.html",
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
      "launch": "apps/index5/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index5/index.html"
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
      "file": "apps/index5/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index6",
    "title": "Торговый Терминал 1984",
    "path": "archive/index6/index.html",
    "launchUrl": "archive/index6/index.html",
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
    "versionOf": "index11",
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
      "launch": "archive/index6/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index6/index.html"
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
      "file": "archive/index6/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot; category needs manual review"
  },
  {
    "id": "index11",
    "title": "Торговый Терминал 1984",
    "path": "apps/index11/index.html",
    "launchUrl": "apps/index11/index.html",
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
      "launch": "apps/index11/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index11/index.html"
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
      "file": "apps/index11/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index14",
    "title": "Retro Platformer",
    "path": "apps/index14/index.html",
    "launchUrl": "apps/index14/index.html",
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
      "launch": "apps/index14/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index14/index.html"
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
      "file": "apps/index14/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index18",
    "title": "Станок крафта - POE Style",
    "path": "apps/index18/index.html",
    "launchUrl": "apps/index18/index.html",
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
      "launch": "apps/index18/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index18/index.html"
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
      "file": "apps/index18/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index19",
    "title": "Геймбой Эмулятор",
    "path": "archive/index19/index.html",
    "launchUrl": "archive/index19/index.html",
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
    "versionOf": "index22",
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
      "launch": "archive/index19/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index19/index.html"
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
      "file": "archive/index19/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index21",
    "title": "Геймбой Эмулятор",
    "path": "archive/index21/index.html",
    "launchUrl": "archive/index21/index.html",
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
    "versionOf": "index22",
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
      "launch": "archive/index21/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index21/index.html"
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
      "file": "archive/index21/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index22",
    "title": "Геймбой Эмулятор PRO",
    "path": "apps/index22/index.html",
    "launchUrl": "apps/index22/index.html",
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
      "launch": "apps/index22/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index22/index.html"
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
      "file": "apps/index22/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index23",
    "title": "Память: Цвет и Число",
    "path": "apps/index23/index.html",
    "launchUrl": "apps/index23/index.html",
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
      "launch": "apps/index23/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index23/index.html"
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
      "file": "apps/index23/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index24",
    "title": "Супер Память: 50 раундов",
    "path": "archive/index24/index.html",
    "launchUrl": "archive/index24/index.html",
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
    "versionOf": "index25",
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
      "launch": "archive/index24/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index24/index.html"
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
      "file": "archive/index24/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot; category needs manual review"
  },
  {
    "id": "index25",
    "title": "Супер Память: 50 раундов",
    "path": "apps/index25/index.html",
    "launchUrl": "apps/index25/index.html",
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
      "launch": "apps/index25/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index25/index.html"
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
      "file": "apps/index25/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index27",
    "title": "Музыкальные аккорды - Игра и обучение",
    "path": "apps/index27/index.html",
    "launchUrl": "apps/index27/index.html",
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
      "launch": "apps/index27/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index27/index.html"
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
      "file": "apps/index27/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index28",
    "title": "Музыкальная Война",
    "path": "apps/index28/index.html",
    "launchUrl": "apps/index28/index.html",
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
      "launch": "apps/index28/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index28/index.html"
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
      "file": "apps/index28/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index29",
    "title": "Музыкальная Война (Упрощенная)",
    "path": "archive/index29/index.html",
    "launchUrl": "archive/index29/index.html",
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
    "versionOf": "index28",
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
      "launch": "archive/index29/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index29/index.html"
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
      "file": "archive/index29/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index34",
    "title": "Догонялки",
    "path": "apps/index34/index.html",
    "launchUrl": "apps/index34/index.html",
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
      "launch": "apps/index34/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index34/index.html"
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
      "file": "apps/index34/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index35",
    "title": "Догонялки PRO",
    "path": "apps/index35/index.html",
    "launchUrl": "apps/index35/index.html",
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
      "launch": "apps/index35/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index35/index.html"
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
      "file": "apps/index35/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index36",
    "title": "Космический самолётик",
    "path": "archive/index36/index.html",
    "launchUrl": "archive/index36/index.html",
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
    "versionOf": "index37",
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
      "launch": "archive/index36/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index36/index.html"
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
      "file": "archive/index36/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index37",
    "title": "Космический самолётик",
    "path": "apps/index37/index.html",
    "launchUrl": "apps/index37/index.html",
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
      "launch": "apps/index37/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index37/index.html"
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
      "file": "apps/index37/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index40",
    "title": "Космический выживальщик",
    "path": "apps/index40/index.html",
    "launchUrl": "apps/index40/index.html",
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
      "launch": "apps/index40/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index40/index.html"
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
      "file": "apps/index40/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index41",
    "title": "Быстрые заказы - Кафе-симулятор",
    "path": "apps/index41/index.html",
    "launchUrl": "apps/index41/index.html",
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
      "launch": "apps/index41/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index41/index.html"
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
      "file": "apps/index41/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index43",
    "title": "Городское Кафе - Кухонный симулятор",
    "path": "apps/index43/index.html",
    "launchUrl": "apps/index43/index.html",
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
      "launch": "apps/index43/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index43/index.html"
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
      "file": "apps/index43/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index47",
    "title": "Торговая Империя",
    "path": "apps/index47/index.html",
    "launchUrl": "apps/index47/index.html",
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
      "launch": "apps/index47/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index47/index.html"
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
      "file": "apps/index47/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index52",
    "title": "Tower Defense Spray Mechanic",
    "path": "apps/index52/index.html",
    "launchUrl": "apps/index52/index.html",
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
      "launch": "apps/index52/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index52/index.html"
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
      "file": "apps/index52/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index60",
    "title": "Castle Wars",
    "path": "apps/index60/index.html",
    "launchUrl": "apps/index60/index.html",
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
      "launch": "apps/index60/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index60/index.html"
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
      "file": "apps/index60/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index65",
    "title": "Custom Tower Defense",
    "path": "apps/index65/index.html",
    "launchUrl": "apps/index65/index.html",
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
      "launch": "apps/index65/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index65/index.html"
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
      "file": "apps/index65/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index66",
    "title": "TD — Кастомные башни из расходников",
    "path": "archive/index66/index.html",
    "launchUrl": "archive/index66/index.html",
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
    "versionOf": "index68",
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
      "launch": "archive/index66/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index66/index.html"
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
      "file": "archive/index66/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index67",
    "title": "TD — Кастомные башни из расходников",
    "path": "archive/index67/index.html",
    "launchUrl": "archive/index67/index.html",
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
    "versionOf": "index68",
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
      "launch": "archive/index67/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index67/index.html"
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
      "file": "archive/index67/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index68",
    "title": "TD — Кастомные башни из расходников (Pro)",
    "path": "apps/index68/index.html",
    "launchUrl": "apps/index68/index.html",
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
      "launch": "apps/index68/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index68/index.html"
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
      "file": "apps/index68/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index69",
    "title": "TD — Кастомные башни из расходников (Pro) — Исправлено",
    "path": "apps/index69/index.html",
    "launchUrl": "apps/index69/index.html",
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
      "launch": "apps/index69/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index69/index.html"
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
      "file": "apps/index69/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index71",
    "title": "RPG Adventure",
    "path": "apps/index71/index.html",
    "launchUrl": "apps/index71/index.html",
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
      "launch": "apps/index71/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index71/index.html"
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
      "file": "apps/index71/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index86",
    "title": "File Analyzer Pro",
    "path": "archive/index86/index.html",
    "launchUrl": "archive/index86/index.html",
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
    "versionOf": "index90",
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
      "launch": "archive/index86/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index86/index.html"
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
      "file": "archive/index86/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index87",
    "title": "File Analyzer Pro",
    "path": "archive/index87/index.html",
    "launchUrl": "archive/index87/index.html",
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
    "versionOf": "index90",
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
      "launch": "archive/index87/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index87/index.html"
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
      "file": "archive/index87/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index89",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index89/index.html",
    "launchUrl": "archive/index89/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index89/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index89/index.html"
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
      "file": "archive/index89/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index91",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index91/index.html",
    "launchUrl": "archive/index91/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index91/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index91/index.html"
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
      "file": "archive/index91/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index92",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index92/index.html",
    "launchUrl": "archive/index92/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index92/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index92/index.html"
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
      "file": "archive/index92/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index93",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index93/index.html",
    "launchUrl": "archive/index93/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index93/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index93/index.html"
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
      "file": "archive/index93/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index94",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index94/index.html",
    "launchUrl": "archive/index94/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index94/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index94/index.html"
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
      "file": "archive/index94/index.html",
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
    },
    "canonicalOf": "index93",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index95",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index95/index.html",
    "launchUrl": "archive/index95/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index95/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index95/index.html"
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
      "file": "archive/index95/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index96",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index96/index.html",
    "launchUrl": "archive/index96/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index96/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index96/index.html"
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
      "file": "archive/index96/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot; category needs manual review"
  },
  {
    "id": "index97",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index97/index.html",
    "launchUrl": "archive/index97/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index97/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index97/index.html"
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
      "file": "archive/index97/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index98",
    "title": "Калькулятор стоимости бумаги",
    "path": "apps/index98/index.html",
    "launchUrl": "apps/index98/index.html",
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
      "launch": "apps/index98/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index98/index.html"
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
      "file": "apps/index98/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index99",
    "title": "Калькулятор стоимости бумаги",
    "path": "archive/index99/index.html",
    "launchUrl": "archive/index99/index.html",
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
    "versionOf": "index98",
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
      "launch": "archive/index99/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index99/index.html"
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
      "file": "archive/index99/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot; category needs manual review"
  },
  {
    "id": "index100",
    "title": "Дерево навыков - Запоминалка",
    "path": "apps/index100/index.html",
    "launchUrl": "apps/index100/index.html",
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
      "launch": "apps/index100/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index100/index.html"
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
      "file": "apps/index100/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index104",
    "title": "RPG Dungeon Simulator deepseek",
    "path": "apps/index104/index.html",
    "launchUrl": "apps/index104/index.html",
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
      "launch": "apps/index104/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index104/index.html"
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
      "file": "apps/index104/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index105",
    "title": "GPT - IDLE RPG Dungeon — Переработанная версия - GPT",
    "path": "apps/index105/index.html",
    "launchUrl": "apps/index105/index.html",
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
      "launch": "apps/index105/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index105/index.html"
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
      "file": "apps/index105/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index106",
    "title": "IDLE RPG Dungeon - DEEPSEEK",
    "path": "apps/index106/index.html",
    "launchUrl": "apps/index106/index.html",
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
      "launch": "apps/index106/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index106/index.html"
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
      "file": "apps/index106/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index107",
    "title": "GPT IDLE RPG Dungeon",
    "path": "apps/index107/index.html",
    "launchUrl": "apps/index107/index.html",
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
      "launch": "apps/index107/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index107/index.html"
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
      "file": "apps/index107/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index108",
    "title": "IDLE RPG Dungeon - deep",
    "path": "apps/index108/index.html",
    "launchUrl": "apps/index108/index.html",
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
      "launch": "apps/index108/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index108/index.html"
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
      "file": "apps/index108/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index109",
    "title": "GPT IDLE RPG Dungeon — Обновлённая версия (маг: % урон, бафы, без лимита уровней HP/MP/DMG)",
    "path": "apps/index109/index.html",
    "launchUrl": "apps/index109/index.html",
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
      "launch": "apps/index109/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index109/index.html"
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
      "file": "apps/index109/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index110",
    "title": "IDLE RPG Dungeon — Исправленная версия",
    "path": "apps/index110/index.html",
    "launchUrl": "apps/index110/index.html",
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
      "launch": "apps/index110/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index110/index.html"
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
      "file": "apps/index110/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index111",
    "title": "IDLE RPG Dungeon — Исправленная версия",
    "path": "archive/index111/index.html",
    "launchUrl": "archive/index111/index.html",
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
    "versionOf": "index110",
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
      "launch": "archive/index111/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index111/index.html"
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
      "file": "archive/index111/index.html",
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
    },
    "canonicalOf": "index110",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index112",
    "title": "IDLE RPG Dungeon",
    "path": "apps/index112/index.html",
    "launchUrl": "apps/index112/index.html",
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
      "launch": "apps/index112/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index112/index.html"
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
      "file": "apps/index112/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index113",
    "title": "Исправленный IDLE RPG Dungeon — единый файл",
    "path": "apps/index113/index.html",
    "launchUrl": "apps/index113/index.html",
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
      "launch": "apps/index113/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index113/index.html"
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
      "file": "apps/index113/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index114",
    "title": "RPG Dungeon Simulator",
    "path": "archive/index114/index.html",
    "launchUrl": "archive/index114/index.html",
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
    "versionOf": "index115",
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
      "launch": "archive/index114/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index114/index.html"
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
      "file": "archive/index114/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index115",
    "title": "RPG Dungeon Simulator",
    "path": "apps/index115/index.html",
    "launchUrl": "apps/index115/index.html",
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
      "launch": "apps/index115/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index115/index.html"
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
      "file": "apps/index115/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index116",
    "title": "Церковный симулятор — полный",
    "path": "archive/index116/index.html",
    "launchUrl": "archive/index116/index.html",
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
    "versionOf": "400",
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
      "launch": "archive/index116/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index116/index.html"
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
      "file": "archive/index116/index.html",
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
    },
    "canonicalOf": "400",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index117",
    "title": "Церковный симулятор — профессиональная версия",
    "path": "apps/index117/index.html",
    "launchUrl": "apps/index117/index.html",
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
      "launch": "apps/index117/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index117/index.html"
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
      "file": "apps/index117/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index118",
    "title": "Церковный симулятор — переработка (полный файл)",
    "path": "apps/index118/index.html",
    "launchUrl": "apps/index118/index.html",
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
      "launch": "apps/index118/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index118/index.html"
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
      "file": "apps/index118/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index119",
    "title": "Церковный симулятор",
    "path": "archive/index119/index.html",
    "launchUrl": "archive/index119/index.html",
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
    "versionOf": "index127",
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
      "launch": "archive/index119/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index119/index.html"
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
      "file": "archive/index119/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index120",
    "title": "Церковный симулятор",
    "path": "archive/index120/index.html",
    "launchUrl": "archive/index120/index.html",
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
    "versionOf": "index127",
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
      "launch": "archive/index120/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index120/index.html"
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
      "file": "archive/index120/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index121",
    "title": "Церковный симулятор",
    "path": "archive/index121/index.html",
    "launchUrl": "archive/index121/index.html",
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
    "versionOf": "index127",
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
      "launch": "archive/index121/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index121/index.html"
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
      "file": "archive/index121/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index122",
    "title": "Церковный симулятор",
    "path": "archive/index122/index.html",
    "launchUrl": "archive/index122/index.html",
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
    "versionOf": "index127",
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
      "launch": "archive/index122/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index122/index.html"
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
      "file": "archive/index122/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index123",
    "title": "Воскресное служение",
    "path": "apps/index123/index.html",
    "launchUrl": "apps/index123/index.html",
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
      "launch": "apps/index123/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index123/index.html"
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
      "file": "apps/index123/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index124",
    "title": "Церковный Tower Defense",
    "path": "apps/index124/index.html",
    "launchUrl": "apps/index124/index.html",
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
      "launch": "apps/index124/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index124/index.html"
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
      "file": "apps/index124/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index125",
    "title": "Церковный Симулятор",
    "path": "archive/index125/index.html",
    "launchUrl": "archive/index125/index.html",
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
    "versionOf": "index127",
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
      "launch": "archive/index125/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index125/index.html"
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
      "file": "archive/index125/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index126",
    "title": "Церковный Симулятор 2025",
    "path": "apps/index126/index.html",
    "launchUrl": "apps/index126/index.html",
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
      "launch": "apps/index126/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index126/index.html"
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
      "file": "apps/index126/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index127",
    "title": "Церковный Симулятор",
    "path": "apps/index127/index.html",
    "launchUrl": "apps/index127/index.html",
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
      "launch": "apps/index127/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index127/index.html"
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
      "file": "apps/index127/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index128",
    "title": "Вселенная Правил",
    "path": "apps/index128/index.html",
    "launchUrl": "apps/index128/index.html",
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
      "launch": "apps/index128/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index128/index.html"
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
      "file": "apps/index128/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index129",
    "title": "Модульная Арена",
    "path": "apps/index129/index.html",
    "launchUrl": "apps/index129/index.html",
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
      "launch": "apps/index129/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index129/index.html"
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
      "file": "apps/index129/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index130",
    "title": "Мухобойка",
    "path": "apps/index130/index.html",
    "launchUrl": "apps/index130/index.html",
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
      "launch": "apps/index130/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index130/index.html"
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
      "file": "apps/index130/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index131",
    "title": "Идл-Типография",
    "path": "apps/index131/index.html",
    "launchUrl": "apps/index131/index.html",
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
      "launch": "apps/index131/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index131/index.html"
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
      "file": "apps/index131/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index132",
    "title": "Бизнес-Типография",
    "path": "archive/index132/index.html",
    "launchUrl": "archive/index132/index.html",
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
    "versionOf": "index139",
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
      "launch": "archive/index132/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index132/index.html"
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
      "file": "archive/index132/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index133",
    "title": "Бизнес-Типография",
    "path": "archive/index133/index.html",
    "launchUrl": "archive/index133/index.html",
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
    "versionOf": "index139",
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
      "launch": "archive/index133/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index133/index.html"
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
      "file": "archive/index133/index.html",
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
    },
    "canonicalOf": "index132",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index134",
    "title": "Типография Бизнес",
    "path": "archive/index134/index.html",
    "launchUrl": "archive/index134/index.html",
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
    "versionOf": "index139",
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
      "launch": "archive/index134/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index134/index.html"
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
      "file": "archive/index134/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index135",
    "title": "Типография Pro",
    "path": "archive/index135/index.html",
    "launchUrl": "archive/index135/index.html",
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
    "versionOf": "index139",
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
      "launch": "archive/index135/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index135/index.html"
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
      "file": "archive/index135/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index136",
    "title": "Типография Pro",
    "path": "archive/index136/index.html",
    "launchUrl": "archive/index136/index.html",
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
    "versionOf": "index139",
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
      "launch": "archive/index136/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index136/index.html"
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
      "file": "archive/index136/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index137",
    "title": "Бизнес-Типография",
    "path": "archive/index137/index.html",
    "launchUrl": "archive/index137/index.html",
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
    "versionOf": "index139",
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
      "launch": "archive/index137/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index137/index.html"
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
      "file": "archive/index137/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index138",
    "title": "Бизнес-Типография",
    "path": "archive/index138/index.html",
    "launchUrl": "archive/index138/index.html",
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
    "versionOf": "index139",
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
      "launch": "archive/index138/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index138/index.html"
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
      "file": "archive/index138/index.html",
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
    },
    "canonicalOf": "index137",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index139",
    "title": "Типография Бизнес",
    "path": "apps/index139/index.html",
    "launchUrl": "apps/index139/index.html",
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
      "launch": "apps/index139/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index139/index.html"
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
      "file": "apps/index139/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index140",
    "title": "Типография Бизнес — Игра",
    "path": "apps/index140/index.html",
    "launchUrl": "apps/index140/index.html",
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
      "launch": "apps/index140/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index140/index.html"
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
      "file": "apps/index140/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index142",
    "title": "Типография: Бизнес-симулятор 142-DEEP",
    "path": "apps/index142/index.html",
    "launchUrl": "apps/index142/index.html",
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
      "launch": "apps/index142/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index142/index.html"
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
      "file": "apps/index142/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index143",
    "title": "Типография — Бизнес-симулятор",
    "path": "archive/index143/index.html",
    "launchUrl": "archive/index143/index.html",
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
    "versionOf": "index147",
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
      "launch": "archive/index143/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index143/index.html"
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
      "file": "archive/index143/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index145",
    "title": "Типография — Бизнес-симулятор",
    "path": "archive/index145/index.html",
    "launchUrl": "archive/index145/index.html",
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
    "versionOf": "index147",
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
      "launch": "archive/index145/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index145/index.html"
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
      "file": "archive/index145/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index146",
    "title": "Типография — Бизнес-симулятор",
    "path": "archive/index146/index.html",
    "launchUrl": "archive/index146/index.html",
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
    "versionOf": "index147",
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
      "launch": "archive/index146/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index146/index.html"
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
      "file": "archive/index146/index.html",
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
    },
    "canonicalOf": "index145",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index147",
    "title": "Типография — Бизнес-симулятор",
    "path": "apps/index147/index.html",
    "launchUrl": "apps/index147/index.html",
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
      "launch": "apps/index147/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index147/index.html"
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
      "file": "apps/index147/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index148",
    "title": "КОСМИЧЕСКИЕ РЕЙНДЖЕРЫ",
    "path": "apps/index148/index.html",
    "launchUrl": "apps/index148/index.html",
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
      "launch": "apps/index148/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index148/index.html"
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
      "file": "apps/index148/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index150",
    "title": "Типографский Магнат",
    "path": "archive/index150/index.html",
    "launchUrl": "archive/index150/index.html",
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
    "versionOf": "index152",
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
      "launch": "archive/index150/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index150/index.html"
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
      "file": "archive/index150/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index151",
    "title": "Типографский Магнат",
    "path": "archive/index151/index.html",
    "launchUrl": "archive/index151/index.html",
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
    "versionOf": "index152",
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
      "launch": "archive/index151/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index151/index.html"
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
      "file": "archive/index151/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index152",
    "title": "Типографский Магнат",
    "path": "apps/index152/index.html",
    "launchUrl": "apps/index152/index.html",
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
      "launch": "apps/index152/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index152/index.html"
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
      "file": "apps/index152/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index154",
    "title": "Tower Defense Game",
    "path": "apps/index154/index.html",
    "launchUrl": "apps/index154/index.html",
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
      "launch": "apps/index154/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index154/index.html"
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
      "file": "apps/index154/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index200",
    "title": "Типографский Магнат",
    "path": "archive/index200/index.html",
    "launchUrl": "archive/index200/index.html",
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
    "versionOf": "index152",
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
      "launch": "archive/index200/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index200/index.html"
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
      "file": "archive/index200/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index500",
    "title": "Типографский Магнат",
    "path": "archive/index500/index.html",
    "launchUrl": "archive/index500/index.html",
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
    "versionOf": "index152",
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
      "launch": "archive/index500/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index500/index.html"
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
      "file": "archive/index500/index.html",
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
    },
    "canonicalOf": "index200",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index501",
    "title": "Типографский Магнат",
    "path": "archive/index501/index.html",
    "launchUrl": "archive/index501/index.html",
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
    "versionOf": "index152",
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
      "launch": "archive/index501/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index501/index.html"
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
      "file": "archive/index501/index.html",
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
    },
    "canonicalOf": "index200",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "80",
    "title": "Типография - Бизнес симулятор",
    "path": "archive/80/index.html",
    "launchUrl": "archive/80/index.html",
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
    "imageUrl": "archive/80/stilist_80.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/archive/80/stilist_80.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": "81",
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
      "launch": "archive/80/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/80/index.html"
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
      "file": "archive/80/index.html",
      "sizeBytes": 8528,
      "screenshots": [
        "archive/80/stilist_80.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
  },
  {
    "id": "81",
    "title": "Типография - Бизнес симулятор",
    "path": "apps/81/index.html",
    "launchUrl": "apps/81/index.html",
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
    "imageUrl": "apps/81/stilist_81.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/81/stilist_81.jpg",
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
      "launch": "apps/81/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/81/index.html"
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
      "file": "apps/81/index.html",
      "sizeBytes": 11243,
      "screenshots": [
        "apps/81/stilist_81.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "101",
    "title": "Simple Clicker RPG",
    "path": "apps/101/index.html",
    "launchUrl": "apps/101/index.html",
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
    "imageUrl": "apps/101/stilist_101.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/101/stilist_101.jpg",
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
      "launch": "apps/101/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/101/index.html"
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
      "file": "apps/101/index.html",
      "sizeBytes": 5372,
      "screenshots": [
        "apps/101/stilist_101.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "102",
    "title": "Idle Miner - Шахтёрский симулятор",
    "path": "apps/102/index.html",
    "launchUrl": "apps/102/index.html",
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
    "imageUrl": "apps/102/stilist_102.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/102/stilist_102.jpg",
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
      "launch": "apps/102/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/102/index.html"
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
      "file": "apps/102/index.html",
      "sizeBytes": 13935,
      "screenshots": [
        "apps/102/stilist_102.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": null
  },
  {
    "id": "350-index1",
    "title": "Конвертер мм ↔ пиксели",
    "path": "apps/350/index1.html",
    "launchUrl": "apps/350/index1.html",
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
    "imageUrl": "apps/350/preview.jpg",
    "fallbackImageUrl": "https://raw.githubusercontent.com/sunpole/stilist/refs/heads/main/apps/350/preview.jpg",
    "icon": "🖨️",
    "source": "hub-builder",
    "versionOf": "350",
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
      "launch": "apps/350/index1.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/350/index1.html"
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
      "file": "apps/350/index1.html",
      "sizeBytes": 11394,
      "screenshots": [
        "apps/350/preview.jpg"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": true,
    "needsReviewReason": "older or alternative version; confirm canonical project"
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index2",
    "title": "STYLIST | Демо стилей",
    "path": "apps/index2/index.html",
    "launchUrl": "apps/index2/index.html",
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
      "launch": "apps/index2/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index2/index.html"
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
      "file": "apps/index2/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index3",
    "title": "STYLIST | Демо выпадающих списков",
    "path": "apps/index3/index.html",
    "launchUrl": "apps/index3/index.html",
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
      "launch": "apps/index3/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index3/index.html"
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
      "file": "apps/index3/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index4",
    "title": "Конструктор стилей | Выпадающий список",
    "path": "apps/index4/index.html",
    "launchUrl": "apps/index4/index.html",
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
      "launch": "apps/index4/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index4/index.html"
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
      "file": "apps/index4/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index7",
    "title": "Торговый Терминал 1984",
    "path": "archive/index7/index.html",
    "launchUrl": "archive/index7/index.html",
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
    "versionOf": "index11",
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
      "launch": "archive/index7/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index7/index.html"
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
      "file": "archive/index7/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index8",
    "title": "Торговый Терминал 1984",
    "path": "archive/index8/index.html",
    "launchUrl": "archive/index8/index.html",
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
    "versionOf": "index11",
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
      "launch": "archive/index8/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index8/index.html"
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
      "file": "archive/index8/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index9",
    "title": "Торговый Терминал 1984",
    "path": "archive/index9/index.html",
    "launchUrl": "archive/index9/index.html",
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
    "versionOf": "index11",
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
      "launch": "archive/index9/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index9/index.html"
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
      "file": "archive/index9/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index12",
    "title": "Буквомёт",
    "path": "apps/index12/index.html",
    "launchUrl": "apps/index12/index.html",
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
      "launch": "apps/index12/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index12/index.html"
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
      "file": "apps/index12/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index13",
    "title": "Аудио-нарезчик",
    "path": "apps/index13/index.html",
    "launchUrl": "apps/index13/index.html",
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
      "launch": "apps/index13/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index13/index.html"
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
      "file": "apps/index13/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index15",
    "title": "Обменник валют - POE Style",
    "path": "apps/index15/index.html",
    "launchUrl": "apps/index15/index.html",
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
      "launch": "apps/index15/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index15/index.html"
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
      "file": "apps/index15/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index16",
    "title": "Генератор наград - POE Style",
    "path": "apps/index16/index.html",
    "launchUrl": "apps/index16/index.html",
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
      "launch": "apps/index16/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index16/index.html"
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
      "file": "apps/index16/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index17",
    "title": "Буквомёт",
    "path": "apps/index17/index.html",
    "launchUrl": "apps/index17/index.html",
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
      "launch": "apps/index17/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index17/index.html"
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
      "file": "apps/index17/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index20",
    "title": "PDF Info Viewer Pro",
    "path": "apps/index20/index.html",
    "launchUrl": "apps/index20/index.html",
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
      "launch": "apps/index20/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index20/index.html"
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
      "file": "apps/index20/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index26",
    "title": "Логическая игра \"Запомни последовательность\"",
    "path": "apps/index26/index.html",
    "launchUrl": "apps/index26/index.html",
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
      "launch": "apps/index26/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index26/index.html"
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
      "file": "apps/index26/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index30",
    "title": "Семейная игра: 5 элементов",
    "path": "apps/index30/index.html",
    "launchUrl": "apps/index30/index.html",
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
      "launch": "apps/index30/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index30/index.html"
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
      "file": "apps/index30/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index31",
    "title": "5 Элементов: Семейная версия",
    "path": "apps/index31/index.html",
    "launchUrl": "apps/index31/index.html",
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
      "launch": "apps/index31/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index31/index.html"
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
      "file": "apps/index31/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index32",
    "title": "Угадай ноту",
    "path": "apps/index32/index.html",
    "launchUrl": "apps/index32/index.html",
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
      "launch": "apps/index32/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index32/index.html"
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
      "file": "apps/index32/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index33",
    "title": "Веб-синтезатор звуков",
    "path": "apps/index33/index.html",
    "launchUrl": "apps/index33/index.html",
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
      "launch": "apps/index33/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index33/index.html"
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
      "file": "apps/index33/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index38",
    "title": "Tower Defense Spray Mechanic",
    "path": "archive/index38/index.html",
    "launchUrl": "archive/index38/index.html",
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
    "versionOf": "index52",
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
      "launch": "archive/index38/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index38/index.html"
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
      "file": "archive/index38/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index39",
    "title": "Угадай текст наоборот",
    "path": "apps/index39/index.html",
    "launchUrl": "apps/index39/index.html",
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
      "launch": "apps/index39/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index39/index.html"
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
      "file": "apps/index39/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index42",
    "title": "Кухня Хаоса - Кафе-симулятор",
    "path": "apps/index42/index.html",
    "launchUrl": "apps/index42/index.html",
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
      "launch": "apps/index42/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index42/index.html"
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
      "file": "apps/index42/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index44",
    "title": "Memori Chests",
    "path": "apps/index44/index.html",
    "launchUrl": "apps/index44/index.html",
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
      "launch": "apps/index44/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index44/index.html"
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
      "file": "apps/index44/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index45",
    "title": "Сундучный Магнат",
    "path": "apps/index45/index.html",
    "launchUrl": "apps/index45/index.html",
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
      "launch": "apps/index45/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index45/index.html"
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
      "file": "apps/index45/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index46",
    "title": "Торговая Империя",
    "path": "archive/index46/index.html",
    "launchUrl": "archive/index46/index.html",
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
    "versionOf": "index47",
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
      "launch": "archive/index46/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index46/index.html"
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
      "file": "archive/index46/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index48",
    "title": "Админка TD Game",
    "path": "apps/index48/index.html",
    "launchUrl": "apps/index48/index.html",
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
      "launch": "apps/index48/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index48/index.html"
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
      "file": "apps/index48/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index49",
    "title": "JSON Table Editor",
    "path": "apps/index49/index.html",
    "launchUrl": "apps/index49/index.html",
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
      "launch": "apps/index49/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index49/index.html"
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
      "file": "apps/index49/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index50",
    "title": "JSON Admin Panel",
    "path": "apps/index50/index.html",
    "launchUrl": "apps/index50/index.html",
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
      "launch": "apps/index50/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index50/index.html"
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
      "file": "apps/index50/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index51",
    "title": "JSON Admin Panel",
    "path": "apps/index51/index.html",
    "launchUrl": "apps/index51/index.html",
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
      "launch": "apps/index51/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index51/index.html"
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
      "file": "apps/index51/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index53",
    "title": "Огненный снаряд",
    "path": "apps/index53/index.html",
    "launchUrl": "apps/index53/index.html",
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
      "launch": "apps/index53/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index53/index.html"
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
      "file": "apps/index53/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index54",
    "title": "Реалистичный огненный снаряд",
    "path": "apps/index54/index.html",
    "launchUrl": "apps/index54/index.html",
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
      "launch": "apps/index54/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index54/index.html"
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
      "file": "apps/index54/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index55",
    "title": "Язык пламени",
    "path": "apps/index55/index.html",
    "launchUrl": "apps/index55/index.html",
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
      "launch": "apps/index55/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index55/index.html"
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
      "file": "apps/index55/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index56",
    "title": "Огненная пушка",
    "path": "apps/index56/index.html",
    "launchUrl": "apps/index56/index.html",
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
      "launch": "apps/index56/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index56/index.html"
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
      "file": "apps/index56/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index57",
    "title": "Огненная пушка с эффектами",
    "path": "apps/index57/index.html",
    "launchUrl": "apps/index57/index.html",
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
      "launch": "apps/index57/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index57/index.html"
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
      "file": "apps/index57/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index58",
    "title": "Tower Defense Water Map",
    "path": "apps/index58/index.html",
    "launchUrl": "apps/index58/index.html",
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
      "launch": "apps/index58/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index58/index.html"
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
      "file": "apps/index58/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index59",
    "title": "Tower Defense (PixiJS)",
    "path": "apps/index59/index.html",
    "launchUrl": "apps/index59/index.html",
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
      "launch": "apps/index59/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index59/index.html"
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
      "file": "apps/index59/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index61",
    "title": "Крестики-нолики (P2P)",
    "path": "apps/index61/index.html",
    "launchUrl": "apps/index61/index.html",
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
      "launch": "apps/index61/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index61/index.html"
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
      "file": "apps/index61/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index62",
    "title": "P2P Викторина (4 игрока)",
    "path": "apps/index62/index.html",
    "launchUrl": "apps/index62/index.html",
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
      "launch": "apps/index62/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index62/index.html"
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
      "file": "apps/index62/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index63",
    "title": "P2P Монополия (4 игрока)",
    "path": "apps/index63/index.html",
    "launchUrl": "apps/index63/index.html",
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
      "launch": "apps/index63/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index63/index.html"
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
      "file": "apps/index63/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index64",
    "title": "P2P Подключение (4 игрока)",
    "path": "apps/index64/index.html",
    "launchUrl": "apps/index64/index.html",
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
      "launch": "apps/index64/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index64/index.html"
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
      "file": "apps/index64/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index88",
    "title": "File Analyzer Pro",
    "path": "archive/index88/index.html",
    "launchUrl": "archive/index88/index.html",
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
    "versionOf": "index90",
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
      "launch": "archive/index88/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index88/index.html"
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
      "file": "archive/index88/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "index101",
    "title": "Типография Idle",
    "path": "apps/index101/index.html",
    "launchUrl": "apps/index101/index.html",
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
      "launch": "apps/index101/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index101/index.html"
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
      "file": "apps/index101/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index102",
    "title": "Симулятор приема маммолога",
    "path": "apps/index102/index.html",
    "launchUrl": "apps/index102/index.html",
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
      "launch": "apps/index102/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index102/index.html"
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
      "file": "apps/index102/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index103",
    "title": "Шапочный Бизнес",
    "path": "apps/index103/index.html",
    "launchUrl": "apps/index103/index.html",
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
      "launch": "apps/index103/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index103/index.html"
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
      "file": "apps/index103/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index141",
    "title": "Игра: Типография",
    "path": "apps/index141/index.html",
    "launchUrl": "apps/index141/index.html",
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
      "launch": "apps/index141/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index141/index.html"
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
      "file": "apps/index141/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index144",
    "title": "Типография: Бизнес-симулятор",
    "path": "apps/index144/index.html",
    "launchUrl": "apps/index144/index.html",
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
      "launch": "apps/index144/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index144/index.html"
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
      "file": "apps/index144/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index149",
    "title": "TD Интерфейс",
    "path": "apps/index149/index.html",
    "launchUrl": "apps/index149/index.html",
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
      "launch": "apps/index149/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index149/index.html"
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
      "file": "apps/index149/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; category needs manual review"
  },
  {
    "id": "index153",
    "title": "Гео-Фонарик",
    "path": "apps/index153/index.html",
    "launchUrl": "apps/index153/index.html",
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
      "launch": "apps/index153/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/index153/index.html"
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
      "file": "apps/index153/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "index502",
    "title": "Типографский Магнат",
    "path": "archive/index502/index.html",
    "launchUrl": "archive/index502/index.html",
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
    "versionOf": "index152",
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
      "launch": "archive/index502/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/index502/index.html"
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
      "file": "archive/index502/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "m100",
    "title": "Миссия: Община - Интерфейс",
    "path": "apps/m100/index.html",
    "launchUrl": "apps/m100/index.html",
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
      "launch": "apps/m100/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/m100/index.html"
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
      "file": "apps/m100/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "925",
    "title": "Расчет параметров рулона",
    "path": "archive/925/index.html",
    "launchUrl": "archive/925/index.html",
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
    "versionOf": "927",
    "related": [
      "924",
      "926",
      "927",
      "921"
    ],
    "isVisible": true,
    "links": {
      "launch": "archive/925/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/925/index.html"
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
      "file": "archive/925/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "926",
    "title": "Расчет параметров рулона",
    "path": "archive/926/index.html",
    "launchUrl": "archive/926/index.html",
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
    "versionOf": "927",
    "related": [
      "924",
      "925",
      "927",
      "921"
    ],
    "isVisible": true,
    "links": {
      "launch": "archive/926/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/926/index.html"
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
      "file": "archive/926/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "albion",
    "title": "Albion Craft Master",
    "path": "archive/albion/index.html",
    "launchUrl": "archive/albion/index.html",
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
    "versionOf": "albion3",
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
      "launch": "archive/albion/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/albion/index.html"
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
      "file": "archive/albion/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "albion2",
    "title": "Albion Craft Master",
    "path": "archive/albion2/index.html",
    "launchUrl": "archive/albion2/index.html",
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
    "versionOf": "albion3",
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
      "launch": "archive/albion2/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/albion2/index.html"
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
      "file": "archive/albion2/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "albion3",
    "title": "Albion Craft Calculator",
    "path": "apps/albion3/index.html",
    "launchUrl": "apps/albion3/index.html",
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
      "launch": "apps/albion3/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/albion3/index.html"
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
      "file": "apps/albion3/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "ru",
    "title": "Алгоритм повелительного наклонения",
    "path": "apps/ru/index.html",
    "launchUrl": "apps/ru/index.html",
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
      "launch": "apps/ru/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/ru/index.html"
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
      "file": "apps/ru/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "win",
    "title": "WebOS - Веб-эмуляция операционной системы",
    "path": "apps/win/index.html",
    "launchUrl": "apps/win/index.html",
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
      "launch": "apps/win/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/win/index.html"
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
      "file": "apps/win/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "82",
    "title": "Типография - Бизнес симулятор",
    "path": "archive/82/index.html",
    "launchUrl": "archive/82/index.html",
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
    "versionOf": "81",
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
      "launch": "archive/82/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/82/index.html"
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
      "file": "archive/82/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "83",
    "title": "Типография - Бизнес симулятор",
    "path": "archive/83/index.html",
    "launchUrl": "archive/83/index.html",
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
    "versionOf": "81",
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
      "launch": "archive/83/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/83/index.html"
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
      "file": "archive/83/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "84",
    "title": "Типография - Бизнес симулятор",
    "path": "archive/84/index.html",
    "launchUrl": "archive/84/index.html",
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
    "versionOf": "81",
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
      "launch": "archive/84/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/84/index.html"
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
      "file": "archive/84/index.html",
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
    },
    "canonicalOf": "83",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "85",
    "title": "Типография - Бизнес симулятор",
    "path": "archive/85/index.html",
    "launchUrl": "archive/85/index.html",
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
    "versionOf": "81",
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
      "launch": "archive/85/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/85/index.html"
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
      "file": "archive/85/index.html",
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
    },
    "canonicalOf": "83",
    "hasRealScreenshot": false,
    "needsReviewReason": "exact duplicate of canonical project; older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "86",
    "title": "Типография - Бизнес симулятор",
    "path": "archive/86/index.html",
    "launchUrl": "archive/86/index.html",
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
    "versionOf": "81",
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
      "launch": "archive/86/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/86/index.html"
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
      "file": "archive/86/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "87",
    "title": "Типография - Бизнес симулятор",
    "path": "archive/87/index.html",
    "launchUrl": "archive/87/index.html",
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
    "versionOf": "81",
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
      "launch": "archive/87/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/87/index.html"
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
      "file": "archive/87/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "920",
    "title": "Simple Mobile Spreadsheet",
    "path": "apps/920/index.html",
    "launchUrl": "apps/920/index.html",
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
      "launch": "apps/920/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/920/index.html"
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
      "file": "apps/920/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "921",
    "title": "Калькулятор параметров рулона фольги",
    "path": "apps/921/index.html",
    "launchUrl": "apps/921/index.html",
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
      "launch": "apps/921/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/921/index.html"
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
      "file": "apps/921/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "922",
    "title": "Калькулятор рулона фольги",
    "path": "apps/922/index.html",
    "launchUrl": "apps/922/index.html",
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
      "launch": "apps/922/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/922/index.html"
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
      "file": "apps/922/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "924",
    "title": "Расчет параметров рулона",
    "path": "archive/924/index.html",
    "launchUrl": "archive/924/index.html",
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
    "versionOf": "927",
    "related": [
      "925",
      "926",
      "927",
      "921"
    ],
    "isVisible": true,
    "links": {
      "launch": "archive/924/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/924/index.html"
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
      "file": "archive/924/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "927",
    "title": "Расчет параметров рулона",
    "path": "apps/927/index.html",
    "launchUrl": "apps/927/index.html",
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
      "launch": "apps/927/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/927/index.html"
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
      "file": "apps/927/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "muz",
    "title": "Полная таблица гамм с пентатоникой",
    "path": "apps/muz/index.html",
    "launchUrl": "apps/muz/index.html",
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
      "launch": "apps/muz/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/muz/index.html"
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
      "file": "apps/muz/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "muz2",
    "title": "Полная таблица гамм с пентатоникой",
    "path": "archive/muz2/index.html",
    "launchUrl": "archive/muz2/index.html",
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
    "versionOf": "muz",
    "related": [
      "muz"
    ],
    "isVisible": true,
    "links": {
      "launch": "archive/muz2/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/archive/muz2/index.html"
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
      "file": "archive/muz2/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "root1",
    "title": "Каскадная клавиатура",
    "path": "apps/root1/index.html",
    "launchUrl": "apps/root1/index.html",
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
      "launch": "apps/root1/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/root1/index.html"
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
      "file": "apps/root1/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "wb",
    "title": "Калькулятор цен для Wildberries (с НДС)",
    "path": "apps/wb/index.html",
    "launchUrl": "apps/wb/index.html",
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
      "launch": "apps/wb/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/wb/index.html"
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
      "file": "apps/wb/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot"
  },
  {
    "id": "wb-index2",
    "title": "Калькулятор WB",
    "path": "apps/wb/index2.html",
    "launchUrl": "apps/wb/index2.html",
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
    "versionOf": "wb",
    "related": [
      "wb-index3",
      "wb"
    ],
    "isVisible": true,
    "links": {
      "launch": "apps/wb/index2.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/wb/index2.html"
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
      "file": "apps/wb/index2.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "wb-index3",
    "title": "Калькулятор WB (Гарантированная прибыль)",
    "path": "apps/wb/index3.html",
    "launchUrl": "apps/wb/index3.html",
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
    "versionOf": "wb",
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
      "launch": "apps/wb/index3.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/wb/index3.html"
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
      "file": "apps/wb/index3.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "older or alternative version; confirm canonical project; missing real project screenshot"
  },
  {
    "id": "923",
    "title": "923",
    "path": "apps/923/index.html",
    "launchUrl": "apps/923/index.html",
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
      "launch": "apps/923/index.html",
      "hub": "hub-current.html",
      "source": "https://github.com/sunpole/stilist/blob/main/apps/923/index.html"
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
      "file": "apps/923/index.html",
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
    },
    "canonicalOf": null,
    "hasRealScreenshot": false,
    "needsReviewReason": "missing real project screenshot; technical title needs human-readable name"
  }
];
