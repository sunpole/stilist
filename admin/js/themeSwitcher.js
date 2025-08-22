// Модуль переключения тем
class ThemeSwitcher {
    constructor() {
        this.currentTheme = 'default';
        this.init();
    }

    init() {
        this.loadSavedTheme();
        this.bindEvents();
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            this.setTheme(savedTheme);
            document.getElementById('theme-select').value = savedTheme;
        }
    }

    bindEvents() {
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            themeSelect.addEventListener('change', (e) => {
                this.setTheme(e.target.value);
                localStorage.setItem('selectedTheme', e.target.value);
            });
        }
    }

    setTheme(themeName) {
        this.currentTheme = themeName;
        document.documentElement.setAttribute('data-theme', themeName);
        
        // Сохраняем тему в localStorage
        localStorage.setItem('selectedTheme', themeName);
        
        console.log(`Тема изменена на: ${themeName}`);
    }
}

// Инициализируем переключатель тем
new ThemeSwitcher();
