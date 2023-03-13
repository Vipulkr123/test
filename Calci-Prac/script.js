// console.log(calculateLogarithm(2, 2));
// function calculateLogarithm(base, x) {
//     var a = Math.log(x);
//     var b = Math.log(base);
//     return a / b;
// };

// Logarithm with custom base:
//                               base    x               y
// console.log(calculateLogarithm(2, 2)); //  1
// console.log(calculateLogarithm(2, 4)); //  2
// console.log(calculateLogarithm(Math.E, Math.E)); //  1
// console.log(calculateLogarithm(3, 9)); // ~2
// console.log(calculateLogarithm(3, 81)); // ~4
// console.log(calculateLogarithm(10, 10)); //  1










// const squareBtn = document.querySelector('[data-square]');
// const cubeBtn = document.querySelector('[data-cube]');
// const sqrtBtn = document.querySelector('[data-sqrt]');
// const factBtn = document.querySelector('[data-fact]');
// const xpoweryBtn = document.querySelector('[data-xpowery]');
// const onebyx = document.querySelector('[data-onebyx]');
// const tenPowerxBtn = document.querySelector('[data-tenpow-x]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-clearAll]');


// equalsButton.addEventListener('click', button => {
//     calculator.compute();
//     calculator.updateDisplay();
// });

// allClearButton.addEventListener('click', button => {
//     calculator.clear();
//     calculator.updateDisplay();
// });

// deleteButton.addEventListener('click', button => {
//     calculator.delete();
//     calculator.updateDisplay();
// });

// squareBtn.addEventListener('click', button => {
//     calculator.square();
//     calculator.updateDisplay();
// });

// sqrtBtn.addEventListener('click', button => {
//     calculator.squareRoot();
//     calculator.updateDisplay();
// });

// factBtn.addEventListener('click', button => {
//     calculator.factorialCal();
//     calculator.updateDisplay();
// });

// onebyx.addEventListener('click', button => {
//     calculator.onebyx();
//     calculator.updateDisplay();
// });

// xpoweryBtn.addEventListener('click', button => {
//     var abc = calculator.xpowery(button.target.innerText);
//     console.log(abc);
//     calculator.updateDisplay();
// });

// tenPowerxBtn.addEventListener('click', button => {
//     calculator.tenpowerx();
//     calculator.updateDisplay();
// });