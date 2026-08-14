// app.js - основной модуль приложения
import GameState from './game-state.js';
import GameLogic from './game-logic.js';
import GameUI from './game-ui.js';
import { logDebug, formatTime } from './utils.js';

// Инициализация приложения
class LightsOutGame {
    constructor() {
        this.state = new GameState();
        this.logic = new GameLogic();
        this.ui = new GameUI();
        
        this.init();
    }
    
    init() {
        logDebug('Приложение инициализируется', 'APP_INIT');
        
        // Инициализация UI
        this.ui.init(this.state, this.logic);
        
        // Подписка на события изменения состояния
        this.state.subscribe((newState) => {
            logDebug('Состояние обновлено', 'STATE_CHANGE', newState);
            this.ui.update(newState);
            
            // Проверка победы
            if (this.logic.checkWin(newState.board)) {
                logDebug('Игрок победил!', 'GAME_WIN');
                this.state.setGameStatus('won');
                this.ui.showWinModal(newState.moves, newState.time);
                
                // Воспроизведение звука победы
                const winSound = document.getElementById('win-sound');
                if (this.state.soundEnabled) {
                    winSound.currentTime = 0;
                    winSound.play().catch(e => logDebug('Ошибка воспроизведения звука: ' + e, 'AUDIO_ERROR'));
                }
            }
        });
        
        // Запуск таймера
        this.startTimer();
        
        // Начальная игра
        this.newGame();
        
        logDebug('Приложение готово', 'APP_READY');
    }
    
    startTimer() {
        setInterval(() => {
            if (this.state.gameStatus === 'playing') {
                this.state.updateTime();
            }
        }, 1000);
    }
    
    newGame() {
        logDebug('Новая игра начата', 'NEW_GAME');
        const board = this.logic.generateRandomBoard();
        this.state.reset(board);
        this.state.setGameStatus('playing');
    }
}

// Запуск приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    window.game = new LightsOutGame();
    
    // Экспорт для отладки в консоли
    window.debug = {
        state: window.game.state,
        logic: window.game.logic,
        ui: window.game.ui
    };
    
    logDebug('DOM загружен, игра запущена', 'DOM_READY');
});
