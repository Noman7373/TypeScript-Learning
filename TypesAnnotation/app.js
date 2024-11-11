"use strict";
//  Boolean Data type
function isEqual(num, num2) {
    return num === num2;
}
let num = 5;
let num2 = 5;
console.log(isEqual(num, num2)); // true
// isEven
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(5)); // false
// isDividable given integer
function isDividable(n1) {
    return n1 % 4 == 0 || n1 % 8 == 0;
}
console.log(isDividable(4)); // true
console.log(isDividable(3)); // false
console.log(isDividable(10)); // false
console.log(isDividable(8)); // true
// BigInt Type
// Biginit is useable for big numnber
// In js we can not read the whole number that is beyond the raise 2 power 53
// 2 ^ 53 ===  number
// Use n last of the bigInit
// big number of ammount javascript can handle if the above we have to use bigInit notation (n)
// const maxNumber:bigInt = Number.MAX_SAFE_INTEGER;
let maxNumber = 9007199254740991n;
// console.log(maxNumber); // 9007199254740991n;
let maxNumber2 = BigInt("9007199254740991");
// console.log(maxNumber2); // 9007199254740991n
let sum = maxNumber + maxNumber2;
console.log(sum); //18014398509481982n
let substract = maxNumber - maxNumber2;
console.log(substract); // 0n
let mutiply = maxNumber * maxNumber2;
console.log(mutiply);
let divide = maxNumber / maxNumber2;
console.log(divide);
