// ====================  Tuples   ==================================

// ?  Tuples are data structure that allows us to store a fixd-size collection of element of different types they are similar to arrays key different in TUPLES................

// Example Array

let favCity: any[] = ["Pakistan", "Bahrain", "KSA"];

// When we sure a element of we want to store and also a same type it deos not change in future
// Tuples

type personInfo = readonly [string, number, boolean];

let person1: personInfo = ["Noman", 22, true];

let person2: personInfo = ["Nomi", 23, false];

const displayPersonInfo = (person: personInfo) => {
  const [name, age, hasLicence] = person;
  console.log(
    `Name is ${name} and age is ${age} driving license: ${
      hasLicence ? "Yes" : "No"
    }`
  );
};

displayPersonInfo(person1); //Name is Noman and age is 22 driving license: Yes
displayPersonInfo(person2); //Name is Noman and age is 22 driving license: No
