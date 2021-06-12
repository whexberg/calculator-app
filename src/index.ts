import './scss/style.scss';

import { Toggler } from './lib/toggler';
import { Calculator } from './lib/calculator';

const body = document.querySelector('body') as HTMLBodyElement;
const outputText = document.querySelector('.output-text') as HTMLBodyElement;

new Toggler(body);
const calculator = new Calculator(outputText);

document.querySelector('#digit-0')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('0');
});
document.querySelector('#digit-1')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('1');
});
document.querySelector('#digit-2')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('2');
});
document.querySelector('#digit-3')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('3');
});
document.querySelector('#digit-4')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('4');
});
document.querySelector('#digit-5')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('5');
});
document.querySelector('#digit-6')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('6');
});
document.querySelector('#digit-7')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('7');
});
document.querySelector('#digit-8')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('8');
});
document.querySelector('#digit-9')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addValue('9');
});
document.querySelector('#removeValue')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.removeValue();
});
document.querySelector('#addOperation')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addOperation('+');
});
document.querySelector('#subOperation')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addOperation('-');
});
document.querySelector('#addDecimal')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addDecimal();
});
document.querySelector('#divOperation')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addOperation('/');
});
document.querySelector('#multOperation')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.addOperation('*');
});
document.querySelector('#allClear')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.allClear();
});
document.querySelector('#calculate')?.addEventListener('click', (e) => {
    e.preventDefault();
    calculator.calculate();
});
