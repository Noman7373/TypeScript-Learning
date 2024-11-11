//  Boolean Data type

function isEqual(num: number, num2: number): boolean {
  return num === num2;
}
let num: number = 5;

let num2: number = 5;

console.log(isEqual(num, num2)); // true

// isEven
function isEven(n: number): boolean {
  return n % 2 === 0;
}

console.log(isEven(5)); // false

// isDividable given integer

function isDividable(n1: number): boolean {
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

let maxNumber: bigint = 9007199254740991n;
// console.log(maxNumber); // 9007199254740991n;

let maxNumber2 = BigInt("9007199254740991");
// console.log(maxNumber2); // 9007199254740991n

let sum: bigint = maxNumber + maxNumber2;
console.log(sum); //18014398509481982n

let substract: bigint = maxNumber - maxNumber2;
console.log(substract); // 0n

let mutiply: bigint = maxNumber * maxNumber2;

console.log(mutiply); //81129638414606663681390495662081n

let divide: bigint = maxNumber / maxNumber2;
console.log(divide); // 1n
