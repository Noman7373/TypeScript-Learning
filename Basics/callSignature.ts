// ====================================   Call Signature  ===================================
// The function call signature refers to the declaration or defination of a function , which includes the function's name , parameter , and return type it define the structure of a function....

type Staff = {
  name: string;
  age: number;
  gender?: string;
    greet: (country: string) => string;
//   (country: string): string; // pure call signature
};

const staff1: Staff = {
  name: "Noman Ahmed",
  age: 24,
  greet: (country): string =>
    `welcome my name is ${staff1.name} and im ${staff1.age} year old im from ${country}  `,
};
const staff2: Staff = {
  name: "Noman Ahmed",
  age: 24,
  greet: (country): string =>
    `welcome my name is ${staff1.name} and im ${staff1.age} year old im from ${country}  `,
};

console.log(staff1.greet("Pakistan"));
console.log(staff2.greet("Bahrain"));

const introduction = (staff1: Staff) => {
  const { name, age } = staff1;
  return `Hi my name is ${name} and im ${age} years old`;
};

console.log("Greeting", introduction(staff1));
