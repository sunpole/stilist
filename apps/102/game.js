// Инициализация Day.js
dayjs.extend(dayjs_plugin_duration);

// Главный объект игры
const game = {
    // Ресурсы игрока
    money: 0,
    resources: {
        coal: 0,
        copper: 0,
        iron: 0,
        gold: 0
    },
    
    // Игровые объекты
    workers: [],
    mineLevel: 1,
    unlockedMines: ['coal'],
    startTime: null,
    
    // Цены и баланс
    prices: {
        worker: 50,
        upgrade: 100,
        copperMine: 500,
        ironMine: 2000,
        goldMine: 10000
    },
    
    // Доходность ресурсов
    resourceValue: {
        coal: 1,
        copper: 5,
        iron: 20,
        gold: 100
    },
    
    // Инициализация
    init() {
        console.log('🎮 Запуск Idle Miner...');
        
        // Проверяем браузер
        this.checkBrowserSupport();
        
        // Загружаем сохранение
        this.loadGame();
        
        // Запускаем таймер
        this.startTime = dayjs();
        this.updatePlayTime();
        
        // Запускаем игровой цикл
        this.startGameLoop();
        
        // Инициализируем Phaser
        this.initPhaser();
        
        // Обновляем интерфейс
        this.updateUI();
        
        console.log('✅ Игра запущена!');
    },
    
    // Проверка браузера
    checkBrowserSupport() {
        console.log('🔍 Возможности браузера:');
        console.log('- LocalStorage:', Modernizr.localstorage);
        console.log('- ES6:', Modernizr.es6);
        console.log('- Canvas:', Modernizr.canvas);
    },
    
    // Загрузка сохранения
    async loadGame() {
        try {
            const saved = await localforage.getItem('idleMiner_save');
            if (saved) {
                this.money = saved.money || 0;
                this.resources = saved.resources || this.resources;
                this.workers = saved.workers || [];
                this.mineLevel = saved.mineLevel || 1;
                this.unlockedMines = saved.unlockedMines || ['coal'];
                console.log('💾 Прогресс загружен');
            }
        } catch (error) {
            console.log('❌ Ошибка загрузки:', error);
        }
    },
    
    // Сохранение игры
    async saveGame() {
        try {
            await localforage.setItem('idleMiner_save', {
                money: this.money,
                resources: this.resources,
                workers: this.workers,
                mineLevel: this.mineLevel,
                unlockedMines: this.unlockedMines,
                saveTime: dayjs().format()
            });
        } catch (error) {
            console.log('❌ Ошибка сохранения:', error);
        }
    },
    
    // Игровой цикл (вызывается каждую секунду)
    startGameLoop() {
        setInterval(() => {
            this.autoMine(); // Автоматическая добыча
            this.updateUI(); // Обновление интерфейса
            this.saveGame(); // Автосохранение
        }, 1000);
    },
    
    // Ручная добыча (по клику)
    mine() {
        let minedResources = {};
        
        // Добываем из всех открытых шахт
        this.unlockedMines.forEach(mineType => {
            const amount = this.getMineYield(mineType);
            this.resources[mineType] += amount;
            minedResources[mineType] = amount;
        });
        
        // Продаем добытую руду
        this.sellResources();
        
        // Анимация добычи
        this.mineAnimation(minedResources);
        
        console.log('⛏️ Добыто:', minedResources);
    },
    
    // Автоматическая добыча (рабочими)
    autoMine() {
        if (this.workers.length === 0) return;
        
        let totalMined = {};
        
        this.workers.forEach(worker => {
            this.unlockedMines.forEach(mineType => {
                const amount = worker.power * this.getMineYield(mineType);
                this.resources[mineType] += amount;
                totalMined[mineType] = (totalMined[mineType] || 0) + amount;
            });
        });
        
        // Продаем автоматически добытую руду
        this.sellResources();
        
        // Обновляем статистику рабочих
        this.updateWorkersPanel();
    },
    
    // Расчет добычи с учетом уровня шахты
    getMineYield(mineType) {
        const baseYield = {
            coal: 1,
            copper: 0.5,
            iron: 0.2,
            gold: 0.05
        };
        
        return baseYield[mineType] * this.mineLevel;
    },
    
    // Продажа всех ресурсов
    sellResources() {
        let totalIncome = 0;
        
        Object.keys(this.resources).forEach(resource => {
            const sold = Math.floor(this.resources[resource]);
            const income = sold * this.resourceValue[resource];
            
            this.money += income;
            this.resources[resource] -= sold;
            totalIncome += income;
        });
        
        return totalIncome;
    },
    
    // Нанять рабочего
    hireWorker() {
        if (this.money >= this.prices.worker) {
            this.money -= this.prices.worker;
            
            const worker = {
                id: Date.now(),
                power: 1, // базовая производительность
                hireTime: dayjs()
            };
            
            this.workers.push(worker);
            this.prices.worker = Math.floor(this.prices.worker * 1.5); // Увеличиваем цену
            
            console.log('👷 Нанят новый рабочий!');
            this.updateUI();
        } else {
            alert('❌ Недостаточно денег для найма рабочего!');
        }
    },
    
    // Улучшить шахту
    upgradeMine() {
        if (this.money >= this.prices.upgrade) {
            this.money -= this.prices.upgrade;
            this.mineLevel++;
            this.prices.upgrade = Math.floor(this.prices.upgrade * 2);
            
            console.log('⬆️ Шахта улучшена до уровня', this.mineLevel);
            this.updateUI();
        } else {
            alert('❌ Недостаточно денег для улучшения!');
        }
    },
    
    // Открыть новую шахту
    unlockMine(mineType) {
        const cost = this.prices[mineType + 'Mine'];
        
        if (this.money >= cost && !this.unlockedMines.includes(mineType)) {
            this.money -= cost;
            this.unlockedMines.push(mineType);
            
            console.log('🆕 Открыта шахта:', mineType);
            this.updateUI();
            
            // Анимация открытия новой шахты
            this.unlockAnimation(mineType);
        } else {
            alert('❌ Недостаточно денег или шахта уже открыта!');
        }
    },
    
    // Расчет дохода в секунду
    getIncomePerSecond() {
        let income = 0;
        
        this.workers.forEach(worker => {
            this.unlockedMines.forEach(mineType => {
                income += worker.power * this.getMineYield(mineType) * this.resourceValue[mineType];
            });
        });
        
        return income.toFixed(1);
    },
    
    // Обновление интерфейса
    updateUI() {
        // Ресурсы
        document.getElementById('money').textContent = Math.floor(this.money);
        document.getElementById('coal').textContent = this.resources.coal.toFixed(1);
        document.getElementById('copper').textContent = this.resources.copper.toFixed(1);
        document.getElementById('iron').textContent = this.resources.iron.toFixed(1);
        document.getElementById('gold').textContent = this.resources.gold.toFixed(1);
        document.getElementById('workers').textContent = this.workers.length;
        
        // Статистика
        document.getElementById('income-per-second').textContent = this.getIncomePerSecond();
        document.getElementById('mine-level').textContent = this.mineLevel;
        
        // Цены в магазине
        document.getElementById('worker-cost').textContent = this.prices.worker;
        document.getElementById('upgrade-cost').textContent = this.prices.upgrade;
        document.getElementById('copper-mine-cost').textContent = this.prices.copperMine;
        document.getElementById('iron-mine-cost').textContent = this.prices.ironMine;
        document.getElementById('gold-mine-cost').textContent = this.prices.goldMine;
        document.getElementById('current-level').textContent = this.mineLevel;
        document.getElementById('worker-power').textContent = this.workers.length;
        
        // Блокировка кнопок если не хватает денег
        this.updateShopButtons();
    },
    
    // Блокировка кнопок магазина
    updateShopButtons() {
        const shopItems = document.querySelectorAll('.shop-item');
        shopItems.forEach(item => {
            // Пропускаем не-кнопки
            if (!item.onclick) return;
            
            // Здесь можно добавить логику блокировки
            // Например: if (this.money < requiredPrice) item.classList.add('disabled');
        });
    },
    
    // Обновление панели рабочих
    updateWorkersPanel() {
        const workersStats = document.getElementById('workers-stats');
        
        if (this.workers.length === 0) {
            workersStats.innerHTML = 'Нет рабочих - наймите первого для автоматической добычи!';
        } else {
            workersStats.innerHTML = `
                <strong>${this.workers.length} рабочих</strong><br>
                <small>Добывают: ${this.getIncomePerSecond()}$/сек</small>
            `;
        }
    },
    
    // Обновление времени игры
    updatePlayTime() {
        setInterval(() => {
            if (this.startTime) {
                const duration = dayjs.duration(dayjs().diff(this.startTime));
                const hours = Math.floor(duration.asHours());
                const minutes = duration.minutes();
                const seconds = duration.seconds();
                
                const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                document.getElementById('play-time').textContent = timeString;
            }
        }, 1000);
    },
    
    // Phaser инициализация
    initPhaser() {
        const isMobile = this.isMobileDevice();
        const isOldAndroid = /Android [4-7]/.test(navigator.userAgent);
        
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 200,
            parent: 'game-container',
            backgroundColor: '#1a5276',
            
            // Оптимизации для слабых устройств
            render: {
                pixelArt: isOldAndroid,
                antialias: !isOldAndroid
            },
            fps: {
                target: isOldAndroid ? 30 : 60,
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
    
    // Phaser: загрузка
    preload() {
        console.log('🎨 Phaser: Загружаем assets...');
    },
    
    // Phaser: создание сцены
    create() {
        console.log('🎨 Phaser: Создаем шахту...');
        this.graphics = this.phaserGame.scene.scenes[0].add.graphics();
        this.drawMineShaft();
    },
    
    // Phaser: игровой цикл
    update() {
        // Анимации можно добавить здесь
    },
    
    // Рисуем шахту
    drawMineShaft() {
        this.graphics.clear();
        
        // Земля
        this.graphics.fillStyle(0x8b4513);
        this.graphics.fillRect(0, 100, 800, 100);
        
        // Шахтные стволы для каждой открытой шахты
        const mines = this.unlockedMines;
        const shaftWidth = 800 / (mines.length + 1);
        
        mines.forEach((mineType, index) => {
            const x = (index + 1) * shaftWidth - 20;
            const color = this.getMineColor(mineType);
            
            // Шахтный ствол
            this.graphics.fillStyle(color);
            this.graphics.fillRect(x, 50, 40, 50);
            
            // Надпись
            const text = this.phaserGame.scene.scenes[0].add.text(x + 5, 30, 
                this.getMineSymbol(mineType), 
                { fontSize: '20px', fill: '#fff' }
            );
        });
    },
    
    // Цвета для шахт
    getMineColor(mineType) {
        const colors = {
            coal: 0x2c3e50,
            copper: 0xd35400,
            iron: 0x7f8c8d,
            gold: 0xf39c12
        };
        return colors[mineType] || 0x000000;
    },
    
    // Символы для шахт
    getMineSymbol(mineType) {
        const symbols = {
            coal: '⛏️',
            copper: '🔶', 
            iron: '⚙️',
            gold: '⭐'
        };
        return symbols[mineType] || '?';
    },
    
    // Анимация добычи
    mineAnimation(minedResources) {
        if (!this.graphics) return;
        
        // Мигание шахты
        this.graphics.clear();
        this.graphics.fillStyle(0xffffff);
        this.drawMineShaft();
        
        // Возвращаем нормальный вид через 100ms
        setTimeout(() => {
            this.graphics.clear();
            this.drawMineShaft();
        }, 100);
    },
    
    // Анимация открытия шахты
    unlockAnimation(mineType) {
        if (!this.graphics) return;
        
        // Перерисовываем с новой шахтой
        this.drawMineShaft();
        
        // Эффект "вспышки" для новой шахты
        const scene = this.phaserGame.scene.scenes[0];
        const mines = this.unlockedMines;
        const shaftWidth = 800 / (mines.length + 1);
        const index = mines.indexOf(mineType);
        const x = (index + 1) * shaftWidth - 20;
        
        const flash = scene.add.graphics();
        flash.fillStyle(0xffffff, 0.8);
        flash.fillRect(x - 10, 40, 60, 60);
        
        // Убираем вспышку через 500ms
        setTimeout(() => {
            flash.destroy();
        }, 500);
    },
    
    // Проверка мобильного устройства
    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
};

// Запуск игры
window.addEventListener('load', () => {
    game.init();
});

// Автосохранение при закрытии
window.addEventListener('beforeunload', () => {
    game.saveGame();
});
