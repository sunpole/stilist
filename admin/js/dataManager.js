// Центральный модуль для управления данными
class DataManager {
    constructor() {
        this.currentData = null;
        this.currentView = 'table';
    }

    setData(data) {
        if (Array.isArray(data)) {
            this.currentData = data;
            console.log('Данные загружены:', data);
            this.onDataChange();
            return true;
        }
        console.error('Данные должны быть массивом');
        return false;
    }

    getData() {
        return this.currentData;
    }

    updateRow(index, newData) {
        if (this.currentData && this.currentData[index]) {
            this.currentData[index] = { ...this.currentData[index], ...newData };
            this.onDataChange();
            return true;
        }
        return false;
    }

    addRow(newRow) {
        if (this.currentData) {
            this.currentData.push(newRow);
            this.onDataChange();
            return true;
        }
        return false;
    }

    deleteRow(index) {
        if (this.currentData && this.currentData[index]) {
            this.currentData.splice(index, 1);
            this.onDataChange();
            return true;
        }
        return false;
    }

    duplicateRow(index) {
        if (this.currentData && this.currentData[index]) {
            const original = this.currentData[index];
            const duplicate = { ...original };
            this.currentData.splice(index + 1, 0, duplicate);
            this.onDataChange();
            return true;
        }
        return false;
    }

    onDataChange() {
        // Здесь будет уведомление других модулей об изменении данных
        console.log('Данные изменены:', this.currentData);
    }
}

// Создаем глобальный экземпляр менеджера данных
window.dataManager = new DataManager();
