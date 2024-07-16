// Задание 1
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
// const buttonEl = document.querySelector('.button');
// window.onload = () => console.log('Страница загрузилась');

// buttonEl.addEventListener('click', function (e) {
//     console.log('click ae');
// });
// buttonEl.onclick = () => console.log('click onclick');

// Задание 2
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту 
// кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
// const bodyEl = document.querySelector('body');
// for (let i = 0; i < 3; i++) {
//     bodyEl.insertAdjacentHTML("afterbegin", `<button>Кнопка ${i+1}</button>`);    
// }

// bodyEl.addEventListener('click', function (e) {
//     if (e.target.nodeName === 'BUTTON') {
//         console.log(`click on ${e.target.textContent}`);
//     }
// });

// bodyEl.insertAdjacentHTML("afterbegin", `<button class ='button'>Кнопка 4</button>`);    
// let count = 0;
// const button4El =document.querySelector('.button');
// button4El.addEventListener('click', function (e) {
//     count++;
//     console.log(`Click on button ${count}`);
// });

// bodyEl.insertAdjacentHTML("afterbegin", `<button class ='button5'>Кнопка 5</button>`);
// const button5El = document.querySelector('.button5');
// button5El.addEventListener('click', function (e) {
//     button5El.textContent = 'You click on this button';
// });

// Задание 3
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только
// вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const bodyEl = document.querySelector('body');
// const buttonEl =document.createElement('button');
// buttonEl.textContent = 'Button';
// bodyEl.appendChild(buttonEl);

// buttonEl.addEventListener('click', function (e) {
//     const h1El = document.createElement('h1');
//     h1El.innerText = 'Heading';
//     buttonEl.insertAdjacentElement("afterend", h1El);
// });

// const buttonEl2 = document.createElement('button');
// buttonEl2.textContent = 'Button 2';
// bodyEl.appendChild(buttonEl2);
// buttonEl2.addEventListener('click', function (e) {
//     document.querySelector('h1').remove();
// });

// const buttonEl3 = document.createElement('button');
// buttonEl3.textContent = 'Button 3';
// bodyEl.appendChild(buttonEl3);
// buttonEl3.addEventListener('mouseover', function (e) {
//     console.log('вы навели на данную кнопку');
// });
// buttonEl3.addEventListener('mouseout', function (e) {
//     console.log('Наведения на кнопку больше нет');
// });

// Задание 4
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const ulEl = document.querySelector('.menu-list');
const btnEl = document.createElement('button');
btnEl.textContent = 'Create element';
ulEl.insertAdjacentElement("afterend", btnEl);
btnEl.addEventListener('click', function (e) {
    ulEl.insertAdjacentHTML("beforeend", '<li class="list">новый элемент списка</li>');
});

const btn2El = document.createElement('button');
btn2El.textContent = 'Delete element';
ulEl.insertAdjacentElement("afterend", btn2El);
btn2El.addEventListener('click', function (e) {
    ulEl.removeChild(ulEl.firstElementChild);
});

const btn3El = document.createElement('button');
btn3El.textContent = 'Create class';
ulEl.insertAdjacentElement("afterend", btn3El);
btn3El.addEventListener('click', function (e) {
    btn3El.classList.add('click');
});

// Задание 5
// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”





