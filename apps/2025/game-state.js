// game-state.js - управление состоянием игры (Observer паттерн)
import { logDebug } from './utils.js';

class GameState {
    constructor() {
        this.state = {
            board: Array(9).fill(false),
            moves: 0,
            time: 0,
            gameStatus: 'idle', // 'idle', 'playing', 'won', 'paused'
            soundEnabled: true,
            difficulty: 'medium'
        };
        
        this.observers = [];
    }
    
    // Подписка на изменения состояния
    subscribe(observer) {
        this.observers.push(observer);
        logDebug('Новый наблюдатель добавлен', 'OBSERVER_ADDED');
    }
    
    // Уведомление наблюдателей
    notify() {
        this.observers.forEach(observer => observer(this.state));
        logDebug('Наблюдатели уведомлены', 'OBSERVERS_NOTIFIED');
    }
    
    // Обновление состояния
    updateState(updates) {
        this.state = { ...this.state, ...updates };
        this.notify();
    }
    
    // Сброс игры
    reset(newBoard = null) {
        logDebug('Сброс состояния игры', 'STATE_RESET');
        this.updateState({
            board: newBoard || Array(9).fill(false),
            moves: 0,
            time: 0,
            gameStatus: 'idle'
        });
    }
    
    // Обновление доски
    updateBoard(board) {
        this.updateState({ board });
    }
    
    // Добавление хода
    addMove() {
        this.updateState({ moves: this.state.moves + 1 });
    }
    
    // Обновление времени
    updateTime() {
        this.updateState({ time: this.state.time + 1 });
    }
    
    // Установка статуса игры
    setGameStatus(status) {
        if (['idle', 'playing', 'won', 'paused'].includes(status)) {
            this.updateState({ gameStatus: status });
        }
    }
    
    // Переключение звука
    toggleSound() {
        this.updateState({ soundEnabled: !this.state.soundEnabled });
        logDebug(`Звук ${this.state.soundEnabled ? 'включен' : 'выключен'}`, 'SOUND_TOGGLE');
    }
    
    // Установка сложности
    setDifficulty(difficulty) {
        if (['easy', 'medium', 'hard'].includes(difficulty)) {
            this.updateState({ difficulty });
            logDebug(`Сложность установлена: ${difficulty}`, 'DIFFICULTY_SET');
        }
    }
    
    // Получение текущего состояния
    getState() {
        return this.state;
    }
}

export default GameState;
