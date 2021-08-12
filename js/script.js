'use strict'

let start = document.getElementById('start'),
   btnPluse = document.getElementsByClassName('btn_plus'),
   incomePlsue = btnPluse[0],
   expensesPluse = btnPluse[1],
   additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
   depositCheck = document.querySelector('#deposit-check'),
   budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
   budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
   expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
   additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
   additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
   incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
   targetMonthValue = document.getElementsByClassName('target_month-value')[0],
   salaryAmount = document.querySelector('.salary-amount'),
   incomeTilte = document.querySelector('.income-title'),
   incomeAmount = document.querySelector('.income-amount'),
   expensesTitle = document.querySelector('.expenses-title'),
   expensesAmount = document.querySelector('.expenses-amount'),
   additionalExpenses = document.querySelector('.additional_expenses-item'),
   targetAmount = document.querySelector('.target-amount'),
   periodSelect = document.querySelector('.period-select');


