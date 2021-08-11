'use strict'

let btnStart = document.getElementById('start');

let btnSum = document.getElementsByClassName('btn_plus')[0];
let btnSum1 = document.getElementsByClassName('btn_plus')[1];

let depositCheck = document.querySelector('#deposit-check');

let additionalItem = document.querySelectorAll('.additional_income-item');

// let e = document.querySelectorAll('[class*="-value"]');
let valBudgetMonth = document.getElementsByClassName('budget_month-value');
let valBudgetBay = document.getElementsByClassName('budget_day-value');
let valExpensesMonth = document.getElementsByClassName('expenses_month-value');
let valAdditionalIncome = document.getElementsByClassName('additional_income-value');
let valAdditionalExpenses = document.getElementsByClassName('additional_expenses-value');
let valIncomePeriod = document.getElementsByClassName('income_period-value');
let valTargetMonth = document.getElementsByClassName('target_month-value');

let inputSalary = document.querySelector('.salary input');

let nameIncomeItems = document.querySelector('.income-items input');

let sumIncomeItems = document.querySelector('.income-amount');

let nameExpensesItem = document.querySelector('.expenses-items input');

let sumExpensesItem = document.querySelector('.expenses-amount');

let inputAdditionalExpenses = document.querySelector('.additional_expenses-item');

let inputTargetAmount = document.querySelector('.target-amount');

let inputPeriodSelect = document.querySelector('.period-select');