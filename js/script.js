'use strict'

let a = document.getElementById('start');
console.log('Кнопка расчитать: ', a);

let b = document.getElementsByClassName('btn_plus')[0];
console.log('Первая кнопка +: ', b);
let b1 = document.getElementsByClassName('btn_plus')[1];
console.log('Вторая кнопка +: ', b1);

let с = document.querySelector('#deposit-check');
console.log('Чекбокс: ', с);

let d = document.querySelectorAll('.additional_income-item');
console.log('Инпут Возможные доходы: ', d);

let e = document.querySelectorAll('[class*="-value"]');
console.log('Поля в названии классов которых есть "-value": ', e);


let f = document.querySelector('.salary input');
console.log('Инпут месячного доохода: ', f);

let g = document.querySelector('.income-items input');
console.log('Инпут дополнительного доохода 1: ', g);

let g1 = document.querySelector('.income-amount');
console.log('Инпут обязательных расходов 2: ', g1);

let h = document.querySelector('.expenses-items input');
console.log('Инпут обязательных расходов 1: ', h);

let h1 = document.querySelector('.expenses-amount');
console.log('Инпут обязательных расходов 2: ', h1);

let i = document.querySelector('.additional_expenses-item');
console.log('Инпут Возможные расходы: ', i);

let j = document.querySelector('.target-amount');
console.log('Инпут сумма: ', j);

let k = document.querySelector('.period-select');
console.log('Инпут range: ', k);


// let allInput = document.querySelectorAll('.data input');
// console.log('Все поля инпут с левой стороны: ', allInput);

