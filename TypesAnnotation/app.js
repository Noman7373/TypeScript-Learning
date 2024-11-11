"use strict";
/// ======================================   Boolean    =======================================
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
/// ======================================   BigInit    =======================================
// Biginit is useable for big numnber
// In js we can not read the whole number that is beyond the raise 2 power 53
// 2 ^ 53 ===  number
// Use n last of the bigInit
// big number of ammount javascript can handle if the above we have to use bigInit notation (n)
// const maxNumber:bigInt = Number.MAX_SAFE_INTEGER;
let maxNumber = 9007199254740991n;
console.log(maxNumber); // 9007199254740991n;
let maxNumber2 = BigInt("9007199254740991");
console.log(maxNumber2); // 9007199254740991n
let sum = maxNumber + maxNumber2;
console.log(sum); //18014398509481982n
let substract = maxNumber - maxNumber2;
console.log(substract); // 0n
let mutiply = maxNumber * maxNumber2;
console.log(mutiply); //81129638414606663681390495662081n
let divide = maxNumber / maxNumber2;
console.log(divide); // 1n
/// ====================================== Difference  Any vs Unknow  =======================================
//  The ANY types is the most flexible types in Typescript. It is essantially turn off all types checking for the variables or expression it is applied to..
// ================  Use Cases  =====
// Dynamic Data   , users Input , network responses , or deserialized JSON Objects , the any type can be useful
// Example
let favNum = 5;
favNum = "Noman";
favNum = true;
/// Unknow Type
// The UNKNOWN type is safer alternative to ANY because it still ecfources type checking and type safety
// Example
let number;
number = "Noman";
number = 5;
number = true;
if (typeof number === "number") {
    console.log(number + 5); // Output 10 because
}
else if (typeof number === "boolean") {
    console.log("Type is number", number);
}
