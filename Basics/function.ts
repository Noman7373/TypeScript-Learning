// =========  Function  =====================
function greeting(user: string, id: number) {
  console.log(`welcome ${user} your id is : ${id}`);
}

greeting("Noman", 1);

/// ===============================  Arrow Function  ======================

const welcomeMSg = (user: string, id: number) => {
  console.log(`welcome ${user} your id is : ${id}`);
};

welcomeMSg("Ahmed", 2);

/// Function Return Types
//  By default type is void

const guest = (user: string, id: number): string => {
  return `welcome ${user} your id is : ${id}`;
};

console.log(welcomeMSg("Ahmed", 2));

/// isPalindrome

const isPalindrome = (str: string) => {
  let strPalindrome = str.split("").reverse().join("");
  return str === strPalindrome;
};

console.log(isPalindrome("12321")); /// true

// calculate the avg giving integers

function calculateAvg(arr: number[]): number {
  let sumArr = arr.reduce((acc: number, value: number) => acc + value, 0); // Sum all elements of the array
  console.log(sumArr);

  let avg = sumArr / arr.length;
  return avg;
}



console.log(calculateAvg([25, 25])); // 2

/// findMax Number of given array
// [1,2,3,4,5]
const findMaxNum = (num: number[]): number => {
  let maxIs = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > maxIs) {
      maxIs = num[i];
    }
  }
  return maxIs;
};

console.log("Find MaxValue", findMaxNum([1, 2, 3, 4, 5])); // index 4 & element 5
