'use strict';

let start = document.getElementById('start'),
 cancel = document.getElementById('cancel'),
 btnPlus = document.getElementsByTagName('button'),
 incomePlus = btnPlus[0],
 expensesPlus = btnPlus[1],
 checkboxButton = document.getElementById('deposit-check'),
 additionalIncomes = document.querySelectorAll('.additional_income-item'),
 budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
 budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
 expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
 additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
 additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
 incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
 targetMonthValue = document.getElementsByClassName('target_month-value')[0],
 salaryAmount = document.querySelector('.salary-amount'),
 incomeTitle = document.querySelector('.income-title'),
 expensesTitle  = document.querySelector('.expenses-title'),
 expensesItems = document.querySelectorAll('.expenses-items'),
 additionalExpensesItem= document.querySelectorAll('.additional_expenses-item'),
 targetAmount = document.querySelector('.target-amount'),
 periodSelect = document.querySelector('.period-select'),
 incomeItems = document.querySelectorAll('.income-items'),
 periodAmount = document.querySelector('.period-amount'),
 placeHolderName = document.querySelectorAll('input[placeholder = "Наименование"]'),
 placeHolderSum = document.querySelectorAll('input[placeholder = "Сумма"]'),
 inputTypeText = document.querySelectorAll('input[type="text"]');
 
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};


class AppData {
    constructor(){
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.budget = 0;
        this.expensesMonth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false,
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
    }

    check(){
        if (salaryAmount.value.trim() === '') {
            return;
        };
    }

    start = function(){
        if (salaryAmount.value.trim() === '') {
            return;
        };
    
        this.budget = +salaryAmount.value;

        this.getExpInc();
        this.getAddData();
        this.getExpensesMonth();
        this.getBudget();
        this.block();

        this.showResult();
    };

    showResult = function(){
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(' ,');
        additionalIncomeValue.value = this.addIncome.join(' ,');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input', function(){
        incomePeriodValue.value = this.value*_this.budgetMonth;
        });

    }
   
    block(){
        inputTypeText.forEach((item) => {
            if (item.hasAttribute('disabled')) {
                return;
            } else {
                item.toggleAttribute('disabled')
            };
            
        });
            start.style.display = 'none';
            cancel.setAttribute('style', 'display: inline');
    }
   
    reset(){
        let inputs = document.querySelectorAll('input');
        inputs.forEach((elem) => {
            if (elem == periodSelect) {
                elem.value = periodAmount.innerHTML = 1;
            } else {
            elem.value = '';
            elem.removeAttribute('disabled');
            };  
        });

        console.log(this); 
        this.incomeMonth = 0;
        this.budgetMonth = 0;
        this.addExpenses = [];
        this.addIncome = [];
        this.income = {};
        this.expenses = {};
        this.expensesMonth = 0;
        cancel.style.display = 'none';
        start.style.display = 'block';
    }
   
    getNewBlocks(){
            let item = this.previousElementSibling;
            let cloneElem = item.cloneNode(true);
            item.after(cloneElem); 
            if (item.parentElement.childElementCount === 5) 
                this.style.display = 'none'     
           
        }  

    getExpInc(){
        const count = (item) => {
            const startStr = item.className.split('-')[0];
            const itemTitle = item.querySelector(`.${startStr}-title`).value;
            const itemAmount = item.querySelector(`.${startStr}-amount`).value;
            if (itemTitle !== '' && itemAmount !== ''){
                this[startStr][itemTitle] = +itemAmount;
            };
        };
        expensesItems.forEach(count);
        incomeItems.forEach(count);

        for (let key in this.income){
            this.incomeMonth += +this.income[key];

        }
    }
    getAddExpenses(){
       
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        })
    }
    
    getAddIncome(){
        additionalIncomes.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                this.addIncome.push(itemValue);
            }
        });
    }
    getAddData(){
        const count = (item) => {
            
            const startStr = item.className;
            let itemValue = item.value;
            if (itemValue !== '' && startStr.includes('expenses')){
                this.addExpenses.push(itemValue);
            };
            if (itemValue !== '' && startStr.includes('income')){
                this.addIncome.push(itemValue);
            };    
        
        };
        additionalExpensesItem.forEach(count);
        additionalIncomes.forEach(count);
    }
    
    getExpensesMonth(){
        let sum = 0;
        for (let key in this.expenses) {
            sum += this.expenses[key]; 
        };
        return this.expensesMonth = sum;
    }                            
    
    getBudget (){
        this.budgetMonth = this.budget + this.incomeMonth - this.getExpensesMonth();
        this.budgetDay = Math.ceil(this.budgetMonth/30);
        
    }
    
    getTargetMonth(){
        let target = targetAmount.value/this.budgetMonth;
        return target;
            
    }
   
    getStatusIncome(){
        if (this.budgetDay<0) {
            return ('Что-то пошло не так');
        } else if (this.budgetDay<=600)  {
            return ('К сожалению, у вас уровень дохода ниже среднего');  
        } else if (this.budgetDay<=1200) {
        return ('У вас средний уровень дохода');
        } else {
            return ('У вас высокий уровень дохода');  
        };
    }
   
    getInfoDeposit(){
        if (this.deposit){
            this.percentDeposit = prompt('Какой годовой процент?', 10);
                while(!isNumber(this.percentDeposit) || this.percentDeposit === 0){
                    this.percentDeposit = prompt('Какой годовой процент?', '10');
                };
            this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
                while(!isNumber(this.moneyDeposit) || this.moneyDeposit === 0){
                    this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
                };
        };
    }
    
    calcPeriod = function(){
        return this.budgetMonth*periodSelect.value;
    }
    
    eventsListeners(){
        start.addEventListener('click', appData.start.bind(appData)); 
        cancel.addEventListener('click', appData.reset.bind(appData));
        expensesPlus.addEventListener('click', appData.getNewBlocks);
        incomePlus.addEventListener('click', appData.getNewBlocks);
        periodSelect.addEventListener('input', () => {
            periodAmount.innerHTML = event.target.value;
        }); 
    }

    holdInputs(){
        placeHolderName.forEach((elem) => {
            elem.addEventListener('input', (event)=> {
                event.target.value = event.target.value.replace(/([A-Z])|(\d)/gi,"")
            });  
        });
        
        placeHolderSum.forEach((elem) => {
            elem.addEventListener('input', (event)=> {
                event.target.value = event.target.value.replace(/\D/g, '');
            })   
        });
    }

};

const appData = new AppData();
console.log(appData);
appData.holdInputs();
appData.eventsListeners();










