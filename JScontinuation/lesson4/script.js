// Задание 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
// const inputEl = document.querySelector('#checkbox');
// const btnEl = document.querySelector('.button');
// const formEl = document.querySelector('.form');
// let errorMsg = false;

// btnEl.addEventListener('click', function (e) {
//     if (!inputEl.checked && !errorMsg) {
//         // e.preventDefault();
//         // console.log(inputEl.checked);
//         const pEl = document.createElement('p');
//         pEl.textContent = 'You must check the  licence';
//         btnEl.insertAdjacentElement("afterend", pEl);  
//         errorMsg = true;
//     } else if (inputEl.checked) {
//         formEl.submit();
//     }
// });

// Задание 2
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const drinkEl = document.querySelectorAll('[name = "drink"]');
// const btnEl = document.querySelector('.button');

// btnEl.addEventListener('click', function (e) {
//     e.preventDefault();
//     drinkEl.forEach((btnEl) => {
//         if (btnEl.checked) {
//             if (btnEl.id === 'tea') {
//                 const pEl = document.createElement('p');
//                 pEl.textContent = 'Чай закончился';
//                 btnEl.insertAdjacentElement("afterend", pEl);
//             } else if (btnEl.id === 'coffee') {
//                 const p2El = document.createElement('p');
//                 p2El.textContent = 'Кофе закончился';
//                 btnEl.insertAdjacentElement("afterend", p2El);
//             }
//         }
//     });
// });

// Задание 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const btnEl = document.querySelector('.button');
// const passEl = document.querySelector('#password');

// btnEl.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (passEl.value.toLowerCase() === 'пароль') {
//         passEl.style.border = '2px solid green';
//     } else {
//         passEl.style.border = '2px solid red';
//         passEl.value = '';
//         passEl.placeholder = 'Пароль не верный';
//     }
// });

// Задание 4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// const inputEl = document.querySelector('#text');
// const h1El = document.querySelector('.heading');

// inputEl.addEventListener('input', function (e) {
//     h1El.textContent = inputEl.value;
// });