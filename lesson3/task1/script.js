function about (firstName, lastName, age) {
    console.log(`Привет ${firstName} ${lastName} с возрастом ${age}`);
}
about('Иван', 'Петров', 17);

// function square(number) {
//     console.log(number**2);
// }
// square(5);

//использование стрелочной фунции
const seconfDegree = (number) => number**2;
let number = +prompt('Enter number');
alert(seconfDegree(number));

// function test0 (number) {
//     if (number > 0) {
//         console.log('+++');
//     } else if (number === 0){
//         console.log(null);
//     } else {
//         console.log('---');
//     }
// }
// test0(-1);


//использование стрелочной фунции, так же можно использовать alert/cl на усмотрение, если нет четкого тз
const checker = (number) => {
    if (number > 0) {
        return('+++');
    } else if (number === 0){
        return(null);
    } else {
        return('---');
    }
}
let numberCheck = +prompt('Enter number');
alert(checker(numberCheck));