//? Declare Arrays in Typescript

const arr: number[] = [1, 2, 3, 4, 6];

const number: number[] = new Array(1, 2, 3, 4, 5);

//? array of methods

const game: string[] = ["Cricekt", "Football", "Hockey"];

for (let value of game) {
  console.log(value);
}

const sumOfAll:number = arr.reduce((acc: number, nums: number) => acc + nums, 0);
console.log(sumOfAll);
