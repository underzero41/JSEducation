console.log("Start first task");
// Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

const numbers = [1,2,3];
numbers.forEach(element => {
    console.log(element);
});

// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

const randomArray = [4,3,5,2,6,5,7];
console.log(randomArray.length);

// Дополнительное задание
// необходимо создать функцию рандом произвольных значений от 0 до 9, 
// передаём в функцию количество элементов массива и она возвращает массив с произвольными значениями
function getArray(sizeArray) {
    const randomArray2 = [];
    for (let i = 0; i < sizeArray; i++) {
        randomArray2.push(Math.round(Math.random()*10));
    }
    console.log(randomArray2);
}
getArray(5);

// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
const changebleArray = ['a', 'b', 'c'];
let j = 1;
for (let i = 0; i < changebleArray.length; i++) {
    changebleArray[i] = j++;
}
console.log(changebleArray);

console.log("Start second task");

// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
const arrInc = [1,2,3];
for (let i = 0; i < arrInc.length; i++) {
    arrInc[i]++;
}
console.log(arrInc);

// Узнайте длину следующего массива:
const arrLenght = [];
arrLenght[3] = 'a';
arrLenght[8] = 'b';
console.log(arrLenght.length);
//никогда не используем индексы самостоятельно!!

// Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
const arrPush = [1, 2, 3];
arrPush.push(4,5); //можно добавлять несколько элементов
console.log(arrPush);

// Создайте произвольный массив из 5 элементов, Удалите из него два последних элемента. 
// Проверьте, какое станет значение свойства length после этого.
const arrPop = [1,2,3,4,5];
// arrPop.pop([-1]);
// arrPop.pop([-1]);
arrPop.splice(-2); // можно и так
console.log(arrPop.length);

console.log('Start third task');

// С помощью цикла for выведите в консоль числа от 11 до 33.
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i=100; i>=0; --i) {
    console.log(i);
}

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока
// результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let num = 1;
let iterations = 0;

while (num <= 1000) {
    num *= 3;
    iterations++;
}

console.log(`Полученное число: ${num}`);
console.log(`Количество итераций: ${iterations}`);

console.log('Start fourth task');

// Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
const arrMoreThanThree = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arrMoreThanThree.length; i++) {
    if (arrMoreThanThree[i] > 3 && arrMoreThanThree[i] < 10) {
        console.log(arrMoreThanThree[i]);
    }
}

// Найдите сумму четных чисел от 2 до 100.
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
    sum += i;
}
console.log(`Сумма четных чисел от 2 до 100: ${sum}`);


// Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
const sumArr = [2, 5, 9, 3, 1, 4];
let sumOf = 0;
for (let i = 0; i < sumArr.length; i++) {
    sumOf += sumArr[i];
}
console.log(`Сумма элементов массива: ${sumOf}`);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let someString = '-';
for (let i = 1; i <= 9; i++) {
  someString += i + '-';
}

console.log(someString);


// Дан массив с числами [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы
// этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
const someNumbers = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < someNumbers.length; i++) {
  if (someNumbers[i] === 0) {
    break;
  }
  console.log(someNumbers[i]);
}