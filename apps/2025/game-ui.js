// game-ui.js - отрисовка интерфейса и обработка событий
import { logDebug, formatTime } from './utils.js';

class GameUI {
    constructor() {
        this.elements = {};
        this.cellElements = [];
    }
    
    init(stateManager, gameLogic) {
        this.stateManager = stateManager;
        this.gameLogic = gameLogic;
        
        this.cacheElements();
        this.bindEvents();
        this.render();
        
        logDebug('UI инициализирован', 'UI_INIT');
    }
    
    cacheElements() {
        // Основные элементы
        this.elements = {
            gameBoard: document.getElementById('game-board'),
            moveCount: document.getElementById('move-count'),
            timer: document.getElementById('timer'),
            difficulty: document.getElementById('difficulty'),
            gameStatus: document.getElementById('game-status'),
            newGameBtn: document.getElementById('new-game-btn'),
            hintBtn: document.getElementById('hint-btn'),
            soundToggle: document.getElementById('sound-toggle'),
            winModal: document.getElementById('win-modal'),
            hintModal: document.getElementById('hint-modal'),
            playAgainBtn: document.getElementById('play-again-btn'),
            closeModalBtn: document.getElementById('close-modal-btn'),
            closeHintBtn: document.getElementById('close-hint-btn'),
            debugToggle: document.getElementById('debug-toggle'),
            debugConsole: document.getElementById('debug-console'),
            winMoves: document.getElementById('win-moves'),
            winTime: document.getElementById('win-time'),
            hintText: document.getElementById('hint-text')
        };
        
        logDebug('Элементы DOM кэшированы', 'DOM_CACHED');
    }
    
    bindEvents() {
        // Создание клеток игрового поля
        this.createBoardCells();
        
        // Кнопки управления
        this.elements.newGameBtn.addEventListener('click', () => this.handleNewGame());
        this.elements.hintBtn.addEventListener('click', () => this.handleHint());
        this.elements.soundToggle.addEventListener('click', () => this.handleSoundToggle());
        
        // Модальные окна
        this.elements.playAgainBtn.addEventListener('click', () => this.handleNewGame());
        this.elements.closeModalBtn.addEventListener('click', () => this.hideModal(this.elements.winModal));
        this.elements.closeHintBtn.addEventListener('click', () => this.hideModal(this.elements.hintModal));
        
        // Отладка
        this.elements.debugToggle.addEventListener('click', () => this.toggleDebugConsole());
        
        // Обработка кликов по клеткам
        this.cellElements.forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleCellClick(index + 1));
            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.handleCellClick(index + 1);
            }, { passive: false });
        });
        
        logDebug('События привязаны', 'EVENTS_BOUND');
    }
    
    createBoardCells() {
        this.elements.gameBoard.innerHTML = '';
        this.cellElements = [];
        
        for (let i = 1; i <= 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell off';
            cell.dataset.cell = i;
            
            const number = document.createElement('div');
            number.className = 'cell-number';
            number.textContent = i;
            
            cell.appendChild(number);
            this.elements.gameBoard.appendChild(cell);
            this.cellElements.push(cell);
        }
        
        logDebug('Игровое поле создано', 'BOARD_CREATED');
    }
    
    handleCellClick(cellNumber) {
        if (this.stateManager.getState().gameStatus !== 'playing') {
            logDebug('Игра не активна, ход не засчитан', 'GAME_INACTIVE');
            return;
        }
        
        logDebug(`Клик по клетке ${cellNumber}`, 'CELL_CLICK');
        
        // Воспроизведение звука
        this.playClickSound();
        
        // Обновление доски через логику игры
        const currentBoard = [...this.stateManager.getState().board];
        const newBoard = this.gameLogic.toggleCell(currentBoard, cellNumber);
        
        // Обновление состояния
        this.stateManager.updateBoard(newBoard);
        this.stateManager.addMove();
        
        // Визуальная обратная связь
        this.animateCellClick(cellNumber);
    }
    
    handleNewGame() {
        logDebug('Запрос новой игры', 'NEW_GAME_REQUEST');
        this.hideModal(this.elements.winModal);
        this.hideModal(this.elements.hintModal);
        
        const newBoard = this.gameLogic.generateRandomBoard();
        this.stateManager.reset(newBoard);
        this.stateManager.setGameStatus('playing');
    }
    
    handleHint() {
        if (this.stateManager.getState().gameStatus !== 'playing') {
            logDebug('Подсказка недоступна - игра не активна', 'HINT_UNAVAILABLE');
            return;
        }
        
        const hintCell = this.gameLogic.getHint(this.stateManager.getState().board);
        
        if (hintCell) {
            this.elements.hintText.textContent = `Попробуйте нажать на клетку ${hintCell}`;
            this.showModal(this.elements.hintModal);
            
            // Подсветка подсказанной клетки
            this.highlightCell(hintCell);
        } else {
            this.elements.hintText.textContent = 'Вы уже близки к победе! Продолжайте в том же духе!';
            this.showModal(this.elements.hintModal);
        }
    }
    
    handleSoundToggle() {
        this.stateManager.toggleSound();
        const icon = this.elements.soundToggle.querySelector('i');
        icon.className = this.stateManager.getState().soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }
    
    animateCellClick(cellNumber) {
        const cell = this.cellElements[cellNumber - 1];
        cell.style.animation = 'pulse 0.3s ease';
        
        setTimeout(() => {
            cell.style.animation = '';
        }, 300);
    }
    
    highlightCell(cellNumber) {
        this.cellElements.forEach(cell => cell.classList.remove('highlight'));
        const cell = this.cellElements[cellNumber - 1];
        cell.classList.add('highlight');
        
        setTimeout(() => {
            cell.classList.remove('highlight');
        }, 3000);
    }
    
    playClickSound() {
        if (this.stateManager.getState().soundEnabled) {
            const clickSound = document.getElementById('click-sound');
            clickSound.currentTime = 0;
            clickSound.play().catch(e => logDebug('Ошибка воспроизведения звука: ' + e, 'AUDIO_ERROR'));
        }
    }
    
    showModal(modal) {
        modal.classList.add('active');
    }
    
    hideModal(modal) {
        modal.classList.remove('active');
    }
    
    toggleDebugConsole() {
        this.elements.debugConsole.classList.toggle('active');
    }
    
    showWinModal(moves, time) {
        this.elements.winMoves.textContent = moves;
        this.elements.winTime.textContent = formatTime(time);
        this.showModal(this.elements.winModal);
        
        // Анимация победы для клеток
        this.cellElements.forEach(cell => {
            cell.classList.add('win');
        });
    }
    
    update(state) {
        // Обновление клеток
        this.cellElements.forEach((cell, index) => {
            if (state.board[index]) {
                cell.classList.remove('off');
                cell.classList.add('on');
                cell.textContent = 'ON';
            } else {
                cell.classList.remove('on');
                cell.classList.add('off');
                cell.textContent = 'OFF';
            }
        });
        
        // Обновление статистики
        this.elements.moveCount.textContent = state.moves;
        this.elements.timer.textContent = formatTime(state.time);
        this.elements.difficulty.textContent = this.getDifficultyText(state.difficulty);
        
        // Обновление статуса игры
        this.updateGameStatus(state.gameStatus);
        
        logDebug('UI обновлен', 'UI_UPDATED');
    }
    
    updateGameStatus(status) {
        const statusTexts = {
            'idle': 'Готов к игре. Нажмите "Новая игра" чтобы начать!',
            'playing': 'Игра идет...',
            'won': 'Поздравляем! Вы победили!',
            'paused': 'Игра на паузе'
        };
        
        this.elements.gameStatus.textContent = statusTexts[status] || '';
        
        if (status === 'won') {
            this.elements.gameStatus.classList.add('text-success');
        } else {
            this.elements.gameStatus.classList.remove('text-success');
        }
    }
    
    getDifficultyText(level) {
        const levels = {
            'easy': 'Легкая',
            'medium': 'Средняя',
            'hard': 'Сложная'
        };
        return levels[level] || 'Средняя';
    }
    
    render() {
        this.update(this.stateManager.getState());
        logDebug('UI отрисован', 'UI_RENDERED');
    }
}

export default GameUI;
