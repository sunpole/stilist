import './dataManager.js';
import './import.js';
import './themeSwitcher.js';

// Основной модуль приложения
class App {
    constructor() {
        this.init();
    }

    init() {
        console.log('Админка JSON баз запущена');
        // Здесь будет инициализация других модулей
    }
}

// Запускаем приложение после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
