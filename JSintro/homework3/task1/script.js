// Задание 1
// Создайте функцию которая возводит переданное число в куб,
//  необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
const qube = (number) => number**3;
let number1 = +prompt("Enter first number");
let number2 = +prompt("Enter second number");
console.log(qube(number1)+qube(number2));