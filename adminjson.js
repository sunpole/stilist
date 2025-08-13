class JSONAdmin {
    constructor() {
        // Текущие данные
        this.currentFile = null;
        this.jsonData = null;
        this.isModified = false;
        
        // Инициализация UI
        this.initElements();
        this.initEventListeners();
        this.updateUI();
        
        // Инициализация модальных окон
        this.urlModal = new bootstrap.Modal('#urlModal');
        this.fileSearchModal = new bootstrap.Modal('#fileSearchModal');
        
        // Состояние приложения
        this.state = {
            lastSearchPath: './'
        };
    }
    
    initElements() {
        // Основные элементы
        this.elements = {
            app: document.getElementById('app'),
            fileInfo: document.getElementById('fileInfo'),
            statusMessage: document.getElementById('statusMessage'),
            editorSection: document.getElementById('editorSection'),
            jsonEditor: document.getElementById('jsonEditor'),
            fileName: document.getElementById('fileName'),
            
            // Кнопки
            importBtn: document.getElementById('importBtn'),
            fileInput: document.getElementById('fileInput'),
            openProjectBtn: document.getElementById('openProjectBtn'),
            addByUrlBtn: document.getElementById('addByUrlBtn'),
            createBtn: document.getElementById('createBtn'),
            saveBtn: document.getElementById('saveBtn'),
            exportBtn: document.getElementById('exportBtn'),
            validateBtn: document.getElementById('validateBtn'),
            formatBtn: document.getElementById('formatBtn'),
            
            // Модальные окна
            jsonUrl: document.getElementById('jsonUrl'),
            loadUrlBtn: document.getElementById('loadUrlBtn'),
            searchPath: document.getElementById('searchPath'),
            filePattern: document.getElementById('filePattern'),
            searchBtn: document.getElementById('searchBtn'),
            browseBtn: document.getElementById('browseBtn'),
            fileResults: document.getElementById('fileResults'),
            
            // Контейнер для уведомлений
            toastContainer: document.getElementById('toastContainer')
        };
    }
    
    initEventListeners() {
        // Основные кнопки
        this.elements.importBtn.addEventListener('click', () => this.elements.fileInput.click());
        this.elements.fileInput.addEventListener('change', (e) => this.handleFileImport(e));
        this.elements.openProjectBtn.addEventListener('click', () => this.fileSearchModal.show());
        this.elements.addByUrlBtn.addEventListener('click', () => this.showUrlModal());
        this.elements.createBtn.addEventListener('click', () => this.createNewFile());
        this.elements.saveBtn.addEventListener('click', () => this.saveFile());
        this.elements.exportBtn.addEventListener('click', () => this.exportFile());
        this.elements.validateBtn.addEventListener('click', () => this.validateJSON());
        this.elements.formatBtn.addEventListener('click', () => this.formatJSON());
        
        // Редактор
        this.elements.jsonEditor.addEventListener('input', () => {
            this.isModified = true;
            this.updateUI();
        });
        
        // Модальное окно URL
        this.elements.loadUrlBtn.addEventListener('click', () => this.loadFromUrl());
        this.elements.jsonUrl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.loadFromUrl();
        });
        
        // Модальное окно поиска файлов
        this.elements.searchBtn.addEventListener('click', () => this.searchFiles());
        this.elements.browseBtn.addEventListener('click', () => this.browseFolder());
        this.elements.searchPath.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchFiles();
        });
    }
    
    // ==================== ФУНКЦИОНАЛ ФАЙЛОВ ====================
    
    handleFileImport(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                this.jsonData = JSON.parse(e.target.result);
                this.currentFile = {
                    name: file.name,
                    path: file.name,
                    type: 'file'
                };
                this.showEditor();
                this.showToast(`Файл "${file.name}" успешно загружен`, 'success');
            } catch (error) {
                this.showToast(`Ошибка при чтении файла: ${error.message}`, 'danger');
                console.error(error);
            }
        };
        reader.readAsText(file);
        
        // Сброс значения input для возможности повторной загрузки того же файла
        event.target.value = '';
    }
    
    async loadFromUrl() {
        const url = this.elements.jsonUrl.value.trim();
        if (!url) {
            this.showToast('Введите URL файла', 'warning');
            return;
        }
        
        try {
            this.showToast('Загрузка файла...', 'info');
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            this.jsonData = await response.json();
            this.currentFile = {
                name: url.split('/').pop() || 'remote_file.json',
                path: url,
                type: 'url'
            };
            
            this.urlModal.hide();
            this.showEditor();
            this.showToast('Файл успешно загружен', 'success');
        } catch (error) {
            this.showToast(`Ошибка загрузки: ${error.message}`, 'danger');
            console.error('Ошибка загрузки:', error);
        }
    }
    
    async searchFiles() {
        const path = this.elements.searchPath.value.trim() || './';
        const pattern = this.elements.filePattern.value.trim() || '*.json';
        
        try {
            this.showToast('Поиск файлов...', 'info');
            
            // В реальном проекте здесь будет запрос к серверу или Electron API
            // Это демо-реализация для браузера
            let mockFiles = [];
            
            if (path.startsWith('http')) {
                // Эмуляция для веб-сервера
                mockFiles = [
                    { name: 'towers.json', path: '/data/towers.json', size: '2.5 KB', modified: '2023-05-15' },
                    { name: 'enemies.json', path: '/data/enemies.json', size: '3.1 KB', modified: '2023-05-14' },
                    { name: 'levels.json', path: '/data/levels.json', size: '1.8 KB', modified: '2023-05-10' }
                ].filter(f => f.name.includes(pattern.replace('*', '')));
            } else {
                // Эмуляция для локального проекта
                mockFiles = [
                    { name: 'config.json', path: './config.json', size: '1.2 KB', modified: '2023-05-18' },
                    { name: 'data.json', path: './data/data.json', size: '4.7 KB', modified: '2023-05-17' },
                    { name: 'settings.json', path: './settings.json', size: '0.8 KB', modified: '2023-05-16' }
                ].filter(f => f.name.includes(pattern.replace('*', '')));
            }
            
            this.displayFileResults(mockFiles);
            this.state.lastSearchPath = path;
        } catch (error) {
            this.showToast(`Ошибка поиска: ${error.message}`, 'danger');
            console.error('Ошибка поиска:', error);
        }
    }
    
    browseFolder() {
        // В реальном проекте здесь будет вызов API для выбора папки
        this.showToast('В браузере выбор папки недоступен', 'info');
        
        // Эмуляция для демонстрации
        this.elements.searchPath.value = this.state.lastSearchPath;
    }
    
    displayFileResults(files) {
        this.elements.fileResults.innerHTML = '';
        
        if (files.length === 0) {
            this.elements.fileResults.innerHTML = `
                <tr>
                    <td colspan="3" class="text-center text-muted">Файлы не найдены</td>
                </tr>
            `;
            return;
        }
        
        files.forEach(file => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="text-truncate" style="max-width: 200px;" title="${file.path}">
                    <i class="bi bi-file-earmark-json"></i> ${file.name}
                </td>
                <td>${file.size}</td>
                <td>${file.modified}</td>
            `;
            
            row.addEventListener('click', () => {
                this.loadProjectFile(file.path);
                this.fileSearchModal.hide();
            });
            
            this.elements.fileResults.appendChild(row);
        });
    }
    
    async loadProjectFile(filePath) {
        try {
            this.showToast(`Загрузка ${filePath}...`, 'info');
            
            // В реальном проекте здесь будет запрос к серверу или Electron API
            // Это демо-реализация для браузера
            if (filePath.startsWith('http') || filePath.startsWith('/')) {
                const response = await fetch(filePath);
                this.jsonData = await response.json();
            } else {
                // Эмуляция загрузки файла
                this.jsonData = {
                    "пример": "данных",
                    "файл": filePath,
                    "содержимое": "Здесь будут реальные данные из файла",
                    "timestamp": new Date().toISOString()
                };
            }
            
            this.currentFile = {
                name: filePath.split('/').pop(),
                path: filePath,
                type: 'project'
            };
            
            this.showEditor();
            this.showToast('Файл проекта загружен', 'success');
        } catch (error) {
            this.showToast(`Ошибка загрузки: ${error.message}`, 'danger');
            console.error('Ошибка загрузки файла:', error);
        }
    }
    
    createNewFile() {
        this.jsonData = {
            "пример": "структуры",
            "данные": [],
            "метаданные": {
                "создан": new Date().toISOString(),
                "автор": "Администратор"
            }
        };
        
        this.currentFile = {
            name: 'новый_файл.json',
            path: '',
            type: 'new'
        };
        
        this.showEditor();
        this.showToast('Создан новый JSON файл', 'success');
    }
    
    saveFile() {
        if (!this.jsonData) return;
        
        try {
            // В реальном проекте здесь будет сохранение файла
            // Для демонстрации просто показываем сообщение
            this.isModified = false;
            this.updateUI();
            this.showToast('Файл сохранен', 'success');
        } catch (error) {
            this.showToast(`Ошибка сохранения: ${error.message}`, 'danger');
            console.error('Ошибка сохранения:', error);
        }
    }
    
    exportFile() {
        if (!this.jsonData) {
            this.showToast('Нет данных для экспорта', 'warning');
            return;
        }
        
        try {
            const dataStr = JSON.stringify(this.jsonData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
            
            const exportName = this.currentFile.name || 'exported.json';
            const link = document.createElement('a');
            link.setAttribute('href', dataUri);
            link.setAttribute('download', exportName);
            link.click();
            
            this.showToast(`Файл "${exportName}" экспортирован`, 'success');
        } catch (error) {
            this.showToast(`Ошибка экспорта: ${error.message}`, 'danger');
            console.error('Ошибка экспорта:', error);
        }
    }
    
    // ==================== РАБОТА С JSON ====================
    
    validateJSON() {
        try {
            const text = this.elements.jsonEditor.textContent;
            JSON.parse(text);
            this.showToast('JSON валиден', 'success');
            return true;
        } catch (error) {
            this.showToast(`Ошибка в JSON: ${error.message}`, 'danger');
            return false;
        }
    }
    
    formatJSON() {
        try {
            const parsed = JSON.parse(this.elements.jsonEditor.textContent);
            this.elements.jsonEditor.textContent = JSON.stringify(parsed, null, 2);
            this.showToast('JSON отформатирован', 'success');
        } catch (error) {
            this.showToast(`Ошибка форматирования: ${error.message}`, 'danger');
        }
    }
    
    // ==================== ПОМОЩНИКИ UI ====================
    
    showEditor() {
        this.elements.editorSection.classList.remove('d-none');
        this.elements.fileName.textContent = this.currentFile.name;
        this.elements.fileInfo.textContent = this.currentFile.name;
        this.elements.jsonEditor.textContent = JSON.stringify(this.jsonData, null, 2);
        this.isModified = false;
        this.updateUI();
    }
    
    updateUI() {
        // Обновление состояния кнопок
        const hasFile = !!this.jsonData;
        this.elements.saveBtn.disabled = !hasFile || !this.isModified;
        this.elements.exportBtn.disabled = !hasFile;
        this.elements.validateBtn.disabled = !hasFile;
        this.elements.formatBtn.disabled = !hasFile;
        
        // Обновление статус бара
        if (this.isModified) {
            this.elements.statusMessage.textContent = `${this.currentFile.name} (изменен)`;
        } else if (this.currentFile) {
            this.elements.statusMessage.textContent = this.currentFile.name;
        } else {
            this.elements.statusMessage.textContent = 'Готов к работе';
        }
    }
    
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast show align-items-center text-white bg-${type} border-0`;
        toast.role = 'alert';
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        `;
        
        this.elements.toastContainer.appendChild(toast);
        
        // Автоматическое скрытие через 5 секунд
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 5000);
        
        // Обработчик закрытия
        toast.querySelector('.btn-close').addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }
    
    showUrlModal() {
        this.elements.jsonUrl.value = '';
        this.urlModal.show();
    }
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const app = new JSONAdmin();
});
