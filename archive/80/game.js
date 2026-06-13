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
            baseEmployeeSpeed: 500, // мс
            minEmployeeSpeed: 200, // мс
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
            orders: {
                available: [],
                active: [],
                completed: 0
            },
            departments: [
                { id: 1, name: 'Дизайн', employee: null, queue: [] },
                { id: 2, name: 'Печать', employee: null, queue: [] },
                { id: 3, name: 'Резка', employee: null, queue: [] },
                { id: 4, name: 'Фальцовка', employee: null, queue: [] },
                { id: 5, name: 'Брошюровка', employee: null, queue: [] },
                { id: 6, name: 'Ламинация', employee: null, queue: [] },
                { id: 7, name: 'Упаковка', employee: null, queue: [] }
            ],
            employeeIdCounter: 1,
            orderIdCounter: 1
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startGameLoop();
        this.generateInitialOrders();
        this.updateDisplay();
    }

    setupEventListeners() {
        // Обработчики кнопок отделов
        document.querySelectorAll('.department-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const deptId = parseInt(e.target.dataset.dept);
                this.processDepartment(deptId);
            });
        });

        // Кнопка найма
        document.getElementById('hireButton').addEventListener('click', () => {
            this.hireEmployee();
        });
    }

    startGameLoop() {
        // Игровой таймер (обновление каждую секунду)
        setInterval(() => {
            this.updateGameTime();
            this.updateDrive();
            this.processEmployees();
            this.updateDisplay();
            this.checkNewDay();
        }, 1000);

        // Генерация новых заказов
        setInterval(() => {
            if (this.isWorkTime()) {
                this.generateOrder();
            }
        }, 10000); // Новый заказ каждые 10 секунд
    }

    updateGameTime() {
        // 1 игровой час = 7.5 реальных секунд
        // Каждую реальную секунду добавляем 60/7.5 = 8 минут игрового времени
        this.state.currentTime = this.state.currentTime.add(8, 'minute');
    }

    updateDrive() {
        if (this.isWorkTime()) {
            // Пассивный расход драйва (1 в час за игрока + по 1 за каждого сотрудника)
            const drainPerSecond = this.config.drivePerHour * (1 + this.state.employees.length) / 3600;
            this.state.drive = Math.max(0, this.state.drive - drainPerSecond);
        }
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

    checkNewDay() {
        const currentHour = this.state.currentTime.hour();
        const currentMinute = this.state.currentTime.minute();
        
        // Восстанавливаем драйв в 9:00 утра
        if (this.isWorkDay() && currentHour === 9 && currentMinute < 8) {
            this.restoreDrive();
        }
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
            currentDept: 0, // 0 - не принят, 1-7 - в отделе
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
            this.showMessage('Недостаточно драйва для принятия заказа!');
            return;
        }

        order.accepted = true;
        order.currentDept = 1;
        this.state.orders.available.splice(orderIndex, 1);
        this.state.orders.active.push(order);

        // Добавляем заказ в очередь первого отдела
        this.state.departments[0].queue.push(order);
    }

    processDepartment(deptId) {
        if (!this.isWorkTime() || this.state.drive < 1) return;

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

    processEmployees() {
        if (!this.isWorkTime() || this.state.drive < 1) return;

        this.state.employees.forEach(employee => {
            if (!employee.department) return;

            const dept = this.state.departments[employee.department - 1];
            if (dept.queue.length === 0 || this.state.drive < 1) return;

            // Сотрудник обрабатывает заказ
            const order = dept.queue[0];
            dept.queue.shift();
            order.currentDept++;

            if (order.currentDept <= 7) {
                this.state.departments[order.currentDept - 1].queue.push(order);
            } else {
                this.completeOrder(order.id);
            }

            // Тратим драйв
            this.state.drive -= 1;
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
        
        this.showMessage(`Заказ "${order.name}" завершен! ${isOnTime ? '+' : '-'}${reward}₽`);
    }

    hireEmployee() {
        const cost = 500;
        if (this.state.money < cost) {
            this.showMessage('Недостаточно денег для найма!');
            return;
        }

        this.state.money -= cost;
        
        const employee = {
            id: this.state.employeeIdCounter++,
            name: `Сотрудник ${this.state.employeeIdCounter}`,
            department: null,
            speed: this.config.baseEmployeeSpeed,
            level: 1
        };

        this.state.employees.push(employee);
        this.state.maxDrive += this.config.employeeDriveBonus;
        this.state.drive += this.config.employeeDriveBonus;

        this.showMessage(`Нанят ${employee.name}! Макс. драйв увеличен.`);
    }

    assignEmployee(employeeId, deptId) {
        const employee = this.state.employees.find(e => e.id === employeeId);
        if (!employee) return;

        // Освобождаем предыдущий отдел
        if (employee.department) {
            const prevDept = this.state.departments[employee.department - 1];
            prevDept.employee = null;
        }

        employee.department = deptId;
        
        if (deptId) {
            const newDept = this.state.departments[deptId - 1];
            newDept.employee = employee;
        }
    }

    updateDisplay() {
        // Время
        document.getElementById('timeDisplay').textContent = 
            this.state.currentTime.format('D MMMM YYYY, HH:mm (dddd)');

        // Ресурсы
        document.getElementById('driveValue').textContent = 
            `${Math.floor(this.state.drive)}/${this.state.maxDrive}`;
        document.getElementById('moneyValue').textContent = 
            `${this.state.money.toLocaleString()} ₽`;
        document.getElementById('expValue').textContent = this.state.exp;
        document.getElementById('reputationValue').textContent = this.state.reputation;

        // Заказы
        this.updateOrdersDisplay();
        
        // Сотрудники
        this.updateEmployeesDisplay();
        
        // Активные заказы
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

    updateEmployeesDisplay() {
        const container = document.getElementById('employeesList');
        container.innerHTML = '';

        this.state.employees.forEach(employee => {
            const employeeElement = document.createElement('div');
            employeeElement.className = 'employee-item';
            employeeElement.innerHTML = `
                <strong>${employee.name}</strong><br>
                Отдел: 
                <select onchange="game.assignEmployee(${employee.id}, this.value)">
                    <option value="">Не назначен</option>
                    ${this.state.departments.map(dept => 
                        `<option value="${dept.id}" ${employee.department === dept.id ? 'selected' : ''}>
                            ${dept.name}
                        </option>`
                    ).join('')}
                </select>
            `;
            container.appendChild(employeeElement);
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
            
            // Показываем количество заказов в очереди
            if (dept.queue.length > 0) {
                btn.textContent = `${dept.name} (${dept.queue.length})`;
            } else {
                btn.textContent = dept.name;
            }
        });

        // Подсвечиваем низкий драйв
        const driveValue = document.getElementById('driveValue');
        if (this.state.drive < 10) {
            driveValue.classList.add('drive-warning');
        } else {
            driveValue.classList.remove('drive-warning');
        }
    }

    showMessage(text) {
        // Простая система сообщений
        console.log(text);
        // Можно добавить красивый toast вместо console.log
        alert(text);
    }
}

// Запуск игры
const game = new TypographyGame();
