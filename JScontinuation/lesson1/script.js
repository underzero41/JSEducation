const p1 = document.querySelector('p');
console.log(p1);

const p3 = document.querySelector('.www');
console.log(p3);

const linkEl = document.querySelector('.link');
linkEl.textContent = 'link text js';
linkEl.href = 'https://developer.mozilla.org/ru/';
const photoEl = document.querySelector('.photo');
photoEl.src = 'https://img.ixbt.site/live/topics/preview/00/06/44/93/b7e144e9a0.jpg';


//создание узла
const divWithP = document.querySelector('.content');
const textIndiv = document.createElement('p');
textIndiv.textContent = ('Новый текстовый элемент');
divWithP.appendChild(textIndiv);

//удаление узла
// divWithP.remove();
//удаление добавленного элемента
// textIndiv.remove();
divWithP.removeChild(textIndiv);

// создание счетчика
const buttonInDiv = document.createElement('button');
divWithP.appendChild(buttonInDiv);
buttonInDiv.textContent = ('Send it');
let count = 0;
// buttonInDiv.onclick = () => {
//     count++;
//     console.log(count);
// };

//более правильный подход
buttonInDiv.addEventListener('click', () => {
    count++;
    console.log(count);
});

buttonInDiv.addEventListener('click', () => {
    buttonInDiv.textContent = ('Almost send');
} )


