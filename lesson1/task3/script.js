const c = 10;
const d = 2;
let sumOfCandD = c + d;
let diffOfCandD = c - d;
let productOfCandD = c * d;
let quotOfCandD = c / d;
let sumAll = c + d + sumOfCandD + diffOfCandD + productOfCandD + quotOfCandD;
console.log(
`Сумма чисел ${sumOfCandD}
Разность чисел ${diffOfCandD}
Произведение чисел ${productOfCandD}
Частное деление чисел ${quotOfCandD}`);
console.log(`Сумма всех полученных чисел ${sumAll}`);
