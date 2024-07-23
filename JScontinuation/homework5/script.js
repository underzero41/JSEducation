// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const divEl = document.createElement('div');
const bodyEl = document.querySelector('body');
bodyEl.appendChild(divEl);
const parseData = JSON.parse(apiData);
parseData.forEach(element => {
    divEl.insertAdjacentHTML("beforeend",
        `
        <img src="${element.image}" alt="${element.name}" class="element__img">
        <h2 class="element__name">${element.name}</h2>
        <p class="element__id">${element.id}</p>
        <p class="element__gender">${element.gender}</p>
        <p class="element__status">${element.status}</p>
        <a href="${element.episode}" class="element__episode">${element.name}</a>
        `
    )    
}); 






// const urlEl = 'https://rickandmortyapi.com/api/character/466';

// async function getData(urlEl) {
//     const response = await fetch(urlEl);
//     const jsonData = await response.json();
//     return jsonData;
// }

// try {
//     const myData = await getData(urlEl);
//     console.log(myData);
//     myData.forEach(element => {
//         divEl.insertAdjacentHTML("beforeend",
//             `
//             <img src="${element.image}" alt="${element.name}" class="element__img">
//             <h2 class="element__name">${element.name}</h2>
//             <p class="element__id">${element.id}</p>
//             <p class="element__gender">${element.gender}</p>
//             <p class="element__status">${element.status}</p>
//             <a href="${element.episode}" class="element__episode">${element.name}</a>
//             `
//         )
//     });
// } catch (error) {
//     console.log(`Errorr - ${error.message}`);
// }