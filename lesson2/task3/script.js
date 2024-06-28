let a = '2';
let b = '3';
let sum = Number(a) + Number(b);
console.log(sum);

let firstNumber = +prompt("Введите число: ");
let secondNumber = +prompt("Введите число: ");

if (firstNumber === undefined || secondNumber === undefined) {
    alert('Значения не должны быть пустыми!');
} else if (secondNumber === 0) {
    alert("На ноль делить нельзя")
} else {
    console.log(`Сумма чисел равна ${firstNumber+secondNumber}`);
    console.log(`Разность чисел равна ${firstNumber-secondNumber}`);
    console.log(`Произведение чисел равнo ${firstNumber*secondNumber}`);
    console.log(`Частное чисел равно ${firstNumber/secondNumber}`);
    console.log(`Остаток чисел равен ${firstNumber%secondNumber}`);
}

// console.log(String(true));
// console.log('a'+ true);
// console.log(Number(true));
// console.log(true + 1);
// console.log(true + true);
// console.log(true - true);
// console.log(String(true)+ Number(true));