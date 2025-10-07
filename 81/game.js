// Инициализация Day.js
dayjs.locale('ru');
dayjs.extend(dayjs_plugin_isoWeek);
dayjs.extend(dayjs_plugin_isBetween);

class TypographyGame {
    constructor() {
        this.config = {
            startDate: '2025-09-01 09:00:00',
            workDay: { start: 9, end: 17 },
            gameHourToRealSeconds: 7.5, // 1 игровой час = 7.5 реальных секунд
            baseDrive: 80,
            employeeDriveBonus: 80,
            drivePerHour: 1,
            actionsPerOrder: 7,
            baseEmployeeSpeed: 500, // мс
            workDays: [1, 2, 3, 4, 5] // Пн-Пт
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
            freeEmployees: 0, // Свободные сотрудники
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
        const container = document.getElementById('departmentsContainer');
        container.innerHTML = '';

        this.state.departments.forEach(dept => {
            const deptElement = document.createElement('div');
            deptElement.className = 'department-card';
            deptElement.innerHTML = `
                <div class="department-name">${dept.name}</div>
                <button class="department-btn" data-dept="${dept.id}">
                    Обработать
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
                const deptId = parseInt(e.target.dataset.dept);
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
        }, 1000);

        // Генерация новых заказов
        setInterval(() => {
            if (this.isWorkTime()) {
                this.generateOrder();
            }
        }, 15000); // Новый заказ каждые 15 секунд

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
    }

    updateDrive() {
        if (this.isWorkTime()) {
            const now = Date.now();
            const deltaTime = (now - this.state.lastDriveUpdate) / 1000; // в секундах
            
            // Пассивный расход драйва (1 в час за игрока + по 1 за каждого сотрудника)
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
        const progressText = document.getElementById('dayProgressText');
        
        progressBar.style.width = `${progress}%`;
        
        const timeText = this.state.currentTime.format('D MMMM YYYY, HH:mm (dddd)');
        progressText.textContent = `${timeText} - ${Math.round(progress)}%`;
    }

    checkDayEnd() {
        if (!this.isWorkDay()) return;

        const currentHour = this.state.currentTime.hour();
        const currentMinute = this.state.currentTime.minute();
        
        // Если время 17:00 или больше - переходим к следующему рабочему дню
        if (currentHour >= this.config.workDay.end && currentMinute >= 0) {
            this.nextWorkDay();
        }
    }

    nextWorkDay() {
        let nextDay = this.state.currentTime.add(1, 'day');
        
        // Пропускаем выходные
        while (!this.config.workDays.includes(nextDay.isoWeekday())) {
            nextDay = nextDay.add(1, 'day');
        }
        
        // Устанавливаем время на 9:00
        this.state.currentTime = nextDay.set('hour', this.config.workDay.start).set('minute', 0);
        
        // Восстанавливаем драйв
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

    generateInitialOrders() {
        for (let i = 0; i < 3; i++) {
            this.generateOrder();
        }
    }

    generateOrder() {
        const orderTypes = [
            { name: 'Визитки', reward: 50, time: 2, complexity: 1 },
            { name: 'Брошюры', reward: 120, time: 4, complexity: 2 },
            { name: 'Каталоги', reward: 200, time: 6, complexity: 3 },
            { name: 'Плакаты', reward: 80, time: 3, complexity: 1 },
            { name: 'Листовки', reward: 60, time: 2, complexity: 1 }
        ];

        const orderType = orderTypes[Math.floor(Math.random() * orderTypes.length)];
        
        const order = {
            id: this.state.orderIdCounter++,
            name: `${orderType.name} #${Math.floor(Math.random() * 1000)}`,
            type: orderType.name,
            reward: orderType.reward,
            deadline: this.state.currentTime.add(orderType.time, 'hour'),
            complexity: orderType.complexity,
            currentDept: 0,
            progress: 0,
            accepted: false
        };

        this.state.orders.available.push(order);
    }

    acceptOrder(orderId) {
        const orderIndex = this.state.orders.available.findIndex(o => o.id === orderId);
        if (orderIndex === -1) return;

        const order = this.state.orders.available[orderIndex];
        
        // Проверяем, есть ли драйв для обработки
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

        const order = dept.queue[0];
        
        // Перемещаем заказ в следующий отдел
        dept.queue.shift();
        order.currentDept++;
        
        if (order.currentDept <= 7) {
            this.state.departments[order.currentDept - 1].queue.push(order);
        } else {
            this.completeOrder(order.id);
        }

        // Тратим драйв
        this.state.drive -= 1;
    }

    processEmployeeWork() {
        if (!this.isWorkTime() || this.state.drive < 1) return;

        this.state.departments.forEach(dept => {
            if (dept.employees > 0 && dept.queue.length > 0 && this.state.drive >= 1) {
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
        
        // Проверяем, успели ли в срок
        const isOnTime = this.state.currentTime.isBefore(order.deadline);
        const reward = isOnTime ? order.reward : Math.floor(order.reward * 0.5);

        // Начисляем награды
        this.state.money += reward;
        this.state.exp += order.complexity * 10;
        this.state.reputation += isOnTime ? 1 : -1;
        this.state.orders.completed++;

        this.state.orders.active.splice(orderIndex, 1);
        
        const message = isOnTime 
            ? `Заказ "${order.name}" завершен вовремя! +${reward}₽`
            : `Заказ "${order.name}" завершен с опозданием! +${reward}₽`;
        
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

    showNotification(message) {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        container.appendChild(notification);
        
        // Автоматическое удаление через 3 секунды
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
            orderElement.innerHTML = `
                <strong>${order.name}</strong><br>
                Награда: ${order.reward}₽<br>
                Срок: ${timeLeft} мин.<br>
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
        // Обновляем отображение сотрудников в отделах
        this.updateEmployeeDisplays();
    }
}

// Запуск игры
const game = new TypographyGame();
