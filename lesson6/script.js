// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”

const daysOfTheWeek = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wendsday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};
console.log(daysOfTheWeek[2]);

// Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
const user = {
    name: 'Ivan',
    surname: 'Kondratyev',
    age: 30
};

console.log(`${user.surname}-${user.name}-${user.age}`);
// Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры

user.otchestvo =  prompt('Напишите свое отчество:', 'Olegovich')
console.log(`${user.surname}-${user.name}-${user.otchestvo}-${user.age}`);

// Удалите свойство surname
delete user.surname;
console.log(user);

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера (или наоборот)

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];


let daysMapping = {};
for (let i = 0; i < arr1.length; i++) {
    daysMapping[arr1[i]] = arr2[i];
}
console.log(daysMapping);

// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

const obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key]**2;
}

console.log(obj);



// Дополнительное задание
// использовать методы объекта не использовать цикл for
// Найдите сумму элементов приведенного объекта.

const obj2 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

let sum = 0;
for (let key1 in obj2) {
    for (let key2 in obj2[key1]) {
        sum += obj2[key1][key2];
    }
}

console.log(sum);

let sum1 = Object.values(obj2).reduce((acc, innerObj) => acc + Object.values(innerObj).reduce((innerAcc, val) => innerAcc + val, 0), 0);
console.log(sum1);


// Создайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который задает вопрос question и сравнивает ответ с answer
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// * По желанию, создать 2 подсказки, если пользователь ответил неверно



const riddles = {
    question: "У меня есть рука, но я не могу вам помахать. Что это?",
    answer: "Часы",
    hints: ["Я показываю время", "Я на стене"],
};

const askQuestion = (userAnswer) => {
    if (userAnswer.toLowerCase() === riddles.answer.toLowerCase()) {
        alert("Правильно! Вы выиграли!");
    } else {
        alert("Вы проиграли.");
        if (riddles.hints.length > 0) {
            alert("Подсказка: " + riddles.hints.shift());
        }
    }
}

alert(riddles.question);
userAnswer = prompt();
askQuestion(userAnswer);


