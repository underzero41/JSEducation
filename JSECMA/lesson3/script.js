// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// const MusicSeries = {
//     model: 'music series',
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
//     startWipe() {
//         console.log('I am the method of Music Series');
//         console.log('I am starting to wipe the floor');
//     }
// };

// const Blues = {
//     model: 'Blues',
//     power: 250,
//     batterySize: 2500,
//     workTime: 50
// };

// Object.setPrototypeOf(Blues, MusicSeries);

// function getPrototypeChain (obj) {
//     const prototypeChain = [];

//     let currentObj = obj;

//     while (currentObj !== null) {
//         prototypeChain.push(currentObj);
//         currentObj = Object.getPrototypeOf(currentObj);
//     }

//     return prototypeChain;
// }

// const prototypeChain = getPrototypeChain(Blues);
// console.log(prototypeChain);


// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`Животное ${this.name} издает звук`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     fetch() {
//         console.log(`Собака ${this.name} принесла мяч`);
//     }
// }

// const animal1 = new Animal("Собака");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.


// Создайте  класс Product, который будет представлять товар в магазине.
// У товара должны быть следующие свойства:
// name(строка) - имя товара.
// price(число) - цена за одну единицу товара.

// Создайте класс ShoppingCart, представляющий корзину интернет- магазина.
// Конструктор класса ShoppingCart должен принимать два параментра:
// customerName(строка) - имя покупателя.
// initialTotalCost(число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста)

// У класса ShoppingCart  должен быть метод addItem(product, quantity), 
// который позволяет добавить товар в корзину. Метод должен принимать два параметра:
// product(объект класса Product) - товар, который добавляется в корзину.
// quantity(число, по умолчанию 1) - количество едениц товара, которое нужно добавить в корзину.
// Если quantity не указано, считается что добавляется одна еденица товара.
// У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую 
// стоимость заказа.

// У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение
// с общей стоимостью заказа и благодарность за покупку


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.items = [];
    }
    
    addItem(product, quantity = 1) {
        this.totalCost += product.price * quantity;
        this.items.push({product, quantity});
    }

    getCurrentTotalCost() {
        return this.totalCost;
    }

    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа : ${this.totalCost} рублей. Спасибо за Покупку!`);
    }
}

const tshirt = new Product('Футболка', 1000);
const jeans = new Product('Джинсы', 2000);

const userCart = new ShoppingCart('Дима', 0);

userCart.addItem(tshirt, 2);
userCart.addItem(jeans);
console.log(`Общая стоимость ${userCart.getCurrentTotalCost()} рублей`);

userCart.checkout();
