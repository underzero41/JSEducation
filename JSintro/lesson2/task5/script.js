let userNumber = +prompt('Введите число');
if (userNumber > 5) {
    console.log('Число больше 5');
} else if (userNumber < 5){
    console.log('Число меньше 5');
} else {
    console.log('Число равно 5');
}

let test1 = prompt('Введите значение');
let test2 = prompt('Введите значение');
alert(`Введенные значения ${(test1===test2)? 'равны' : 'не равны'}`)

// if (test1 === test2) {
//     console.log('Значения равны');
// } else {
//     console.log('Значения не равны');
// }

let firstNumber = +prompt('Введите число');
let secondNumber = +prompt('Введите число');
// if (firstNumber>secondNumber) {
//     console.log(`${secondNumber} является минимальным значение`);
// } else if (firstNumber<secondNumber){
//     console.log(`${firstNumber} является минимальным значение`);
// } else {
//     console.log('Значения равны');
// }
if(firstNumber !== secondNumber) {
    alert(`${(firstNumber > secondNumber) ? 'Второе' : 'Первое'} число меньше`)
}

let finalNumber = +prompt('Введите число');
if (finalNumber> 0 && finalNumber < 15) {
    console.log('Выполнено');
} else {
    console.log('Не выполнено');
}
