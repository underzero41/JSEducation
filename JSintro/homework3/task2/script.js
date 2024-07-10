// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст 
// "Размер заработной платы за вычетом налогов равен значение"

function salary (fullSalary) {
    if (isNaN(fullSalary)) {
        alert('Fatal error');
    } else {
        return fullSalary*0.83;
    }
}

let userSalary = +prompt("Enter your full salary")
alert(`Your salary without taxes is ${salary(userSalary)}`);