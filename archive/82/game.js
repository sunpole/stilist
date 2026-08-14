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
            // Вероятности заказов по редкости
            orderRarity: {
                common: 0.75,      // 75%
                rare: 0.20,        // 20%
                legendary: 0.05    // 5%
            }
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
            lastDriveUpdate: Date.now()
        };

        this.init();
    }

    init() {
        this.generateDepartmentsHTML();
        this.setupEventListeners();
        this.startGameLoop();
        this.generateInitialOrders();
        this.updateDisplay();
    }

    generateDepartmentsHTML() {
        const container = document.getElementById('departmentsRow');
        container.innerHTML = '';

        this.state.departments.forEach(dept => {
            const deptElement = document.createElement('div');
            deptElement.className = 'department-card';
            deptElement.innerHTML = `
                <div class="department-name">${dept.name}</div>
                <button class="department-btn" data-dept="${dept.id}">
                    Обработать
                    <div class="order-badges">
                        <div class="order-badge badge-legendary" id="badge-legendary-${dept.id}" style="display: none">0</div>
                        <div class="order-badge badge-rare" id="badge-rare-${dept.id}" style="display: none">0</div>
                        <div class="order-badge badge-common" id="badge-common-${dept.id}" style="display: none">0</div>
                    </div>
                </button>
                <div class="employee-controls">
                    <button class="control-btn remove" data-dept="${dept.id}">-</button>
                    <div class="employee-count">${dept.employees}</div>
                    <button class="control-btn add" data-dept="${dept.id}">+</button>
                </div>
            `;
            container.appendChild(deptElement);
        });
    }

    setupEventListeners() {
        // Обработчики кнопок отделов
        document.querySelectorAll('.department-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const deptId = parseInt(e.target.closest('.department-btn').dataset.dept);
                this.processDepartment(deptId);
            });
        });

        // Кнопки добавления/удаления сотрудников
        document.querySelectorAll('.control-btn.add').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const deptId = parseInt(e.target.dataset.dept);
                this.assignEmployee(deptId);
            });
        });

        document.querySelectorAll('.control-btn.remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const deptId = parseInt(e.target.dataset.dept);
                this.unassignEmployee(deptId);
            });
        });

        // Кнопка найма
        document.getElementById('hireButton').addEventListener('click', () => {
            this.hireEmployee();
        });
    }

    startGameLoop() {
        // Основной игровой цикл (обновление каждую секунду)
        setInterval(() => {
            this.updateGameTime();
            this.updateDrive();
            this.processEmployees();
            this.updateDayProgress();
            this.updateDisplay();
            this.checkDayEnd();
            this.removeExpiredOrders();
        }, 1000);

        // Генерация новых заказов
        setInterval(() => {
            if (this.isWorkTime()) {
                this.generateOrder();
            }
        }, 10000); // Новый заказ каждые 10 секунд

        // Автоматическая обработка сотрудниками
        setInterval(() => {
            if (this.isWorkTime()) {
                this.processEmployeeWork();
            }
        }, this.config.baseEmployeeSpeed);
    }

    updateGameTime() {
        // 1 игровой час = 7.5 реальных секунд
        // Каждую реальную секунду добавляем 60/7.5 = 8 минут игрового времени
        this.state.currentTime = this.state.currentTime.add(8, 'minute');
        
        // Обновляем календарь
        document.getElementById('calendarPanel').textContent = 
            this.state.currentTime.format('D MMMM YYYY, HH:mm (dddd)');
    }

    updateDrive() {
        if (this.isWorkTime()) {
            const now = Date.now();
            const deltaTime = (now - this.state.lastDriveUpdate) / 1000;
            
            const totalEmployees = this.state.departments.reduce((sum, dept) => sum + dept.employees, 0);
            const drainPerSecond = this.config.drivePerHour * (1 + totalEmployees) / 3600;
            this.state.drive = Math.max(0, this.state.drive - (drainPerSecond * deltaTime));
            
            this.state.lastDriveUpdate = now;
        }
    }

    updateDayProgress() {
        if (!this.isWorkDay()) return;

        const currentHour = this.state.currentTime.hour();
        const currentMinute = this.state.currentTime.minute();
        const currentTimeDecimal = currentHour + currentMinute / 60;
        
        const workStart = this.config.workDay.start;
        const workEnd = this.config.workDay.end;
        const workDuration = workEnd - workStart;
        
        const progress = Math.min(100, Math.max(0, 
            ((currentTimeDecimal - workStart) / workDuration) * 100
        ));

        const progressBar = document.getElementById('dayProgressBar');
        progressBar.style.width = `${progress}%`;
    }

    checkDayEnd() {
        if (!this.isWorkDay()) return;

        const currentHour = this.state.currentTime.hour();
        const currentMinute = this.state.currentTime.minute();
        
        if (currentHour >= this.config.workDay.end && currentMinute >= 0) {
            this.nextWorkDay();
        }
    }

    nextWorkDay() {
        let nextDay = this.state.currentTime.add(1, 'day');
        
        while (!this.config.workDays.includes(nextDay.isoWeekday())) {
            nextDay = nextDay.add(1, 'day');
        }
        
        this.state.currentTime = nextDay.set('hour', this.config.workDay.start).set('minute', 0);
        this.restoreDrive();
        
        this.showNotification(`Начался новый рабочий день! ${this.state.currentTime.format('D MMMM YYYY')}`);
    }

    isWorkDay() {
        const dayOfWeek = this.state.currentTime.isoWeekday();
        return this.config.workDays.includes(dayOfWeek);
    }

    isWorkTime() {
        if (!this.isWorkDay()) return false;
        
        const currentHour = this.state.currentTime.hour();
        const currentMinute = this.state.currentTime.minute() / 60;
        const currentTime = currentHour + currentMinute;
        
        return currentTime >= this.config.workDay.start && 
               currentTime < this.config.workDay.end;
    }

    restoreDrive() {
        this.state.drive = this.state.maxDrive;
    }

    generateOrder() {
        // Определяем редкость заказа
        const rand = Math.random();
        let rarity, rewardMultiplier, timeMultiplier, reputationReward, reputationPenalty, expReward;

        if (rand < this.config.orderRarity.legendary) {
            rarity = 'legendary';
            rewardMultiplier = 5;
            timeMultiplier = 3;
            reputationReward = 5;
            reputationPenalty = -3;
            expReward = 50;
        } else if (rand < this.config.orderRarity.legendary + this.config.orderRarity.rare) {
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
    }

    removeExpiredOrders() {
        const now = this.state.currentTime;
        this.state.orders.available = this.state.orders.available.filter(order => {
            const isExpired = now.isAfter(order.deadline);
            if (isExpired) {
                this.showNotification(`Заказ "${order.name}" просрочен и удален!`);
            }
            return !isExpired;
        });
    }

    acceptOrder(orderId) {
        const orderIndex = this.state.orders.available.findIndex(o => o.id === orderId);
        if (orderIndex === -1) return;

        const order = this.state.orders.available[orderIndex];
        
        if (this.state.drive < this.config.actionsPerOrder) {
            this.showNotification('Недостаточно драйва для принятия заказа!');
            return;
        }

        order.accepted = true;
        order.currentDept = 1;
        this.state.orders.available.splice(orderIndex, 1);
        this.state.orders.active.push(order);

        // Добавляем заказ в очередь первого отдела
        this.state.departments[0].queue.push(order);

        this.showNotification(`Заказ "${order.name}" принят!`);
    }

    processDepartment(deptId) {
        if (!this.isWorkTime() || this.state.drive < 1) {
            if (this.state.drive < 1) {
                this.showNotification('Недостаточно драйва!');
            }
            return;
        }

        const dept = this.state.departments[deptId - 1];
        if (dept.queue.length === 0) return;

        // Сортируем заказы по приоритету: легендарные -> редкие -> обычные
        dept.queue.sort((a, b) => {
            const rarityOrder = { legendary: 3, rare: 2, common: 1 };
            return rarityOrder[b.rarity] - rarityOrder[a.rarity];
        });

        const order = dept.queue[0];
        dept.queue.shift();
        order.currentDept++;
        
        if (order.currentDept <= 7) {
            this.state.departments[order.currentDept - 1].queue.push(order);
        } else {
            this.completeOrder(order.id);
        }

        this.state.drive -= 1;
    }

    processEmployeeWork() {
        if (!this.isWorkTime() || this.state.drive < 1) return;

        this.state.departments.forEach(dept => {
            if (dept.employees > 0 && dept.queue.length > 0 && this.state.drive >= 1) {
                // Сортируем заказы по приоритету
                dept.queue.sort((a, b) => {
                    const rarityOrder = { legendary: 3, rare: 2, common: 1 };
                    return rarityOrder[b.rarity] - rarityOrder[a.rarity];
                });

                const ordersToProcess = Math.min(dept.employees, dept.queue.length);
                
                for (let i = 0; i < ordersToProcess; i++) {
                    if (this.state.drive < 1) break;

                    const order = dept.queue[0];
                    dept.queue.shift();
                    order.currentDept++;

                    if (order.currentDept <= 7) {
                        this.state.departments[order.currentDept - 1].queue.push(order);
                    } else {
                        this.completeOrder(order.id);
                    }

                    this.state.drive -= 1;
                }
            }
        });
    }

    completeOrder(orderId) {
        const orderIndex = this.state.orders.active.findIndex(o => o.id === orderId);
        if (orderIndex === -1) return;

        const order = this.state.orders.active[orderIndex];
        
        const isOnTime = this.state.currentTime.isBefore(order.deadline);
        const reward = isOnTime ? order.reward : Math.floor(order.reward * 0.5);
        const reputationChange = isOnTime ? order.reputationReward : order.reputationPenalty;

        this.state.money += reward;
        this.state.exp += order.expReward;
        this.state.reputation += reputationChange;
        this.state.orders.completed++;

        this.state.orders.active.splice(orderIndex, 1);
        
        const message = isOnTime 
            ? `Заказ "${order.name}" завершен вовремя! +${reward}₽, +${reputationChange} репутации, +${order.expReward} опыта`
            : `Заказ "${order.name}" завершен с опозданием! +${reward}₽, ${reputationChange} репутации, +${order.expReward} опыта`;
        
        this.showNotification(message);
    }

    hireEmployee() {
        const cost = 500;
        if (this.state.money < cost) {
            this.showNotification('Недостаточно денег для найма!');
            return;
        }

        this.state.money -= cost;
        this.state.freeEmployees++;
        this.state.maxDrive += this.config.employeeDriveBonus;
        this.state.drive += this.config.employeeDriveBonus;

        this.showNotification(`Нанят новый сотрудник! Свободных: ${this.state.freeEmployees}`);
    }

    assignEmployee(deptId) {
        if (this.state.freeEmployees <= 0) {
            this.showNotification('Нет свободных сотрудников!');
            return;
        }

        const dept = this.state.departments[deptId - 1];
        dept.employees++;
        this.state.freeEmployees--;

        this.showNotification(`Сотрудник назначен в отдел "${dept.name}"`);
        this.updateEmployeeDisplays();
    }

    unassignEmployee(deptId) {
        const dept = this.state.departments[deptId - 1];
        if (dept.employees <= 0) return;

        dept.employees--;
        this.state.freeEmployees++;

        this.showNotification(`Сотрудник удален из отдела "${dept.name}"`);
        this.updateEmployeeDisplays();
    }

    updateEmployeeDisplays() {
        document.querySelectorAll('.department-card').forEach((card, index) => {
            const countElement = card.querySelector('.employee-count');
            const dept = this.state.departments[index];
            countElement.textContent = dept.employees;
        });
    }

    updateOrderBadges() {
        this.state.departments.forEach(dept => {
            const legendaryCount = dept.queue.filter(order => order.rarity === 'legendary').length;
            const rareCount = dept.queue.filter(order => order.rarity === 'rare').length;
            const commonCount = dept.queue.filter(order => order.rarity === 'common').length;

            const legendaryBadge = document.getElementById(`badge-legendary-${dept.id}`);
            const rareBadge = document.getElementById(`badge-rare-${dept.id}`);
            const commonBadge = document.getElementById(`badge-common-${dept.id}`);

            legendaryBadge.textContent = legendaryCount;
            legendaryBadge.style.display = legendaryCount > 0 ? 'flex' : 'none';
            
            rareBadge.textContent = rareCount;
            rareBadge.style.display = rareCount > 0 ? 'flex' : 'none';
            
            commonBadge.textContent = commonCount;
            commonBadge.style.display = commonCount > 0 ? 'flex' : 'none';
        });
    }

    showNotification(message) {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }

    updateDisplay() {
        // Ресурсы
        document.getElementById('driveValue').textContent = 
            `${Math.floor(this.state.drive)}/${this.state.maxDrive}`;
        document.getElementById('moneyValue').textContent = 
            `${this.state.money.toLocaleString()} ₽`;
        document.getElementById('expValue').textContent = this.state.exp;
        document.getElementById('reputationValue').textContent = this.state.reputation;

        // Заказы
        this.updateOrdersDisplay();
        this.updateActiveOrdersDisplay();
        this.updateOrderBadges();

        // Кнопки отделов
        this.updateDepartmentButtons();
    }

    updateOrdersDisplay() {
        const container = document.getElementById('availableOrders');
        container.innerHTML = '';

        this.state.orders.available.forEach(order => {
            const timeLeft = order.deadline.diff(this.state.currentTime, 'minute');
            const orderElement = document.createElement('div');
            orderElement.className = 'order';
            
            const rarityText = {
                common: 'Обычный',
                rare: 'Редкий', 
                legendary: 'Легендарный'
            };
            
            orderElement.innerHTML = `
                <div class="order-rarity rarity-${order.rarity}">${rarityText[order.rarity]}</div>
                <strong>${order.name}</strong><br>
                Награда: ${order.reward}₽<br>
                Срок: ${timeLeft} мин.<br>
                Репутация: <span style="color: #27ae60">+${order.reputationReward}</span> / 
                <span style="color: #e74c3c">${order.reputationPenalty}</span><br>
                Опыт: +${order.expReward}<br>
                <button class="accept-btn" onclick="game.acceptOrder(${order.id})">
                    Принять заказ
                </button>
            `;
            container.appendChild(orderElement);
        });
    }

    updateActiveOrdersDisplay() {
        const container = document.getElementById('activeOrders');
        container.innerHTML = '';

        this.state.orders.active.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.className = 'order';
            orderElement.innerHTML = `
                <div class="order-rarity rarity-${order.rarity}">${order.rarity}</div>
                <strong>${order.name}</strong><br>
                Текущий отдел: ${this.state.departments[order.currentDept - 1]?.name || 'Завершен'}<br>
                Прогресс: ${order.currentDept}/7
            `;
            container.appendChild(orderElement);
        });
    }

    updateDepartmentButtons() {
        document.querySelectorAll('.department-btn').forEach(btn => {
            const deptId = parseInt(btn.dataset.dept);
            const dept = this.state.departments[deptId - 1];
            const hasOrders = dept.queue.length > 0;
            const hasDrive = this.state.drive >= 1;
            const isWorkTime = this.isWorkTime();

            btn.disabled = !hasOrders || !hasDrive || !isWorkTime;
        });

        // Подсвечиваем низкий драйв
        const driveValue = document.getElementById('driveValue');
        if (this.state.drive < 10) {
            driveValue.classList.add('drive-warning');
        } else {
            driveValue.classList.remove('drive-warning');
        }
    }

    processEmployees() {
        this.updateEmployeeDisplays();
    }
}

// Запуск игры
const game = new TypographyGame();
