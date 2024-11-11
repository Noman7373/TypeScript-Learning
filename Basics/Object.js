var student = {
    name: "Noman Ahmed",
    age: 23,
    address: {
        city: "Muharraq",
        country: "Bahrain",
    },
};
console.log(student.address.country);
var student2 = {
    name: "Noman Ahmed",
    age: 23,
    address: {
        city: "Muharraq",
        country: "Bahrain",
    },
};
var student3 = {
    name: "Noman Ahmed",
    age: 23,
    address: {
        city: "Muharraq",
        country: "Bahrain",
    },
};
var student4 = {
    name: "Noman Ahmed",
    age: 23,
    address: {
        city: "Muharraq",
        country: "Bahrain",
    },
};
var product = {
    name: "Laptop",
    price: 30,
    quantity: 10,
};
function calculateTotalPrice(product) {
    return product.price * product.quantity;
}
// const { price, quantity } = product
console.log(calculateTotalPrice(product));
// const productTotal: number = product.price * product.quantity;
// console.log(productTotal);
