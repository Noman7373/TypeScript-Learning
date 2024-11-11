let student: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Noman Ahmed",
  age: 23,
  address: {
    city: "Muharraq",
    country: "Bahrain",
  },
};

console.log(student.address.country);

//   ============================  Type Aliases:  ==========================================

//  In Typescript , a type of alais is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type , making it easier reuse and refer to to the same type different parts of your code..

type Student = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
  class?: string; // Optional
};

let student2: Student = {
  name: "Noman Ahmed",
  age: 23,
  address: {
    city: "Muharraq",
    country: "Bahrain",
  },
};
let student3: Student = {
  name: "Noman Ahmed",
  age: 23,
  address: {
    city: "Muharraq",
    country: "Bahrain",
  },
};
let student4: Student = {
  name: "Noman Ahmed",
  age: 23,
  address: {
    city: "Muharraq",
    country: "Bahrain",
  },
};

// Type ALias
type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product: Product = {
  name: "Laptop",
  price: 30,
  quantity: 10,
};

function calculateTotalPrice(product: Product): number {
  return product.price * product.quantity;
}

// const { price, quantity } = product

console.log(calculateTotalPrice(product));

// const productTotal: number = product.price * product.quantity;
// console.log(productTotal);
