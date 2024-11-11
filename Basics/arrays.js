//? Declare Arrays in Typescript
var arr = [1, 2, 3, 4, 6];
var number = new Array(1, 2, 3, 4, 5);
//? array of methods
var game = ["Cricekt", "Football", "Hockey"];
for (var _i = 0, game_1 = game; _i < game_1.length; _i++) {
    var value = game_1[_i];
    console.log(value);
}
var sumOfAll = arr.reduce(function (acc, nums) { return acc + nums; }, 0);
console.log(sumOfAll);
