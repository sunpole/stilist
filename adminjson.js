// Основные переменные
let currentFile = null;
let currentJsonData = null;

// DOM элементы
const importBtn = document.getElementById('importBtn');
const fileInput = document.getElementById('fileInput');
const openBtn = document.getElementById('openBtn');
const addByUrlBtn = document.getElementById('addByUrlBtn');
const createBtn = document.getElementById('createBtn');
const saveBtn = document.getElementById('saveBtn');
const exportBtn = document.getElementById('exportBtn');
const jsonEditor = document.getElementById('jsonEditor');
const jsonContent = document.getElementById('jsonContent');
const currentFileName = document.getElementById('currentFileName');
const statusMessage = document.getElementById('statusMessage');

// Инициализация приложения
function init() {
    setupEventListeners();
    updateUI();
}

// Настройка обработчиков событий
function setupEventListeners() {
    importBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileImport);
    openBtn.addEventListener('click', openProjectFile);
    addByUrlBtn.addEventListener('click', addByUrl);
    createBtn.addEventListener('click', createNewJson);
    saveBtn.addEventListener('click', saveFile);
    exportBtn.addEventListener('click', exportFile);
}

// Импорт файла
function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            currentJsonData = JSON.parse(e.target.result);
            currentFile = {
                name: file.name,
                type: 'local'
            };
            showJsonData();
            showToast(`Файл "${file.name}" успешно загружен`, 'success');
        } catch (error) {
            showToast('Ошибка при чтении файла: ' + error.message, 'danger');
        }
    };
    reader.readAsText(file);
    
    // Сбрасываем значение input, чтобы можно было загрузить тот же файл снова
    event.target.value = '';
}

// Открытие файла из проекта (заглушка)
function openProjectFile() {
    showToast('Функция "Открыть из проекта" в разработке', 'info');
}

// Добавление по ссылке (заглушка)
function addByUrl() {
    showToast('Функция "Добавить по ссылке" в разработке', 'info');
}

// Создание нового JSON
function createNewJson() {
    currentJsonData = {
        "пример": "структуры",
        "массив": [1, 2, 3],
        "объект": {
            "поле": "значение"
        }
    };
    currentFile = {
        name: 'новый_файл.json',
        type: 'new'
    };
    showJsonData();
    showToast('Создан новый JSON файл', 'success');
}

// Показать JSON данные
function showJsonData() {
    jsonContent.textContent = JSON.stringify(currentJsonData, null, 2);
    currentFileName.textContent = currentFile.name;
    jsonEditor.classList.remove('d-none');
    updateUI();
}

// Сохранение файла (заглушка)
function saveFile() {
    if (!currentJsonData) return;
    showToast('Функция сохранения в разработке', 'info');
}

// Экспорт файла
function exportFile() {
    if (!currentJsonData) {
        showToast('Нет данных для экспорта', 'warning');
        return;
    }
    
    const dataStr = JSON.stringify(currentJsonData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = currentFile.name || 'exported.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast(`Файл "${exportFileDefaultName}" экспортирован`, 'success');
}

// Обновление UI
function updateUI() {
    const hasData = currentJsonData !== null;
    saveBtn.disabled = !hasData;
    exportBtn.disabled = !hasData;
}

// Показать уведомление
function showToast(message, type = 'info') {
    const toastContainer = document.querySelector('.toast-container');
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
    
    toastContainer.appendChild(toast);
    
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
    
    // Обновление статус бара
    statusMessage.textContent = message;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);
