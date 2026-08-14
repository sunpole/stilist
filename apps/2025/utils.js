// utils.js - вспомогательные функции
// Форматирование времени (секунды в мм:сс)
export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Логирование в консоль отладки
export function logDebug(message, type = 'DEBUG', data = null) {
    const timestamp = new Date().toLocaleTimeString();
    const consoleEntry = document.createElement('div');
    consoleEntry.className = 'debug-entry';
    
    let logMessage = `<span class="debug-time">[${timestamp}]</span> <strong>${type}:</strong> ${message}`;
    
    if (data) {
        logMessage += ` <em>${JSON.stringify(data)}</em>`;
    }
    
    consoleEntry.innerHTML = logMessage;
    
    // Добавляем в консоль отладки
    const debugConsole = document.getElementById('debug-console');
    if (debugConsole) {
        debugConsole.appendChild(consoleEntry);
        debugConsole.scrollTop = debugConsole.scrollHeight;
    }
    
    // Также логируем в консоль браузера
    console.log(`[${timestamp}] ${type}: ${message}`, data || '');
}

// Генерация случайного цвета
export function getRandomColor() {
    const colors = [
        '#4361ee', '#3a0ca3', '#7209b7', 
        '#f72585', '#4cc9f0', '#4895ef'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Проверка поддержки touch событий
export function isTouchDevice() {
    return 'ontouchstart' in window || 
           navigator.maxTouchPoints > 0 || 
           navigator.msMaxTouchPoints > 0;
}

// Дебаунс функция (для оптимизации обработки событий)
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
