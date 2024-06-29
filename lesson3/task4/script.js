// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
const dayOfTheWeek = (param) => {
    if (param===7) {
        return "Sunday"
    } else if(param===1){
        return "Monday"
    } else if(param===2) {
        return "Tuesday"
    } else if(param===3) {
        return "Wendsday"
    } else if(param===4) {
        return "Thuersday"
    } else if(param===5) {
        return "Friday"
    } else if(param===6) {
        return "Saturday"
    } else {
        return "fatal error"
    }
}
let day = +prompt("Enter number of the day");
alert(dayOfTheWeek(day));



// Написать функцию, которой передаем имя и время. она возвращает приветствие в зависимости от времени суток 
// (Доброе утро\день\вечер\ночи Иван) (гуглить время js)
const timeGreetings = (name, time) => {
    let hour = time.getHours()
    let greetings = ""
    if (hour >= 6 && hour <= 10) {
        greetings = "morning"
    } else if (hour >= 11 && hour <= 16) {
        greetings = "day"
    } else if (hour >= 17 && hour <= 22) {
        greetings = "evening"
    } else {
        greetings = "night"
    }
    msg = `Good ${greetings}, ${name}`

    return msg
}
let username = prompt("What is your name?");
alert(timeGreetings(username, new Date()));