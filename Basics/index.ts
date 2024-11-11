//@ts-ignore
let str: string = "Noman";
console.log(str);

// let text: string = "Hello";
// let text1: string = "From Typescript";

// let greeting: string = text + text1;
// console.log(greeting);

let fullName: string = "Noman Ahemd";

let fullNameUpperCase: string = fullName.toUpperCase();
let fullNameLowerCase: string = fullName.toLowerCase();
let firstName: string = fullName.slice(0, 5);
console.log("FirstName", firstName);

//@ts-ignore
//  Define the fucntion
function sumTwo(a: number, b: number): number {
  return a + b;
}

console.log(sumTwo(5, 5));
