// =========  Function  =====================
function greeting(user, id) {
    console.log("welcome ".concat(user, " your id is : ").concat(id));
}
greeting("Noman", 1);
/// ===============================  Arrow Function  ======================
var welcomeMSg = function (user, id) {
    console.log("welcome ".concat(user, " your id is : ").concat(id));
};
welcomeMSg("Ahmed", 2);
/// Function Return Types
//  By default type is void
var guest = function (user, id) {
    return "welcome ".concat(user, " your id is : ").concat(id);
};
console.log(welcomeMSg("Ahmed", 2));
/// isPalindrome
var isPalindrome = function (str) {
    var strPalindrome = str.split("").reverse().join("");
    return str === strPalindrome;
};
console.log(isPalindrome("12321")); /// true
// calculate the avg giving integers
function calculateAvg(arr) {
    var sumArr = arr.reduce(function (acc, value) { return acc + value; }, 0); // Sum all elements of the array
    console.log(sumArr);
    var avg = sumArr / arr.length;
    return avg;
}
console.log(calculateAvg([25, 25]));
/// findMax Number of given array
// [1,2,3,4,5]
var findMaxNum = function (num) {
    var maxIs = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] > maxIs) {
            maxIs = num[i];
        }
    }
    return maxIs;
};
console.log("Find MaxValue", findMaxNum([1, 2, 3, 4, 5])); // index 4 & element 5
