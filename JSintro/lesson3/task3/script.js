function summMathSqrt(param1, param2) {
    return Math.sqrt(param1) + Math.sqrt(param2);
}

let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter second number');
alert(summMathSqrt(num1, num2));

// const minNum = (param1, param2) => {
//     if (param1 > param2) {
//         return param2
//     } else if (param1=param2) {
//         return 'equal'
//     } else {
//         return param1
//     }
// }

const min = (num1, num2) => num1 > num2 ? num2 : num1;

let num3 = +prompt('Enter first number');
let num4 = +prompt('Enter second number');
// alert(minNum(num3, num4));
alert(min(num3,num4));