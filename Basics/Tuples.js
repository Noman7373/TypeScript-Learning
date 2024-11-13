// ====================  Tuples   ==================================
// ?  Tuples are data structure that allows us to store a fixd-size collection of element of different types they are similar to arrays key different in TUPLES................
// Example Array
var favCity = ["Pakistan", "Bahrain", "KSA"];
var person1 = ["Noman", 22, true];
var person2 = ["Nomi", 23, false];
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasLicence = person[2];
    console.log("Name is ".concat(name, " and age is ").concat(age, " driving license: ").concat(hasLicence ? "Yes" : "No"));
};
displayPersonInfo(person1); //Name is Noman and age is 22 driving license: Yes
displayPersonInfo(person2); //Name is Noman and age is 22 driving license: No
