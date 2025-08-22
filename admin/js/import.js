// Модуль импорта JSON файлов
class JSONImporter {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const fileInput = document.getElementById('file-import');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                this.handleFileSelect(e);
            });
        }
    }

    handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                if (window.dataManager.setData(jsonData)) {
                    this.showSuccess('Файл успешно загружен!');
                    this.enableControls();
                } else {
                    this.showError('Ошибка: файл должен содержать массив данных');
                }
            } catch (error) {
                this.showError('Ошибка парсинга JSON: ' + error.message);
            }
        };

        reader.onerror = () => {
            this.showError('Ошибка чтения файла');
        };

        reader.readAsText(file);
        
        // Сбрасываем значение input для возможности повторной загрузки того же файла
        event.target.value = '';
    }

    showSuccess(message) {
        alert(message); // В будущем заменим на красивый toast
    }

    showError(message) {
        alert('Ошибка: ' + message); // В будущем заменим на красивый toast
    }

    enableControls() {
        const exportBtn = document.getElementById('btn-export');
        const addRowBtn = document.getElementById('btn-add-row');
        const cardsViewBtn = document.getElementById('view-cards');
        
        if (exportBtn) exportBtn.disabled = false;
        if (addRowBtn) addRowBtn.disabled = false;
        if (cardsViewBtn) cardsViewBtn.disabled = false;
    }
}

// Инициализируем импортер
new JSONImporter();
