
'use strict'
let isNumder = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

let startBtn = document.getElementById('start'),
   cancelBtn = document.getElementById('cancel'),
   salaryAmount = document.querySelector('.salary-amount'),
   incomeTilte = document.querySelector('.income-title'),
   incomeAmount = document.querySelector('.income-amount'),
   incomeItems = document.querySelectorAll('.income-items'),
   additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
   expensesTitle = document.querySelector('.expenses-title'),
   expensesAmount = document.querySelector('.expenses-amount'),
   expensesItems = document.querySelectorAll('.expenses-items'),
   additionalExpenses = document.querySelector('.additional_expenses-item'),
   depositCheck = document.querySelector('#deposit-check'),
   targetAmount = document.querySelector('.target-amount'),
   periodSelect = document.querySelector('.period-select'),
   periodAmount = document.querySelector('.period-amount'),
   btnPluse = document.getElementsByClassName('btn_plus'),
   incomePlsue = btnPluse[0],
   expensesPluse = btnPluse[1],
   budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
   budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
   expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
   additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
   additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
   incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
   targetMonthValue = document.getElementsByClassName('target_month-value')[0],
   allInput = document.querySelectorAll('.data input[type = text]');

   startBtn.disabled = true;
   let appData = {
      budget: 0,
      budgetDay: 0,
      budgetMonth: 0,
      incomeMonth: 0,
      income: {},
      addIncome: [],
      expensesMonth: 0,
      expenses: {},
      addExpenses: [],
      deposit: false,
      persentDeposit: 0,
      moneyDeposit: 0,
      periodDeposit: 0,
      start() {
         this.budget = salaryAmount.value;

         // блокировать поля для ввода после нажатия кнопки "Расчитать"
         allInput.forEach(function (item) {
            item.setAttribute("disabled", "true");
         });
         incomePlsue.setAttribute("disabled", "true");
         expensesPluse.setAttribute("disabled", "true");
         periodSelect.setAttribute("disabled", "true");

         // убрать кнопку "Расчитать" и показать кнопку "Сбросить"
         cancelBtn.style.display = 'block';
         startBtn.style.display = 'none';

         this.getIncome();
         this.getIncomeMonth();
         this.getExpenses();
         this.getExpensesMonth();
         this.getBudget();
         this.getAddIncome();
         this.getAddExpenses();
         this.showResult();
      },
      // выводим результаты в правой части формы
      showResult() {
         budgetMonthValue.value = this.budgetMonth;
         budgetDayValue.value = Math.ceil(this.budgetDay);
         expensesMonthValue.value = this.expensesMonth;
         additionalExpensesValue.value = this.addExpenses.join(', ');
         additionalIncomeValue.value = this.addIncome.join(', ');
         targetMonthValue.value = Math.ceil(this.getTargetMonth());
         incomePeriodValue.value = this.calcSavedMoney();
         periodSelect.addEventListener('input', function(){
            incomePeriodValue.value = appData.calcSavedMoney();
         });
      },
      // создаёт поля с дополнительным доходом max=3
      addIncomeBlock() {
         let cloneIncomeItem = incomeItems[0].cloneNode(true);
         cloneIncomeItem.querySelector('.income-title').value = '';
         cloneIncomeItem.querySelector('.income-amount').value = '';
         incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlsue);
         incomeItems = document.querySelectorAll('.income-items');
         if(incomeItems.length === 3){
            incomePlsue.style.display = 'none';
         }
      },
      // записывает значение в объект income
      getIncome() {
         incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
               appData.income[itemIncome] = cashIncome;
            }
         });
      },
      // выводит в правой части все значения "Возможных доходов" записанные в левой части
      getAddIncome() {
         additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
               appData.addIncome.push(itemValue);
            }
         });
      },
      // создаёт поля с обязательными расходами max=3
      addExpensesBlock() {
         let cloneExpensesItem = expensesItems[0].cloneNode(true);
         cloneExpensesItem.querySelector('.expenses-title').value = '';
         cloneExpensesItem.querySelector('.expenses-amount').value = '';
         expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPluse);
         expensesItems = document.querySelectorAll('.expenses-items');
         if(expensesItems.length === 3){
            expensesPluse.style.display = 'none';
         }
      },
      // записывает значение в объект expenses
      getExpenses() {
         expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
               appData.expenses[itemExpenses] = cashExpenses;
            }
         });
      },
      // выводит в правой части все значения "Возможных расходов" записанные в левой части
      getAddExpenses() {
         let addExpenses = additionalExpenses.value.split(', ');
         addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== '') {
               appData.addExpenses.push(item);
            }
         });
      },
      // сумма обязательных рассходов
      getExpensesMonth() {
         let newExpensesAmount = 0;
         for (const key in this.expenses) {
            newExpensesAmount += +this.expenses[key];
         }
         this.expensesMonth = newExpensesAmount;
      },
      getExpensesMonth() {
         let newExpensesAmount = 0;
         for (const key in this.expenses) {
            newExpensesAmount += +this.expenses[key];
         }
         this.expensesMonth = newExpensesAmount;
      },
      // сумма дополнительных доходов
      getIncomeMonth() {
         let newIncomeAmount = 0;
         for (const key in this.income) {
            newIncomeAmount += +this.income[key];
         }
         this.incomeMonth = newIncomeAmount;
      },
      // считает общий бюджет
      getBudget() {
         this.budgetMonth = (+this.budget + (+this.incomeMonth)) - +this.expensesMonth;
         this.budgetDay = this.budgetMonth / 30;
      },
      // считает за сколько месяце будет достигнута цель
      getTargetMonth() {
         return targetAmount.value / this.budgetMonth;
      },
      // считает сколько будет накопленно за указанный период
      calcSavedMoney() {
         return this.budgetMonth * periodSelect.value;
      },
      // изменияет цифры под ползунком
      getPeriodSelect() {
         periodAmount.innerHTML = periodSelect.value;
      },
      //обнуление формы
      reset() {
         let inputTextData = document.querySelectorAll('.data input[type = text]'),
            resultInputData = document.querySelectorAll('.result input[type = text]');

         inputTextData.forEach(function (elem) {
            elem.value = '';
            elem.removeAttribute('disabled');
            periodSelect.value = '0';
            periodAmount.innerHTML = periodSelect.value;
         });
         resultInputData.forEach(function (elem) {
            elem.value = '';
         });

         for (let i = 1; i < incomeItems.length; i++){
            incomeItems[i].parentNode.removeChild(incomeItems(i));
            incomePlsue.style.display = 'block';
         }
         for (let i = 1; i < expensesItems.length; i++){
            expensesItems[i].parentNode.removeChild(expensesItems(i));
            expensesPluse.style.display = 'block';
         }

         this.budget = 0;
         this.budgetDay = 0;
         this.budgetMonth = 0;
         this.incomeMonth = 0;
         this.income = {};
         this.addIncome = [];
         this.expensesMonth = 0;
         this.expenses = {};
         this.addExpenses = [];
         this.deposit = false;
         this.persentDeposit = 0;
         this.moneyDeposit = 0;
         this.periodDeposit = 0;

         cancelBtn.style.display = 'none';
         startBtn.style.display = 'block';

         allInput.forEach(function (item) {
            item.removeAttribute("disabled");
         });
         incomePlsue.removeAttribute("disabled");
         expensesPluse.removeAttribute("disabled");
         periodSelect.removeAttribute("disabled");
      }

/*
      getStatusIncome: function(){
         if(appData.budgetDay > 800){
            return ("У вас высокий уровень дохода");
         } else if(appData.budgetDay > 300){
            return ("У вас средний уровень дохода");
         } else if(appData.budgetDay > 0){
            return ("У вас низкий уровень дохода");
         } else {
            return ("Что то пошло не так");
         }
      },
   
      getInfoDeposit: function(){
         if (appData.deposit) {
            appData.persentDeposit = prompt("Какой у вас годовой процент?", 10);
            while (!isNumder(appData.persentDeposit)){
               appData.persentDeposit = prompt("Какой у вас годовой процент?", 10);
            }
            appData.moneyDeposit = prompt("Какая сумма у вас на депозитном счету?", 10000);
            while (!isNumder(appData.moneyDeposit)){
               appData.moneyDeposit = prompt("Какая сумма у вас на депозитном счету?", 10000);
            }
         }
      },
*/
   };

   salaryAmount.addEventListener('input', function(){
      startBtn.disabled = false;
   });

   startBtn.addEventListener('click', appData.start.bind(appData));
   cancelBtn.addEventListener('click', appData.reset.bind(appData));

   incomePlsue.addEventListener('click', appData.addIncomeBlock);
   expensesPluse.addEventListener('click', appData.addExpensesBlock);
   periodSelect.addEventListener('mousemove', appData.getPeriodSelect);


/*
   function addExpensesString() {
      let result = appData.addExpenses.map(upPer);
         function upPer(value) {
            return value[0].toUpperCase() + value.substr(1);
         }
      console.log("Ваши дополнительные рассходы: " + result.join(', '));
   }
   addExpensesString();

   console.log("Наша программа включает в себя данные: ");
   for (let key in appData){
      console.log(key + ": " + appData[key]);
   }
*/