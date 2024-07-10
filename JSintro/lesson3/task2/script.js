const summOfThree = (num1, num2, num3) => {
    console.log(Number(num1)+ Number(num2)+ Number(num3));
}
let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');
let num3 = +prompt('Enter third number');
let param1 = '1';
let param2 = 2;
let param3 = 3;
summOfThree(num1, num2, num3);
summOfThree(param1, param2, param3);

// function func(num = 5){
//     console.log(num* num);
// }
// func(2);
// func(3);
// func();

