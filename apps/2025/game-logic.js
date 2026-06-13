// game-logic.js - логика игры и правила
import { logDebug } from './utils.js';

class GameLogic {
    constructor() {
        this.difficultyLevels = {
            easy: { minMoves: 3, maxMoves: 5 },
            medium: { minMoves: 6, maxMoves: 10 },
            hard: { minMoves: 11, maxMoves: 15 }
        };
        
        this.currentDifficulty = 'medium';
    }
    
    // Генерация случайной доски (гарантированно решаемой)
    generateRandomBoard() {
        logDebug(`Генерация доски со сложностью: ${this.currentDifficulty}`, 'BOARD_GEN');
        
        // Начинаем с полностью включенной доски
        const board = Array(9).fill(true);
        const difficulty = this.difficultyLevels[this.currentDifficulty];
        const movesCount = Math.floor(
            Math.random() * (difficulty.maxMoves - difficulty.minMoves + 1)
        ) + difficulty.minMoves;
        
        logDebug(`Применение ${movesCount} случайных ходов`, 'RANDOM_MOVES');
        
        // Применяем случайные ходы для создания головоломки
        for (let i = 0; i < movesCount; i++) {
            const randomCell = Math.floor(Math.random() * 9) + 1; // 1-9
            this.toggleCell(board, randomCell);
        }
        
        logDebug('Доска сгенерирована', 'BOARD_READY', board);
        return board;
    }
    
    // Переключение клетки по правилам
    toggleCell(board, cellNumber) {
        if (cellNumber < 1 || cellNumber > 9) {
            logDebug(`Неверный номер клетки: ${cellNumber}`, 'INVALID_CELL');
            return board;
        }
        
        logDebug(`Переключение клетки ${cellNumber}`, 'CELL_TOGGLE');
        
        // Индексы для массива (0-8)
        const idx = cellNumber - 1;
        
        // Определяем какие клетки переключать
        let cellsToToggle = [idx];
        
        // Угловые клетки: 1, 3, 7, 9
        if ([1, 3, 7, 9].includes(cellNumber)) {
            // Переключаем клетку и две соседние
            if (cellNumber === 1) cellsToToggle = [0, 1, 3];       // 1 → 1,2,4
            else if (cellNumber === 3) cellsToToggle = [2, 1, 5];  // 3 → 3,2,6
            else if (cellNumber === 7) cellsToToggle = [6, 3, 7];  // 7 → 7,4,8
            else if (cellNumber === 9) cellsToToggle = [8, 5, 7];  // 9 → 9,6,8
        }
        // Боковые клетки: 2, 4, 6, 8
        else if ([2, 4, 6, 8].includes(cellNumber)) {
            // Переключаем всю сторону (3 клетки)
            if (cellNumber === 2) cellsToToggle = [0, 1, 2];       // 2 → 1,2,3
            else if (cellNumber === 4) cellsToToggle = [0, 3, 6];  // 4 → 1,4,7
            else if (cellNumber === 6) cellsToToggle = [2, 5, 8];  // 6 → 3,6,9
            else if (cellNumber === 8) cellsToToggle = [6, 7, 8];  // 8 → 7,8,9
        }
        // Центральная клетка: 5
        else if (cellNumber === 5) {
            // Переключаем крест (5 клеток)
            cellsToToggle = [1, 3, 4, 5, 7];  // 5 → 2,4,5,6,8
        }
        
        // Применяем переключение
        cellsToToggle.forEach(cellIdx => {
            board[cellIdx] = !board[cellIdx];
        });
        
        logDebug(`Переключены клетки: ${cellsToToggle.map(i => i+1).join(', ')}`, 'CELLS_TOGGLED');
        return board;
    }
    
    // Проверка победы (все клетки включены)
    checkWin(board) {
        const allOn = board.every(cell => cell === true);
        logDebug(`Проверка победы: ${allOn ? 'ВЫИГРЫШ' : 'продолжаем'}`, 'WIN_CHECK', {board, allOn});
        return allOn;
    }
    
    // Подсказка: находит оптимальный ход
    getHint(board) {
        logDebug('Генерация подсказки', 'HINT_GEN');
        
        // Простой алгоритм: находим первую выключенную клетку
        // и возвращаем клетку, которая её включает
        const offCells = board
            .map((state, idx) => ({state, idx}))
            .filter(cell => !cell.state);
        
        if (offCells.length === 0) {
            return null; // Все клетки включены
        }
        
        // Берем первую выключенную клетку
        const targetCell = offCells[0].idx + 1;
        
        // Находим клетку, которая переключает целевую
        // Это обратная задача - нам нужно найти клетку, при нажатии на которую
        // переключится наша целевая клетка
        const hintCell = this.findCellThatToggles(targetCell, board);
        
        logDebug(`Подсказка: нажмите клетку ${hintCell}`, 'HINT_FOUND');
        return hintCell;
    }
    
    // Вспомогательный метод для поиска клетки, переключающей целевую
    findCellThatToggles(targetCell, board) {
        // Проходим по всем клеткам и проверяем, переключают ли они целевую
        for (let cell = 1; cell <= 9; cell++) {
            const testBoard = [...board];
            this.toggleCell(testBoard, cell);
            
            // Если целевая клетка изменила состояние
            if (testBoard[targetCell - 1] !== board[targetCell - 1]) {
                return cell;
            }
        }
        
        // Если не нашли, возвращаем случайную
        return Math.floor(Math.random() * 9) + 1;
    }
    
    setDifficulty(level) {
        if (this.difficultyLevels[level]) {
            this.currentDifficulty = level;
            logDebug(`Сложность изменена на: ${level}`, 'DIFFICULTY_CHANGE');
        }
    }
}

export default GameLogic;
