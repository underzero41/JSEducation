let userAge = Number(prompt("Ваш возраст?", 30));
if (userAge <= 0) {
    alert('Ввели неверное значение')
} else if (userAge === 1){
    alert(`Вам ${userAge} год`);
} else if(userAge <= 4 && userAge >= 2){
    alert(`Вам ${userAge} года`);    
} else {
    alert(`Вам ${userAge} лет`);
}


let userName = prompt("Как вас зовут?", "Имя");
alert(`Добро пожаловать на сайт ${userName}`);