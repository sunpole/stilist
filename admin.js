// Основные переменные
let currentFile = null;
let currentData = [];
let currentSchema = {};
let allData = {};
let references = {};
let selectedRowIndex = -1;

// DOM элементы
const fileListElement = document.getElementById('fileList');
const referencesListElement = document.getElementById('referencesList');
const dataTable = document.getElementById('dataTable');
const tableHeaders = document.getElementById('tableHeaders');
const tableBody = document.getElementById('tableBody');
const currentTableName = document.getElementById('currentTableName');
const loadJsonBtn = document.getElementById('loadJsonBtn');
const jsonFileInput = document.getElementById('jsonFileInput');
const saveJsonBtn = document.getElementById('saveJsonBtn');
const exportJsonBtn = document.getElementById('exportJsonBtn');
const addRowBtn = document.getElementById('addRowBtn');
const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
const editCard = document.getElementById('editCard');
const editFormFields = document.getElementById('editFormFields');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const saveEditBtn = document.getElementById('saveEditBtn');
const toastContainer = document.getElementById('toastContainer');
const toggleSidebar = document.getElementById('toggleSidebar');

// Схемы данных для разных типов файлов
const SCHEMAS = {
    'monsters': {
        name: 'Монстры',
        fields: {
            id: { type: 'text', label: 'ID', required: true },
            name: { type: 'text', label: 'Название', required: true },
            health: { type: 'number', label: 'Здоровье', min: 1 },
            speed: { type: 'number', label: 'Скорость', step: 0.1, min: 0.1 },
            armor: { type: 'number', label: 'Броня', min: 0 },
            reward: { type: 'number', label: 'Награда', min: 0 },
            sprite: { type: 'text', label: 'Спрайт' }
        }
    },
    'towers': {
        name: 'Башни',
        fields: {
            id: { type: 'text', label: 'ID', required: true },
            name: { type: 'text', label: 'Название', required: true },
            damage: { type: 'number', label: 'Урон', min: 1 },
            range: { type: 'number', label: 'Дальность', min: 1 },
            attack_speed: { type: 'number', label: 'Скорость атаки', step: 0.1, min: 0.1 },
            cost: { type: 'number', label: 'Стоимость', min: 0 },
            projectile_id: { type: 'reference', label: 'ID снаряда', reference: 'projectiles' }
        }
    },
    'projectiles': {
        name: 'Снаряды',
        fields: {
            id: { type: 'text', label: 'ID', required: true },
            name: { type: 'text', label: 'Название', required: true },
            speed: { type: 'number', label: 'Скорость', min: 1 },
            effect: { type: 'select', label: 'Эффект', options: ['none', 'slow', 'burn', 'stun'] },
            effect_duration: { type: 'number', label: 'Длительность эффекта', min: 0 },
            sprite: { type: 'text', label: 'Спрайт' }
        }
    },
    'waves': {
        name: 'Волны',
        fields: {
            id: { type: 'text', label: 'ID', required: true },
            name: { type: 'text', label: 'Название', required: true },
            monsters: { 
                type: 'array', 
                label: 'Монстры', 
                itemType: 'object',
                fields: {
                    monster_id: { type: 'reference', label: 'ID монстра', reference: 'monsters' },
                    count: { type: 'number', label: 'Количество', min: 1 },
                    delay: { type: 'number', label: 'Задержка', min: 0 }
                }
            },
            reward_multiplier: { type: 'number', label: 'Множитель награды', min: 1, step: 0.1 }
        }
    }
};

// Инициализация приложения
function init() {
    setupEventListeners();
    updateUI();
}

// Настройка обработчиков событий
function setupEventListeners() {
    loadJsonBtn.addEventListener('click', () => jsonFileInput.click());
    jsonFileInput.addEventListener('change', handleFileUpload);
    saveJsonBtn.addEventListener('click', saveCurrentFile);
    exportJsonBtn.addEventListener('click', exportCurrentFile);
    addRowBtn.addEventListener('click', addNewRow);
    deleteSelectedBtn.addEventListener('click', deleteSelectedRow);
    cancelEditBtn.addEventListener('click', closeEditCard);
    saveEditBtn.addEventListener('click', saveEditedRow);
    toggleSidebar.addEventListener('click', toggleSidebarVisibility);
    
    // Двойной клик по строке для редактирования
    tableBody.addEventListener('dblclick', (e) => {
        const row = e.target.closest('tr');
        if (row) {
            selectedRowIndex = row.rowIndex - 1;
            openEditCard(selectedRowIndex);
        }
    });
    
    // Клик по ячейке для inline-редактирования
    tableBody.addEventListener('click', (e) => {
        const cell = e.target.closest('td');
        if (cell && !cell.querySelector('input, select')) {
            const rowIndex = cell.parentElement.rowIndex - 1;
            const colIndex = cell.cellIndex;
            
            if (rowIndex >= 0 && rowIndex < currentData.length && colIndex > 0) {
                startInlineEdit(cell, rowIndex, colIndex);
            }
        }
    });
}

// Переключение видимости сайдбара на мобильных устройствах
function toggleSidebarVisibility() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
    
    const icon = toggleSidebar.querySelector('i');
    if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('bi-chevron-double-up');
        icon.classList.add('bi-chevron-double-down');
    } else {
        icon.classList.remove('bi-chevron-double-down');
        icon.classList.add('bi-chevron-double-up');
    }
}

// Обработка загрузки файлов
function handleFileUpload(e) {
    const files = e.target.files;
    if (files.length === 0) return;
    
    allData = {};
    references = {};
    fileListElement.innerHTML = '';
    referencesListElement.innerHTML = '';
    
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                const fileName = file.name.replace('.json', '');
                
                allData[fileName] = data;
                updateReferences(fileName, data);
                
                // Добавляем файл в список
                const listItem = document.createElement('li');
                listItem.className = 'nav-item';
                listItem.innerHTML = `
                    <a class="nav-link file-link" href="#" data-file="${fileName}">
                        <i class="bi bi-file-earmark-json"></i> ${SCHEMAS[fileName]?.name || fileName}
                    </a>
                `;
                fileListElement.appendChild(listItem);
                
                // Добавляем обработчик клика
                listItem.querySelector('.file-link').addEventListener('click', () => loadFile(fileName));
                
                showToast(`Файл ${file.name} успешно загружен`, 'success');
                
                // Если это первый файл, загружаем его
                if (!currentFile) {
                    loadFile(fileName);
                }
            } catch (error) {
                showToast(`Ошибка при загрузке файла ${file.name}: ${error.message}`, 'danger');
            }
        };
        reader.readAsText(file);
    });
    
    // Сбрасываем значение input, чтобы можно было загрузить тот же файл снова
    jsonFileInput.value = '';
}

// Обновление справочников
function updateReferences(fileName, data) {
    if (SCHEMAS[fileName]) {
        references[fileName] = data;
        
        // Добавляем в список справочников
        const listItem = document.createElement('li');
        listItem.className = 'nav-item';
        listItem.innerHTML = `
            <a class="nav-link reference-link" href="#" data-ref="${fileName}">
                <i class="bi bi-book"></i> ${SCHEMAS[fileName].name}
            </a>
        `;
        referencesListElement.appendChild(listItem);
        
        // Добавляем обработчик клика
        listItem.querySelector('.reference-link').addEventListener('click', () => {
            showToast(`Справочник ${SCHEMAS[fileName].name} (${data.length} записей)`, 'info');
        });
    }
}

// Загрузка файла для редактирования
function loadFile(fileName) {
    if (!allData[fileName]) {
        showToast(`Файл ${fileName} не загружен`, 'warning');
        return;
    }
    
    currentFile = fileName;
    currentData = Array.isArray(allData[fileName]) ? [...allData[fileName]] : [];
    currentSchema = SCHEMAS[fileName] || { fields: {} };
    
    // Обновляем UI
    currentTableName.textContent = SCHEMAS[fileName]?.name || fileName;
    addRowBtn.disabled = false;
    deleteSelectedBtn.disabled = currentData.length === 0;
    
    renderTable();
    updateUI();
}

// Рендер таблицы
function renderTable() {
    // Очищаем таблицу
    tableHeaders.innerHTML = '';
    tableBody.innerHTML = '';
    
    // Добавляем заголовки
    const headerRow = document.createElement('tr');
    
    // Добавляем checkbox для выбора строк
    const selectHeader = document.createElement('th');
    selectHeader.innerHTML = '<input type="checkbox" id="selectAllRows">';
    headerRow.appendChild(selectHeader);
    
    // Добавляем остальные заголовки
    Object.keys(currentSchema.fields || {}).forEach(key => {
        const th = document.createElement('th');
        th.textContent = currentSchema.fields[key].label || key;
        headerRow.appendChild(th);
    });
    
    tableHeaders.appendChild(headerRow);
    
    // Настройка обработчика для "Выбрать все"
    document.getElementById('selectAllRows').addEventListener('change', (e) => {
        const checkboxes = tableBody.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = e.target.checked;
        });
    });
    
    // Добавляем строки с данными
    currentData.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        tr.dataset.rowIndex = rowIndex;
        
        // Checkbox для выбора строки
        const selectCell = document.createElement('td');
        selectCell.innerHTML = '<input type="checkbox" class="row-selector">';
        tr.appendChild(selectCell);
        
        // Остальные ячейки
        Object.keys(currentSchema.fields || {}).forEach(key => {
            const td = document.createElement('td');
            
            if (row[key] === undefined) {
                td.textContent = '';
            } else if (Array.isArray(row[key])) {
                td.textContent = `[${row[key].length} элементов]`;
            } else if (typeof row[key] === 'object' && row[key] !== null) {
                td.textContent = '{объект}';
            } else {
                td.textContent = row[key];
            }
            
            tr.appendChild(td);
        });
        
        tableBody.appendChild(tr);
    });
}

// Добавление новой строки
function addNewRow() {
    const newRow = {};
    Object.keys(currentSchema.fields).forEach(key => {
        const field = currentSchema.fields[key];
        
        switch (field.type) {
            case 'number':
                newRow[key] = 0;
                break;
            case 'array':
                newRow[key] = [];
                break;
            case 'object':
                newRow[key] = {};
                break;
            default:
                newRow[key] = '';
        }
    });
    
    currentData.push(newRow);
    selectedRowIndex = currentData.length - 1;
    
    renderTable();
    openEditCard(selectedRowIndex);
    updateUI();
}

// Удаление выбранных строк
function deleteSelectedRow() {
    const checkboxes = tableBody.querySelectorAll('.row-selector:checked');
    if (checkboxes.length === 0) {
        showToast('Не выбрано ни одной строки для удаления', 'warning');
        return;
    }
    
    // Получаем индексы выбранных строк (в обратном порядке для корректного удаления)
    const indexesToDelete = Array.from(checkboxes)
        .map(checkbox => parseInt(checkbox.closest('tr').dataset.rowIndex))
        .sort((a, b) => b - a);
    
    // Удаляем строки из данных
    indexesToDelete.forEach(index => {
        currentData.splice(index, 1);
    });
    
    renderTable();
    updateUI();
    showToast(`Удалено ${indexesToDelete.length} строк`, 'success');
}

// Открытие карточки редактирования строки
function openEditCard(rowIndex) {
    if (rowIndex < 0 || rowIndex >= currentData.length) return;
    
    const rowData = currentData[rowIndex];
    selectedRowIndex = rowIndex;
    
    // Очищаем форму
    editFormFields.innerHTML = '';
    
    // Добавляем поля для редактирования
    Object.keys(currentSchema.fields).forEach(key => {
        const field = currentSchema.fields[key];
        const value = rowData[key];
        
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'mb-3';
        
        const label = document.createElement('label');
        label.className = 'form-label';
        label.textContent = field.label || key;
        label.htmlFor = `edit-${key}`;
        
        fieldGroup.appendChild(label);
        
        // Создаем элемент ввода в зависимости от типа поля
        let inputElement;
        
        switch (field.type) {
            case 'select':
                inputElement = document.createElement('select');
                inputElement.className = 'form-select';
                field.options.forEach(option => {
                    const optElement = document.createElement('option');
                    optElement.value = option;
                    optElement.textContent = option;
                    if (value === option) optElement.selected = true;
                    inputElement.appendChild(optElement);
                });
                break;
                
            case 'reference':
                inputElement = document.createElement('select');
                inputElement.className = 'form-select';
                
                const refData = references[field.reference] || [];
                refData.forEach(item => {
                    const optElement = document.createElement('option');
                    optElement.value = item.id;
                    optElement.textContent = `${item.id} - ${item.name || ''}`;
                    if (value === item.id) optElement.selected = true;
                    inputElement.appendChild(optElement);
                });
                
                if (!refData.length) {
                    const optElement = document.createElement('option');
                    optElement.value = '';
                    optElement.textContent = 'Нет данных в справочнике';
                    inputElement.appendChild(optElement);
                }
                break;
                
            case 'array':
                if (field.itemType === 'object') {
                    // Сложный массив объектов - показываем кнопку для редактирования
                    const arrayContainer = document.createElement('div');
                    
                    const arrayInfo = document.createElement('p');
                    arrayInfo.textContent = `Элементов: ${value.length}`;
                    
                    const editBtn = document.createElement('button');
                    editBtn.className = 'btn btn-sm btn-outline-primary';
                    editBtn.textContent = 'Редактировать массив';
                    editBtn.addEventListener('click', () => {
                        editArrayField(key, value, field.fields);
                    });
                    
                    arrayContainer.appendChild(arrayInfo);
                    arrayContainer.appendChild(editBtn);
                    fieldGroup.appendChild(arrayContainer);
                    editFormFields.appendChild(fieldGroup);
                    continue;
                } else {
                    // Простой массив - текстовое поле с разделителями
                    inputElement = document.createElement('input');
                    inputElement.type = 'text';
                    inputElement.className = 'form-control';
                    inputElement.value = Array.isArray(value) ? value.join(', ') : '';
                }
                break;
                
            case 'number':
                inputElement = document.createElement('input');
                inputElement.type = 'number';
                inputElement.className = 'form-control';
                inputElement.value = value || 0;
                if (field.min !== undefined) inputElement.min = field.min;
                if (field.max !== undefined) inputElement.max = field.max;
                if (field.step !== undefined) inputElement.step = field.step;
                break;
                
            default:
                inputElement = document.createElement('input');
                inputElement.type = field.type || 'text';
                inputElement.className = 'form-control';
                inputElement.value = value || '';
        }
        
        if (inputElement) {
            inputElement.id = `edit-${key}`;
            fieldGroup.appendChild(inputElement);
        }
        
        editFormFields.appendChild(fieldGroup);
    });
    
    // Показываем карточку редактирования
    editCard.style.display = 'block';
}

// Редактирование поля-массива
function editArrayField(fieldName, arrayData, itemFields) {
    // Создаем модальное окно для редактирования массива
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'arrayEditModal';
    modal.tabIndex = '-1';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Редактирование массива</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <button class="btn btn-sm btn-success me-2" id="addArrayItemBtn">
                            <i class="bi bi-plus-circle"></i> Добавить элемент
                        </button>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-sm" id="arrayItemsTable">
                            <thead>
                                <tr id="arrayItemsHeaders"></tr>
                            </thead>
                            <tbody id="arrayItemsBody"></tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                    <button type="button" class="btn btn-primary" id="saveArrayBtn">Сохранить</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    // Заполняем таблицу элементами массива
    const arrayItemsHeaders = modal.querySelector('#arrayItemsHeaders');
    const arrayItemsBody = modal.querySelector('#arrayItemsBody');
    
    // Заголовки таблицы
    arrayItemsHeaders.innerHTML = '<th>Действия</th>';
    Object.keys(itemFields).forEach(key => {
        const th = document.createElement('th');
        th.textContent = itemFields[key].label || key;
        arrayItemsHeaders.appendChild(th);
    });
    
    // Элементы массива
    arrayData.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.dataset.itemIndex = index;
        
        // Кнопки действий
        const actionsTd = document.createElement('td');
        actionsTd.innerHTML = `
            <button class="btn btn-sm btn-danger delete-array-item" title="Удалить">
                <i class="bi bi-trash"></i>
            </button>
        `;
        tr.appendChild(actionsTd);
        
        // Поля элемента
        Object.keys(itemFields).forEach(key => {
            const td = document.createElement('td');
            const field = itemFields[key];
            const value = item[key] || '';
            
            if (field.type === 'reference') {
                const select = document.createElement('select');
                select.className = 'form-control form-control-sm';
                select.dataset.field = key;
                
                const refData = references[field.reference] || [];
                refData.forEach(refItem => {
                    const option = document.createElement('option');
                    option.value = refItem.id;
                    option.textContent = `${refItem.id} - ${refItem.name || ''}`;
                    if (value === refItem.id) option.selected = true;
                    select.appendChild(option);
                });
                
                if (!refData.length) {
                    const option = document.createElement('option');
                    option.value = '';
                    option.textContent = 'Нет данных в справочнике';
                    select.appendChild(option);
                }
                
                td.appendChild(select);
            } else {
                const input = document.createElement('input');
                input.type = field.type === 'number' ? 'number' : 'text';
                input.className = 'form-control form-control-sm';
                input.value = value;
                input.dataset.field = key;
                
                if (field.min !== undefined) input.min = field.min;
                if (field.max !== undefined) input.max = field.max;
                if (field.step !== undefined) input.step = field.step;
                
                td.appendChild(input);
            }
            
            tr.appendChild(td);
        });
        
        arrayItemsBody.appendChild(tr);
    });
    
    // Обработчики событий
    modal.querySelector('#addArrayItemBtn').addEventListener('click', () => {
        const newItem = {};
        Object.keys(itemFields).forEach(key => {
            const field = itemFields[key];
            
            switch (field.type) {
                case 'number':
                    newItem[key] = 0;
                    break;
                case 'array':
                    newItem[key] = [];
                    break;
                case 'object':
                    newItem[key] = {};
                    break;
                default:
                    newItem[key] = '';
            }
        });
        
        arrayData.push(newItem);
        renderArrayItemsTable(arrayData, itemFields, arrayItemsHeaders, arrayItemsBody);
    });
    
    modal.querySelectorAll('.delete-array-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const index = parseInt(row.dataset.itemIndex);
            arrayData.splice(index, 1);
            renderArrayItemsTable(arrayData, itemFields, arrayItemsHeaders, arrayItemsBody);
        });
    });
    
    modal.querySelector('#saveArrayBtn').addEventListener('click', () => {
        // Обновляем данные из таблицы
        arrayItemsBody.querySelectorAll('tr').forEach(row => {
            const index = parseInt(row.dataset.itemIndex);
            Object.keys(itemFields).forEach(key => {
                const input = row.querySelector(`[data-field="${key}"]`);
                if (input) {
                    if (itemFields[key].type === 'number') {
                        arrayData[index][key] = parseFloat(input.value) || 0;
                    } else {
                        arrayData[index][key] = input.value;
                    }
                }
            });
        });
        
        // Обновляем поле в основной форме
        const input = document.getElementById(`edit-${fieldName}`);
        if (input) {
            input.value = arrayData.join(', ');
        }
        
        modalInstance.hide();
        setTimeout(() => modal.remove(), 500);
    });
    
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// Рендер таблицы элементов массива
function renderArrayItemsTable(arrayData, itemFields, headersElement, bodyElement) {
    headersElement.innerHTML = '<th>Действия</th>';
    Object.keys(itemFields).forEach(key => {
        const th = document.createElement('th');
        th.textContent = itemFields[key].label || key;
        headersElement.appendChild(th);
    });
    
    bodyElement.innerHTML = '';
    
    arrayData.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.dataset.itemIndex = index;
        
        // Кнопки действий
        const actionsTd = document.createElement('td');
        actionsTd.innerHTML = `
            <button class="btn btn-sm btn-danger delete-array-item" title="Удалить">
                <i class="bi bi-trash"></i>
            </button>
        `;
        tr.appendChild(actionsTd);
        
        // Поля элемента
        Object.keys(itemFields).forEach(key => {
            const td = document.createElement('td');
            const field = itemFields[key];
            const value = item[key] || '';
            
            if (field.type === 'reference') {
                const select = document.createElement('select');
                select.className = 'form-control form-control-sm';
                select.dataset.field = key;
                
                const refData = references[field.reference] || [];
                refData.forEach(refItem => {
                    const option = document.createElement('option');
                    option.value = refItem.id;
                    option.textContent = `${refItem.id} - ${refItem.name || ''}`;
                    if (value === refItem.id) option.selected = true;
                    select.appendChild(option);
                });
                
                if (!refData.length) {
                    const option = document.createElement('option');
                    option.value = '';
                    option.textContent = 'Нет данных в справочнике';
                    select.appendChild(option);
                }
                
                td.appendChild(select);
            } else {
                const input = document.createElement('input');
                input.type = field.type === 'number' ? 'number' : 'text';
                input.className = 'form-control form-control-sm';
                input.value = value;
                input.dataset.field = key;
                
                if (field.min !== undefined) input.min = field.min;
                if (field.max !== undefined) input.max = field.max;
                if (field.step !== undefined) input.step = field.step;
                
                td.appendChild(input);
            }
            
            tr.appendChild(td);
        });
        
        bodyElement.appendChild(tr);
    });
    
    // Назначаем обработчики для новых кнопок удаления
    bodyElement.querySelectorAll('.delete-array-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const index = parseInt(row.dataset.itemIndex);
            arrayData.splice(index, 1);
            renderArrayItemsTable(arrayData, itemFields, headersElement, bodyElement);
        });
    });
}

// Закрытие карточки редактирования
function closeEditCard() {
    editCard.style.display = 'none';
    selectedRowIndex = -1;
}

// Сохранение изменений в строке
function saveEditedRow() {
    if (selectedRowIndex < 0 || selectedRowIndex >= currentData.length) return;
    
    const rowData = currentData[selectedRowIndex];
    let hasErrors = false;
    
    // Собираем данные из формы
    Object.keys(currentSchema.fields).forEach(key => {
        const field = currentSchema.fields[key];
        const input = document.getElementById(`edit-${key}`);
        
        if (!input && field.type !== 'array') return;
        
        try {
            switch (field.type) {
                case 'number':
                    rowData[key] = parseFloat(input.value) || 0;
                    if (field.min !== undefined && rowData[key] < field.min) {
                        throw new Error(`Значение должно быть не меньше ${field.min}`);
                    }
                    if (field.max !== undefined && rowData[key] > field.max) {
                        throw new Error(`Значение должно быть не больше ${field.max}`);
                    }
                    break;
                    
                case 'array':
                    // Для массивов данные уже обновлены в модальном окне
                    break;
                    
                default:
                    rowData[key] = input.value;
                    if (field.required && !rowData[key]) {
                        throw new Error('Это поле обязательно для заполнения');
                    }
            }
        } catch (error) {
            showToast(`Ошибка в поле "${field.label || key}": ${error.message}`, 'danger');
            hasErrors = true;
            input.classList.add('is-invalid');
        }
    });
    
    if (hasErrors) return;
    
    // Обновляем таблицу
    renderTable();
    closeEditCard();
    showToast('Изменения сохранены', 'success');
}

// Inline-редактирование ячейки
function startInlineEdit(cell, rowIndex, colIndex) {
    if (rowIndex < 0 || rowIndex >= currentData.length) return;
    
    const fieldKeys = Object.keys(currentSchema.fields);
    const fieldKey = fieldKeys[colIndex - 1]; // -1 потому что первый столбец - checkbox
    const field = currentSchema.fields[fieldKey];
    
    if (!field) return;
    
    const rowData = currentData[rowIndex];
    const originalValue = rowData[fieldKey];
    
    // Сохраняем оригинальное содержимое ячейки
    const originalContent = cell.innerHTML;
    
    // Создаем элемент для редактирования
    let inputElement;
    
    if (field.type === 'select') {
        inputElement = document.createElement('select');
        inputElement.className = 'form-control form-control-sm';
        field.options.forEach(option => {
            const optElement = document.createElement('option');
            optElement.value = option;
            optElement.textContent = option;
            if (originalValue === option) optElement.selected = true;
            inputElement.appendChild(optElement);
        });
    } else if (field.type === 'reference') {
        inputElement = document.createElement('select');
        inputElement.className = 'form-control form-control-sm';
        
        const refData = references[field.reference] || [];
        refData.forEach(item => {
            const optElement = document.createElement('option');
            optElement.value = item.id;
            optElement.textContent = `${item.id} - ${item.name || ''}`;
            if (originalValue === item.id) optElement.selected = true;
            inputElement.appendChild(optElement);
        });
        
        if (!refData.length) {
            const optElement = document.createElement('option');
            optElement.value = '';
            optElement.textContent = 'Нет данных в справочнике';
            inputElement.appendChild(optElement);
        }
    } else if (field.type === 'number') {
        inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.className = 'form-control form-control-sm';
        inputElement.value = originalValue || 0;
        if (field.min !== undefined) inputElement.min = field.min;
        if (field.max !== undefined) inputElement.max = field.max;
        if (field.step !== undefined) inputElement.step = field.step;
    } else {
        inputElement = document.createElement('input');
        inputElement.type = field.type || 'text';
        inputElement.className = 'form-control form-control-sm';
        inputElement.value = originalValue || '';
    }
    
    // Заменяем содержимое ячейки на элемент ввода
    cell.innerHTML = '';
    cell.appendChild(inputElement);
    inputElement.focus();
    
    // Обработчик сохранения при потере фокуса или нажатии Enter
    const saveEdit = () => {
        let newValue;
        
        if (field.type === 'number') {
            newValue = parseFloat(inputElement.value) || 0;
            if (field.min !== undefined && newValue < field.min) {
                showToast(`Значение должно быть не меньше ${field.min}`, 'warning');
                cell.innerHTML = originalContent;
                return;
            }
            if (field.max !== undefined && newValue > field.max) {
                showToast(`Значение должно быть не больше ${field.max}`, 'warning');
                cell.innerHTML = originalContent;
                return;
            }
        } else {
            newValue = inputElement.value;
            if (field.required && !newValue) {
                showToast('Это поле обязательно для заполнения', 'warning');
                cell.innerHTML = originalContent;
                return;
            }
        }
        
        rowData[fieldKey] = newValue;
        cell.textContent = field.type === 'reference' ? 
            `${newValue} - ${getReferenceName(field.reference, newValue)}` : 
            newValue;
    };
    
    inputElement.addEventListener('blur', saveEdit);
    inputElement.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') cell.innerHTML = originalContent;
    });
}

// Получение имени из справочника
function getReferenceName(refName, id) {
    const refData = references[refName] || [];
    const item = refData.find(item => item.id === id);
    return item ? item.name || '' : '';
}

// Сохранение текущего файла
function saveCurrentFile() {
    if (!currentFile) {
        showToast('Не выбран файл для сохранения', 'warning');
        return;
    }
    
    allData[currentFile] = currentData;
    showToast(`Изменения в файле ${currentFile} сохранены в памяти`, 'success');
}

// Экспорт текущего файла
function exportCurrentFile() {
    if (!currentFile) {
        showToast('Не выбран файл для экспорта', 'warning');
        return;
    }
    
    const dataStr = JSON.stringify(currentData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${currentFile}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showToast(`Файл ${exportFileDefaultName} экспортирован`, 'success');
}

// Обновление состояния UI
function updateUI() {
    deleteSelectedBtn.disabled = currentData.length === 0 || tableBody.querySelectorAll('.row-selector:checked').length === 0;
}

// Показ уведомлений
function showToast(message, type = 'info') {
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
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);
