# Lетучие клетки

Интерактивная головоломка 3×3 на чистом JavaScript (Vanilla JS). Игра полностью адаптирована для мобильных устройств и десктопов.

<div align="center">
  <a href="https://sunpole.github.io/stilist/2025/" target="_blank" style="text-decoration: none;">
    <div style="
      background: linear-gradient(135deg, 
        #ff3366 0%, 
        #ff9933 25%, 
        #33ff99 50%, 
        #3366ff 75%, 
        #9933ff 100%);
      background-size: 400% 400%;
      animation: gradient 8s ease infinite, pulse 2s infinite;
      padding: 1.5rem 3rem;
      border-radius: 50px;
      font-family: 'Arial', sans-serif;
      font-weight: bold;
      font-size: 1.8rem;
      color: white;
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      box-shadow: 
        0 10px 30px rgba(255, 51, 102, 0.4),
        0 0 50px rgba(51, 204, 255, 0.2),
        inset 0 1px 0 rgba(255,255,255,0.3);
      border: 3px solid white;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      min-width: 350px;
      margin: 2rem 0;
    ">
      <style>
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes glow {
          from { 
            box-shadow: 
              0 10px 30px rgba(255, 51, 102, 0.4),
              0 0 50px rgba(51, 204, 255, 0.2),
              inset 0 1px 0 rgba(255,255,255,0.3); 
          }
          to { 
            box-shadow: 
              0 15px 40px rgba(255, 51, 102, 0.6),
              0 0 80px rgba(51, 204, 255, 0.4),
              inset 0 1px 0 rgba(255,255,255,0.5); 
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes snow {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
        }
      </style>
      
      <!-- Снежинки -->
      <span style="position: absolute; top: -10px; left: 10%; animation: snow 5s linear infinite;">❄️</span>
      <span style="position: absolute; top: 5px; right: 15%; animation: snow 7s linear infinite;">❄️</span>
      <span style="position: absolute; bottom: 5px; left: 20%; animation: snow 6s linear infinite;">❄️</span>
      
      <!-- Иконка и текст -->
      <span style="font-size: 2rem;">🎮</span>
      <span>ПОПРОБОВАТЬ ИГРУ</span>
      <span style="font-size: 2rem;">✨</span>
      
      <!-- Мигающие огоньки -->
      <span style="
        position: absolute;
        width: 10px;
        height: 10px;
        background: gold;
        border-radius: 50%;
        top: 15px;
        left: 50px;
        animation: twinkle 1.5s infinite;
        box-shadow: 0 0 10px gold;
      "></span>
      <span style="
        position: absolute;
        width: 8px;
        height: 8px;
        background: #ff3366;
        border-radius: 50%;
        bottom: 20px;
        right: 60px;
        animation: twinkle 2s infinite 0.5s;
        box-shadow: 0 0 10px #ff3366;
      "></span>
    </div>
  </a>
</div>

## 🎮 Как играть

Цель игры: включить все клетки (сделать их синими).

Правила переключения клеток:
- **Угловые клетки (1, 3, 7, 9)**: переключают себя и две соседние клетки
- **Боковые клетки (2, 4, 6, 8)**: переключают всю сторону (3 клетки)
- **Центральная клетка (5)**: переключает крест (5 клеток)

## 🚀 Быстрый старт

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-username/lights-game.git


   README.md для GitHub
markdown
# Lетучие клетки

Интерактивная головоломка 3×3 на чистом JavaScript (Vanilla JS). Игра полностью адаптирована для мобильных устройств и десктопов.

## 🎮 Как играть

Цель игры: включить все клетки (сделать их синими).

Правила переключения клеток:
- **Угловые клетки (1, 3, 7, 9)**: переключают себя и две соседние клетки
- **Боковые клетки (2, 4, 6, 8)**: переключают всю сторону (3 клетки)
- **Центральная клетка (5)**: переключает крест (5 клеток)

## 🚀 Быстрый старт

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/ваш-username/lights-game.git
Откройте index.html в браузере или разместите на GitHub Pages

📁 Структура проекта
text
lights-game/
├── index.html          # Главный HTML файл
├── styles.css          # Стили (mobile-first, CSS-переменные)
├── app.js              # Точка входа, управление модулями
├── game-logic.js       # Логика игры (правила, состояние победы)
├── game-state.js       # Управление состоянием игры (Observer паттерн)
├── game-ui.js          # Отрисовка интерфейса и обработка событий
├── utils.js            # Вспомогательные функции
└── README.md           # Этот файл
🛠 Технологии
Vanilla JavaScript (ES6+ модули)

CSS Grid & Flexbox для адаптивного дизайна

CSS Custom Properties (переменные) для темизации

Mobile-first подход

Observer паттерн для управления состоянием

History API для SPA-эффекта (готово к расширению)

📱 Особенности
Полностью адаптивный дизайн (от 320px до 4K)

Поддержка touch и mouse событий

Система подсказок

Встроенная консоль отладки (F12)

Анимации и звуковые эффекты

Таймер и счетчик ходов

Три уровня сложности

🎯 Размещение на GitHub Pages
Создайте репозиторий на GitHub

Загрузите все файлы проекта

В настройках репозитория включите GitHub Pages

Выберите ветку main и папку /root

Ваша игра будет доступна по ссылке: [https://ваш-username.github.io/репозиторий](https://github.com/sunpole/stilist/blob/main/2025)

🔧 Отладка
Игра включает встроенную консоль отладки:

Нажмите кнопку "Отладка" внизу страницы

Или используйте консоль браузера (F12)

Все действия логируются с временными метками
