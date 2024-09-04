// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) 
// в качестве аргумента и использует fetch для получения данных о пользователе 
// с заданным ID с удаленного сервера. Функция должна возвращать промис, который 
// разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, 
// промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект 
// с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// function getUserData(userId) {
//     return fetch(`'https://jsonplaceholder.typicode.com/users/${userId}'`)
//         .then(response => {
//             if (!response.ok) {
//                 // Если ответ не успешен, отклоняем промис с сообщением об ошибке
//                 return Promise.reject(`Ошибка: пользователь с ID ${userId} не найден.`);
//             }
//             // Извлекаем данные из ответа
//             return response.json();
//         })
//         .catch(error => {
//             // Обработка ошибок сети или других проблем
//             return Promise.reject(`Не удалось получить данные: ${error.message}`);
//         });
// }

// // Пример использования функции
// getUserData(1)
//     .then(userData => {
//         console.log(userData);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// // ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе 
// в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. 
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены, 
// или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения.
//  Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json 
//  и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). 
//  Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, 
//  функция отклоняет промис с сообщени


// function saveUserData(userData) {
//     return fetch('https://jsonplaceholder.typicode.com/users/', {
//         method: 'POST', // Указываем метод POST
//         headers: {
//             'Content-Type': 'application/json' // Указываем тип содержимого
//         },
//         body: JSON.stringify(userData) // Сериализуем объект с данными в JSON-строку
//     })
//     .then(response => {
//         if (!response.ok) {
//             // Если ответ не успешен, отклоняем промис с сообщением об ошибке
//             return Promise.reject(new Error('Ошибка при сохранении данных пользователя.'));
//         }
//         // Если запрос успешен, разрешаем промис
//         return;
//     })
//     .catch(error => {
//         // Обработка ошибок сети или других проблем
//         return Promise.reject(new Error(`Не удалось сохранить данные: ${error.message}`));
//     });
// }

// // Пример использования функции
// const user = {
//     name: 'John Smith',
//     age: 30,
//     email: 'john@example.com'
// };

// saveUserData(user)
//     .then(() => {
//         console.log('User data saved successfully');
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента 
// и время задержки (в миллисекундах) в качестве аргументов. 
// Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

// function changeStyleDelayed(elementId, delay) {
//     // Используем setTimeout для задержки
//     setTimeout(() => {
//         const element = document.getElementById(elementId);
//         if (element) {
//             // Изменяем стиль элемента; например, изменим цвет фона и текст
//             element.style.backgroundColor = 'lightblue';
//             element.style.color = 'white';
//             element.style.fontSize = '20px';
//             element.innerText = 'Стиль изменён!'; // Меняем текст элемента
//         } else {
//             console.error(`Элемент с id "${elementId}" не найден.`);
//         }
//     }, delay);
// }

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
