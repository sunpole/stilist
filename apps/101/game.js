// Инициализация Day.js с плагинами
dayjs.extend(window.dayjs_plugin_duration);
dayjs.extend(window.dayjs_plugin_relativeTime);

// Главный объект игры
const game = {
    // Данные игры
    gold: 0,
    level: 1,
    health: 100,
    maxHealth: 100,
    damage: 10,
    startTime: null,
    playTime: '00:00',
    
    // Инициализация
    init() {
        console.log('🎮 Инициализация игры...');
        
        // Проверяем возможности браузера
        this.checkBrowserSupport();
        
        // Загружаем сохранения
        this.loadGame();
        
        // Запускаем таймер
        this.startTime = dayjs();
        this.updatePlayTime();
        
        // Запускаем Phaser сцену
        this.initPhaser();
        
        // Обновляем интерфейс
        this.updateUI();
        
        console.log('✅ Игра запущена!');
    },
    
    // Проверка поддержки браузера
    checkBrowserSupport() {
        console.log('🔍 Проверка браузера:');
        console.log('- LocalStorage:', Modernizr.localstorage);
        console.log('- Canvas:', Modernizr.canvas);
        console.log('- ES6:', Modernizr.es6);
        
        if (!Modernizr.localstorage) {
            alert('Внимание: Ваш браузер не поддерживает сохранения!');
        }
    },
    
    // Загрузка сохраненной игры
    async loadGame() {
        try {
            const saved = await localforage.getItem('clickerRPG_save');
            if (saved) {
                this.gold = saved.gold || 0;
                this.level = saved.level || 1;
                this.health = saved.health || 100;
                this.maxHealth = saved.maxHealth || 100;
                this.damage = saved.damage || 10;
                console.log('💾 Игра загружена из сохранения');
            }
        } catch (error) {
            console.log('❌ Ошибка загрузки:', error);
        }
    },
    
    // Сохранение игры
    async saveGame() {
        try {
            await localforage.setItem('clickerRPG_save', {
                gold: this.gold,
                level: this.level,
                health: this.health,
                maxHealth: this.maxHealth,
                damage: this.damage,
                saveTime: dayjs().format()
            });
            console.log('💾 Игра сохранена');
        } catch (error) {
            console.log('❌ Ошибка сохранения:', error);
        }
    },
    
    // Инициализация Phaser
    initPhaser() {
        // Определяем тип устройства
        const isMobile = this.isMobileDevice();
        const isOldAndroid = /Android [4-7]/.test(navigator.userAgent);
        
        console.log('📱 Устройство:', {
            isMobile,
            isOldAndroid,
            userAgent: navigator.userAgent
        });
        
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 400,
            parent: 'game-container',
            backgroundColor: '#2d2d2d',
            
            // НАСТРОЙКИ ДЛЯ СЛАБЫХ УСТРОЙСТВ
            render: {
                pixelArt: isOldAndroid,      // Для старых Android
                antialias: !isOldAndroid     // Отключаем сглаживание
            },
            fps: {
                target: isOldAndroid ? 30 : 60, // Ограничиваем FPS
                forceSetTimeOut: true
            },
            
            scene: {
                preload: this.preload.bind(this),
                create: this.create.bind(this),
                update: this.update.bind(this)
            }
        };
        
        this.phaserGame = new Phaser.Game(config);
    },
    
    // Phaser: загрузка assets
    preload() {
        // Можно загрузить спрайты, но для простоты рисуем примитивы
        console.log('🎨 Phaser: preload');
    },
    
    // Phaser: создание сцены
    create() {
        console.log('🎨 Phaser: create');
        
        // Создаем простую графику
        this.graphics = this.phaserGame.scene.scenes[0].add.graphics();
        
        // Рисуем персонажа
        this.drawCharacter();
        
        // Рисуем врага
        this.drawEnemy();
    },
    
    // Phaser: игровой цикл
    update() {
        // Можно добавить анимации
    },
    
    // Рисуем персонажа
    drawCharacter() {
        this.graphics.fillStyle(0x3498db); // Синий
        this.graphics.fillRect(100, 200, 50, 100); // Тело
        this.graphics.fillRect(80, 180, 90, 20);   // Руки
    },
    
    // Рисуем врага
    drawEnemy() {
        this.graphics.fillStyle(0xe74c3c); // Красный
        this.graphics.fillRect(600, 200, 50, 100); // Тело
        this.graphics.fillRect(580, 180, 90, 20);  // Руки
    },
    
    // Атака!
    attack() {
        // Получаем урон
        const enemyDamage = Math.floor(Math.random() * 5) + 3;
        this.health -= enemyDamage;
        
        // Получаем золото
        const goldEarned = Math.floor(Math.random() * 10) + 5;
        this.gold += goldEarned;
        
        // Проверяем уровень
        if (this.gold > this.level * 50) {
            this.level++;
        }
        
        // Проверяем смерть
        if (this.health <= 0) {
            this.health = 0;
            alert('💀 Вы погибли! Игра будет перезапущена.');
            this.resetGame();
        }
        
        // Обновляем интерфейс и сохраняем
        this.updateUI();
        this.saveGame();
        
        // Анимация атаки в Phaser
        this.attackAnimation();
        
        console.log(`⚔️ Атака! Получено урона: ${enemyDamage}, Заработано: ${goldEarned} золота`);
    },
    
    // Анимация атаки
    attackAnimation() {
        if (this.graphics) {
            this.graphics.clear();
            this.drawCharacter();
            
            // Мигание врага при атаке
            this.graphics.fillStyle(0xff0000);
            this.graphics.fillRect(600, 200, 50, 100);
            
            // Возвращаем цвет через 200ms
            setTimeout(() => {
                this.graphics.clear();
                this.drawCharacter();
                this.drawEnemy();
            }, 200);
        }
    },
    
    // Покупка оружия
    buyWeapon() {
        if (this.gold >= 50) {
            this.gold -= 50;
            this.damage += 5;
            this.updateUI();
            this.saveGame();
            alert('🛡️ Куплен новый меч! Урон +5');
        } else {
            alert('❌ Недостаточно золота!');
        }
    },
    
    // Покупка брони
    buyArmor() {
        if (this.gold >= 30) {
            this.gold -= 30;
            this.maxHealth += 20;
            this.health += 20;
            this.updateUI();
            this.saveGame();
            alert('🛡️ Куплена броня! Здоровье +20');
        } else {
            alert('❌ Недостаточно золота!');
        }
    },
    
    // Лечение
    heal() {
        const healCost = 10;
        if (this.gold >= healCost && this.health < this.maxHealth) {
            this.gold -= healCost;
            this.health = Math.min(this.health + 30, this.maxHealth);
            this.updateUI();
            this.saveGame();
            alert('❤️ Вы полечились!');
        } else {
            alert('❌ Нельзя лечиться!');
        }
    },
    
    // Сброс игры
    resetGame() {
        this.gold = 0;
        this.level = 1;
        this.health = 100;
        this.maxHealth = 100;
        this.damage = 10;
        this.startTime = dayjs();
        
        localforage.removeItem('clickerRPG_save');
        this.updateUI();
    },
    
    // Обновление интерфейса
    updateUI() {
        document.getElementById('gold').textContent = this.gold;
        document.getElementById('level').textContent = this.level;
        document.getElementById('health').textContent = `${this.health}/${this.maxHealth}`;
    },
    
    // Обновление времени игры
    updatePlayTime() {
        setInterval(() => {
            if (this.startTime) {
                const duration = dayjs.duration(dayjs().diff(this.startTime));
                const hours = Math.floor(duration.asHours());
                const minutes = duration.minutes();
                const seconds = duration.seconds();
                
                this.playTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                document.getElementById('play-time').textContent = this.playTime;
            }
        }, 1000);
    },
    
    // Проверка мобильного устройства
    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
};

// Запускаем игру когда страница загрузится
window.addEventListener('load', () => {
    game.init();
});

// Сохраняем игру при закрытии вкладки
window.addEventListener('beforeunload', () => {
    game.saveGame();
});
