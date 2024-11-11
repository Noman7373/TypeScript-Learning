// ========================   TypeInferance  ===============

// Types inference refers to the ability of the typescript compiler to automatically determine and assign types to varaibles,  expressions,  and function return values based on their usage and context in the code

/// Where we know already what is the type of value we dont need to write the type

let myName = "Noman"; // The Typescript compiler infers the type is String the variable myName

let age = 0; // The Typescript compiler infers the type is number the variable age

let isAdult = true; // The Typescript compiler infers the type is true the variable isAdult

/// Simple Task
//  Rectangle
const calculateArea = (length: number, width: number): number => {
  return length * width;
};

console.log(calculateArea(20, 10)); // Output: 200
