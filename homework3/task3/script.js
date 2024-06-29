// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
// которая определяет максимальное значение среди этих чисел

function findMaxNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let num3 = prompt("Введите третье число:");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Ошибка ввода. Пожалуйста, введите числа.");
} else {
    let maxNumber = findMaxNumber(num1, num2, num3);
    console.log(`Максимальное значение среди введенных чисел: ${maxNumber}`);
}
