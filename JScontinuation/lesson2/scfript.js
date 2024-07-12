// 1
// {/* <div class="block">

// </div>
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute) */}

const divEl = document.querySelector('.block');
const itemEl = document.createElement('div');
divEl.appendChild(itemEl);
itemEl.textContent= 'Элемент внутри';
itemEl.style.color = 'blue';
itemEl.style.border = '1px solid black';
itemEl.style.backgroundColor = '#f8f8f8';
itemEl.style.padding = '16px';
itemEl.setAttribute('class', 'item_1');


// Задание 2 
// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const findTextEl = document.querySelector('.text');
console.log(findTextEl.previousElementSibling);
console.log(findTextEl.parentElement);
console.log(findTextEl.parentElement.previousElementSibling);
console.log(findTextEl.parentElement.parentElement);


// Задание 3
{/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */}

const h2El = document.querySelector('.subtitle');
console.log(h2El.parentElement);
console.log(h2El.parentElement.parentElement);
console.log(h2El.parentElement.parentElement.parentElement);


// Задание 4
{/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */}
const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('input');
const formEl = document.querySelector('form');
let h2eleme;
btnEl.addEventListener('click', (event) => {
    if (inputEl.value.trim() === '') {
        if (!h2eleme) {
            h2eleme = document.createElement('h2');
            inputEl.after(h2eleme);
            h2eleme.textContent = 'Поле не заполнено!';
        }
        event.preventDefault();
        inputEl.style.border = '2px solid red';
    } else {
        if (h2eleme) {
            h2eleme.remove();
            h2eleme = null;
        }
        inputEl.style.border = '1px solid black';
        formEl.submit();
        formEl.reset();
        console.log('Форма отправлена');    
    }
})