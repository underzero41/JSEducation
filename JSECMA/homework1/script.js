// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
//  решение задание должно состоять из одной строки

// const arr = [1, 5, 7, 9]; 
// const minNum = Math.min(...arr);

// console.log(minNum);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
//  Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
//  Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter() {
//     let count = 0; // приватное свойство для хранения значения счетчика

//     return {
//         increment: function() {
//             count += 1; // увеличиваем счетчик на 1
//             return count; // возвращаем текущее значение
//         },
//         decrement: function() {
//             count -= 1; // уменьшаем счетчик на 1
//             return count; // возвращаем текущее значение
//         },
//         getCount: function() {
//             return count; // метод для получения текущего значения счетчика
//         }
//     };
// }

// // Пример использования:
// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(counter.getCount()); // 1


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в 
// качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
    // Если корневой элемент имеет нужный класс, возвращаем его
    if (root.classList && root.classList.contains(className)) {
        return root;
    }

    // Ищем в дочерних элементах
    for (let child of root.children) {
        const found = findElementByClass(child, className);
        if (found) {
            return found; // Если найдён, возвращаем его
        }
    }

    return null; // Если элемент не найден, возвращаем null
}

// Пример использования:
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
