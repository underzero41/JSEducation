// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками. Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().


// function delayedMessage (message, delay) {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// }


// delayedMessage("Сообщение 1", 2000)
// delayedMessage("Сообщение 2", 1000)
// delayedMessage("Сообщение 3", 3000)

// Задание 2.
// то же самое с массивомч

// const task = [
//     {name: 'task 1', time: 1000 },
//     {name: 'task 2', time: 2000 },
//     {name: 'task 3', time: 3000 },
//     {name: 'task 4', time: 4000 },
//     {name: 'task 5', time: 5000 }
// ]

// const allTasks = (taskList, interval) => {
//     let delay = 0;
//     taskList.forEach(task => {
//         setTimeout(() => {
//            console.log(task.name); 
//         }, delay);
//         delay += interval;
//     });   
// }

// allTasks(task, 1000);


// Задание 2
// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).

// function loadData (url) {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     }

//     xhr.open('GET', url, true);
//     xhr.send();
// }

// loadData('https://jsonplaceholder.typicode.com/users');

// Задание 3
// Переписать на fetch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((result) => {
//     if (result.ok) {
//         return result.text();
//     }  
//     throw new Error("Not Ok");
      
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.error('Too many errors');
// });
    

// Задание 4

const usersList = document.querySelector('.users-list');

const renderUsersList = (users) => {
    usersList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = 
            `<div>
                <h2>${user.name}</h2>
                <h2>${user.email}</h2>
            </div>`
        usersList.append(listItem);
    });

}

const sortUsersByName = (users) => {
    
    //Осртировка по алфавиту
    const sortedUsers = users.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    renderUsersList(sortedUsers);
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((result) => result.json())
.then((data) => {
    renderUsersList(data);
    const sortEl = document.querySelector('.sort');
    sortEl.addEventListener('click', function (e) {
        sortUsersByName(data);
    });
})
.catch((err) => {
    console.error('Too many errors');
});