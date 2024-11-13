// ====================================   Call Signature  ===================================
// The function call signature refers to the declaration or defination of a function , which includes the function's name , parameter , and return type it define the structure of a function....
var staff1 = {
    name: "Noman Ahmed",
    age: 24,
    greet: function (country) {
        return "welcome my name is ".concat(staff1.name, " and im ").concat(staff1.age, " year old im from ").concat(country, "  ");
    },
};
var staff2 = {
    name: "Noman Ahmed",
    age: 24,
    greet: function (country) {
        return "welcome my name is ".concat(staff1.name, " and im ").concat(staff1.age, " year old im from ").concat(country, "  ");
    },
};
console.log(staff1.greet("Pakistan"));
console.log(staff2.greet("Bahrain"));
var introduction = function (staff1) {
    var name = staff1.name, age = staff1.age;
    return "Hi my name is ".concat(name, " and im ").concat(age, " years old");
};
console.log("Greeting", introduction(staff1));
