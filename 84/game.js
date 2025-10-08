// Инициализация Day.js
dayjs.locale('ru');
dayjs.extend(dayjs_plugin_isoWeek);
dayjs.extend(dayjs_plugin_isBetween);

class TypographyGame {
    constructor() {
        this.config = {
            startDate: '2025-09-01 09:00:00',
            workDay: { start: 9, end: 17 },
            gameHourToRealSeconds: 7.5,
            baseDrive: 80,
            employeeDriveBonus: 80,
            drivePerHour: 1,
            actionsPerOrder: 7,
            baseEmployeeSpeed: 500,
            workDays: [1, 2, 3, 4, 5],
            // Базовая система генерации заказов
            baseOrdersPerDay: 8,
            reputationImpact: 0.1, // 10% увеличения заказов за каждые 10 репутации
            maxReputationBonus: 2.0, // Максимум в 2 раза больше заказов
            // Система редких дней
            rareDayChance: 0.025, // 2.5% шанс на редкий день (1/40)
            rareDayMultiplier: { min: 1.1, max: 1.5 }, // Множитель для редких дней
            normalDayMultiplier: { min: 0.2, max: 1.0 } // Множитель для обычных дней
        };

        this.state = {
            currentTime: dayjs(this.config.startDate),
            drive: this.config.baseDrive,
            maxDrive: this.config.baseDrive,
            money: 1000,
            exp: 0,
            reputation: 0,
            level: 1,
            employees: [],
            freeEmployees: 0,
            orders: {
                available: [],
                active: [],
                completed: 0
            },
            departments: [
                { id: 1, name: 'Дизайн', employees: 0, queue: [] },
                { id: 2, name: 'Печать', employees: 0, queue: [] },
                { id: 3, name: 'Резка', employees: 0, queue: [] },
                { id: 4, name: 'Фальцовка', employees: 0, queue: [] },
                { id: 5, name: 'Брошюровка', employees: 0, queue: [] },
                { id: 6, name: 'Ламинация', employees: 0, queue: [] },
                { id: 7, name: 'Упаковка', employees: 0, queue: [] }
            ],
            employeeIdCounter: 1,
            orderIdCounter: 1,
            lastDriveUpdate: Date.now(),
            // Новая система генерации заказов
            dailyOrders: {
                targetCount: 0,
                generatedCount: 0,
                isRareDay: false,
                lastRareDay: null
            }
        };

        this.init();
    }

    init() {
        this.generateDepartmentsHTML();
        this.setupEventListeners();
        this.startGameLoop();
        this.calculateDailyOrders(); // Рассчитываем заказы на первый день
        this.generateInitialOrders();
        this.updateDisplay();
    }

    // НОВАЯ ФУНКЦИЯ: Расчет количества заказов на день
    calculateDailyOrders() {
        // Рассчитываем максимальное количество заказов на основе драйва
        const totalEmployees = this.state.departments.reduce((sum, dept) => sum + dept.employees, 0);
        const passiveDrain = (1 + totalEmployees) * 8; // Пассивный расход за день
        const availableDrive = this.state.maxDrive - passiveDrain;
        const maxPossibleOrders = Math.floor(availableDrive / this.config.actionsPerOrder);

        // Бонус от репутации (ограниченный максимумом)
        const reputationBonus = Math.min(
            1 + (this.state.reputation * this.config.reputationImpact),
            this.config.maxReputationBonus
        );

        // Определяем, редкий ли сегодня день
        const daysSinceLastRareDay = this.state.dailyOrders.lastRareDay ? 
            this.state.currentTime.diff(this.state.dailyOrders.lastRareDay, 'day') : 999;
        
        const canBeRareDay = daysSinceLastRareDay >= 40;
        const isRareDay = canBeRareDay && Math.random() < this.config.rareDayChance;

        // Выбираем множитель в зависимости от типа дня
        let multiplier;
        if (isRareDay) {
            multiplier = this.config.rareDayMultiplier.min + 
                Math.random() * (this.config.rareDayMultiplier.max - this.config.rareDayMultiplier.min);
            this.state.dailyOrders.lastRareDay = this.state.currentTime;
            this.showNotification("🌟 РЕДКИЙ ДЕНЬ! Сегодня ожидается больше заказов!");
        } else {
            multiplier = this.config.normalDayMultiplier.min + 
                Math.random() * (this.config.normalDayMultiplier.max - this.config.normalDayMultiplier.min);
        }

        // Рассчитываем целевое количество заказов
        const baseOrders = maxPossibleOrders * reputationBonus;
        const targetOrders = Math.max(1, Math.floor(baseOrders * multiplier));

        // Сохраняем в состояние
        this.state.dailyOrders = {
            targetCount: targetOrders,
            generatedCount: 0,
            isRareDay: isRareDay,
            lastRareDay: this.state.dailyOrders.lastRareDay
        };

        console.log(`Расчет заказов на день:`, {
            maxPossibleOrders,
            reputation: this.state.reputation,
            reputationBonus,
            multiplier,
            targetOrders,
            isRareDay
        });
    }

    // ОБНОВЛЕННАЯ ФУНКЦИЯ: Генерация заказа с учетом дневного лимита
    generateOrder() {
        // Проверяем, не превысили ли дневной лимит
        if (this.state.dailyOrders.generatedCount >= this.state.dailyOrders.targetCount) {
            return false;
        }

        // Определяем редкость заказа (в редкие дни больше шанс на редкие заказы)
        const rand = Math.random();
        let rarity, rewardMultiplier, timeMultiplier, reputationReward, reputationPenalty, expReward;

        // Базовая вероятность в обычные дни
        let legendaryChance = 0.05;
        let rareChance = 0.20;

        // Увеличиваем шанс редких заказов в редкие дни
        if (this.state.dailyOrders.isRareDay) {
            legendaryChance = 0.10;
            rareChance = 0.30;
        }

        if (rand < legendaryChance) {
            rarity = 'legendary';
            rewardMultiplier = 5;
            timeMultiplier = 3;
            reputationReward = 5;
            reputationPenalty = -3;
            expReward = 50;
        } else if (rand < legendaryChance + rareChance) {
            rarity = 'rare';
            rewardMultiplier = 2;
            timeMultiplier = 1.5;
            reputationReward = 2;
            reputationPenalty = -1;
            expReward = 20;
        } else {
            rarity = 'common';
            rewardMultiplier = 1;
            timeMultiplier = 1;
            reputationReward = 1;
            reputationPenalty = -1;
            expReward = 10;
        }

        const baseReward = 50 + (Math.floor(Math.random() * 50));
        const baseTime = 2 + (Math.floor(Math.random() * 4));
        
        const orderTypes = [
            { name: 'Визитки' }, { name: 'Брошюры' }, { name: 'Каталоги' },
            { name: 'Плакаты' }, { name: 'Листовки' }, { name: 'Буклеты' },
            { name: 'Открытки' }, { name: 'Бланки' }, { name: 'Приглашения' }
        ];

        const orderType = orderTypes[Math.floor(Math.random() * orderTypes.length)];
        
        const order = {
            id: this.state.orderIdCounter++,
            name: `${orderType.name} #${Math.floor(Math.random() * 1000)}`,
            type: orderType.name,
            rarity: rarity,
            reward: Math.floor(baseReward * rewardMultiplier),
            deadline: this.state.currentTime.add(baseTime * timeMultiplier, 'hour'),
            reputationReward: reputationReward,
            reputationPenalty: reputationPenalty,
            expReward: expReward,
            currentDept: 0,
            progress: 0,
            accepted: false
        };

        this.state.orders.available.push(order);
        this.state.dailyOrders.generatedCount++;

        // Показываем прогресс генерации заказов в редкие дни
        if (this.state.dailyOrders.isRareDay && this.state.dailyOrders.generatedCount % 3 === 0) {
            const remaining = this.state.dailyOrders.targetCount - this.state.dailyOrders.generatedCount;
            if (remaining > 0) {
                this.showNotification(`Редкий день: осталось сгенерировать ${remaining} заказов`);
            }
        }

        return true;
    }

    generateInitialOrders() {
        // Генерируем первые заказы дня
        const initialOrders = Math.min(3, this.state.dailyOrders.targetCount);
        for (let i = 0; i < initialOrders; i++) {
            this.generateOrder();
        }
    }

    // ОБНОВЛЕННАЯ ФУНКЦИЯ: Переход на следующий день
    nextWorkDay() {
        let nextDay = this.state.currentTime.add(1, 'day');
        
        while (!this.config.workDays.includes(nextDay.isoWeekday())) {
            nextDay = nextDay.add(1, 'day');
        }
        
        this.state.currentTime = nextDay.set('hour', this.config.workDay.start).set('minute', 0);
        this.restoreDrive();
        
        // Пересчитываем заказы на новый день
        this.calculateDailyOrders();
        this.generateInitialOrders();
        
        const dayInfo = this.state.dailyOrders.isRareDay ? " (🌟 РЕДКИЙ ДЕНЬ)" : "";
        this.showNotification(`Начался новый рабочий день! ${this.state.currentTime.format('D MMMM YYYY')}${dayInfo}\nЦелевое количество заказов: ${this.state.dailyOrders.targetCount}`);
    }

    // ОБНОВЛЕННАЯ ФУНКЦИЯ: Старт игрового цикла
    startGameLoop() {
        // Основной игровой цикл (обновление каждую секунду)
        this.gameInterval = setInterval(() => {
            this.updateGameTime();
            this.updateDrive();
            this.processEmployees();
            this.updateDayProgress();
            this.updateDisplay();
            this.checkDayEnd();
            this.removeExpiredOrders();
        }, 1000);

        // Генерация новых заказов - теперь зависит от дневного лимита
        this.orderInterval = setInterval(() => {
            if (this.isWorkTime()) {
                // Генерируем заказы чаще, если у нас меньше 5 доступных и не достигнут дневной лимит
                if (this.state.orders.available.length < 5 && 
                    this.state.dailyOrders.generatedCount < this.state.dailyOrders.targetCount) {
                    this.generateOrder();
                }
            }
        }, 8000); // Увеличили интервал до 8 секунд

        // Автоматическая обработка сотрудниками
        this.employeeInterval = setInterval(() => {
            if (this.isWorkTime()) {
                this.processEmployeeWork();
            }
        }, this.config.baseEmployeeSpeed);
    }

    // ОБНОВЛЕННАЯ ФУНКЦИЯ: Отображение информации о дне
    updateDisplay() {
        // Ресурсы
        document.getElementById('driveValue').textContent = 
            `${Math.floor(this.state.drive)}/${this.state.maxDrive}`;
        document.getElementById('moneyValue').textContent = 
            `${this.state.money.toLocaleString()} ₽`;
        document.getElementById('expValue').textContent = this.state.exp;
        document.getElementById('reputationValue').textContent = this.state.reputation;

        // Добавляем информацию о заказах дня в календарь
        const calendar = document.getElementById('calendarPanel');
        const dayInfo = this.state.dailyOrders.isRareDay ? " 🌟" : "";
        calendar.textContent = 
            `${this.state.currentTime.format('D MMMM YYYY, HH:mm (dddd)')}${dayInfo} | Заказы: ${this.state.dailyOrders.generatedCount}/${this.state.dailyOrders.targetCount}`;

        // Заказы
        this.updateOrdersDisplay();
        this.updateActiveOrdersDisplay();
        this.updateOrderBadges();

        // Кнопки отделов
        this.updateDepartmentButtons();
        this.updateEmployeeDisplays();
    }

    // Остальные функции остаются без изменений...
    // [Здесь должны быть все остальные функции из предыдущей версии:
    // setupEventListeners, updateGameTime, updateDrive, updateDayProgress, 
    // checkDayEnd, isWorkDay, isWorkTime, restoreDrive, removeExpiredOrders,
    // acceptOrder, processDepartment, processEmployeeWork, completeOrder,
    // hireEmployee, assignEmployee, unassignEmployee, updateEmployeeDisplays,
    // updateOrderBadges, showNotification, updateOrdersDisplay, updateActiveOrdersDisplay,
    // updateDepartmentButtons, processEmployees, generateDepartmentsHTML, destroy]

    // ОБНОВЛЕННАЯ ФУНКЦИЯ: Отображение заказов с информацией о дневном лимите
    updateOrdersDisplay() {
        const container = document.getElementById('availableOrders');
        container.innerHTML = '';

        // Показываем информацию о дневном лимите
        const infoElement = document.createElement('div');
        infoElement.style.fontSize = '10px';
        infoElement.style.marginBottom = '8px';
        infoElement.style.padding = '4px';
        infoElement.style.background = this.state.dailyOrders.isRareDay ? '#fff3cd' : '#e9ecef';
        infoElement.style.borderRadius = '3px';
        infoElement.style.textAlign = 'center';
        
        const progress = Math.floor((this.state.dailyOrders.generatedCount / this.state.dailyOrders.targetCount) * 100);
        infoElement.innerHTML = `
            <strong>Заказов сегодня:</strong> ${this.state.dailyOrders.generatedCount}/${this.state.dailyOrders.targetCount} (${progress}%)${this.state.dailyOrders.isRareDay ? ' 🌟 РЕДКИЙ ДЕНЬ' : ''}
        `;
        container.appendChild(infoElement);

        this.state.orders.available.forEach(order => {
            const timeLeft = order.deadline.diff(this.state.currentTime, 'minute');
            const orderElement = document.createElement('div');
            orderElement.className = 'order';
            
            const rarityText = {
                common: 'Обычный',
                rare: 'Редкий', 
                legendary: 'Легендарный'
            };
            
            // Создаем кнопку через createElement для правильного обработчика
            const acceptButton = document.createElement('button');
            acceptButton.className = 'accept-btn';
            acceptButton.textContent = 'Принять заказ';
            acceptButton.onclick = () => {
                this.acceptOrder(order.id);
            };
            
            orderElement.innerHTML = `
                <div class="order-rarity rarity-${order.rarity}">${rarityText[order.rarity]}</div>
                <strong>${order.name}</strong><br>
                Награда: ${order.reward}₽<br>
                Срок: ${timeLeft} мин.<br>
                Репутация: <span style="color: #27ae60">+${order.reputationReward}</span> / 
                <span style="color: #e74c3c">${order.reputationPenalty}</span><br>
                Опыт: +${order.expReward}
            `;
            orderElement.appendChild(acceptButton);
            container.appendChild(orderElement);
        });

        // Если заказов нет, показываем сообщение
        if (this.state.orders.available.length === 0) {
            const emptyElement = document.createElement('div');
            emptyElement.style.textAlign = 'center';
            emptyElement.style.padding = '10px';
            emptyElement.style.color = '#6c757d';
            emptyElement.innerHTML = 'Нет доступных заказов<br><small>Новые появятся в течение дня</small>';
            container.appendChild(emptyElement);
        }
    }

    // ... остальные функции без изменений
}

// Запуск игры
let game;
document.addEventListener('DOMContentLoaded', function() {
    game = new TypographyGame();
});
