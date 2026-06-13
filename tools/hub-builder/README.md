# SUNPOLE HUB Builder

## v0.7.0-auto-catalog

This builder revision scans the repository for likely project entry points,
creates a reproducible JSON report, and can write the generated catalog into
`data/projects-hub.js`.

Run from the repository root:

```bash
node tools/hub-builder/scan.js
node tools/hub-builder/generate.js --write-data
```

Generated files:

- `tools/hub-builder/hub-builder-report.json`
- `tools/hub-builder/projects-hub.generated.js`
- `data/projects-hub.js`
- `data/hub-version.js`

Safety rule: the scanner does not delete, move, or rename project files. It
only reads HTML and nearby media files, then marks uncertain entries as
`review` or `experiment` for manual checking.

Локальный помощник для подготовки базы `SUNPOLE HUB`.

## Назначение

`hub-builder` должен запускаться на компьютере пользователя и помогать автоматически собирать информацию о проектах в репозитории `stilist`.

Главная цель — уменьшить ручную работу и ошибки при заполнении `data/projects-hub.js`.

## Что должен делать в будущем

- сканировать папки и HTML-файлы;
- находить вероятные проекты;
- читать `<title>` из HTML;
- находить существующие скриншоты;
- создавать скриншоты через Playwright;
- считать количество HTML / CSS / JS;
- примерно определять языковую структуру проекта;
- искать битые ссылки;
- искать дубликаты проектов;
- готовить отчёт;
- генерировать черновик `projects-hub.generated.js`.

## Безопасный принцип

Builder не должен сразу изменять рабочую базу.

Правильный порядок:

```text
1. Сканирование
2. Отчёт
3. Черновик базы
4. Проверка человеком
5. Ручная замена / импорт через HUB Admin
```

## Первый этап

Первый скрипт `scan.js` пока только:

- обходит файлы;
- находит HTML;
- читает title;
- определяет примерный путь проекта;
- создаёт отчёт `hub-builder-report.json`.

Он ничего не удаляет и не переносит.

## Как запустить

Из корня репозитория:

```bash
node tools/hub-builder/scan.js
```

Результат появится здесь:

```text
tools/hub-builder/hub-builder-report.json
```

## Следующие этапы

- добавить генерацию `projects-hub.generated.js`;
- добавить Playwright для скриншотов;
- добавить проверку ссылок;
- добавить отчёт по дубликатам;
- добавить CLI-команды:

```bash
node tools/hub-builder/scan.js
node tools/hub-builder/generate.js
node tools/hub-builder/screenshots.js
```
