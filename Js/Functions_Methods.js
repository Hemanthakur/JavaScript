//Prac 1
function countsVowel(str) {
  let count = 0;
  for (const c of str) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
      count++;
    }
  }
  return count;
}
// console.log(countsVowel("apnacollege"));

//Prac 2
const countVowel = (str) => {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
};

// console.log(`Total voewl in work Java Script is :`, countVowel("apnaCollege"));

//Prac 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let calculateSquare = function (val) {
//  console.log(val * val);
//};

//arr.forEach(calculateSquare);

arr.forEach((val) => {
  // console.log(val * val);
});

//Prac 4
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr1.reduce((res, curr) => {
  return res + curr;
});
// console.log(`Sum of 10 numbers using map is `, sum);

let max = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
// console.log(`Max of 10 numbers using map is `, max);

//prac 5
let marks = [68, 79, 91, 28, 10, 90, 94, 98, 83];

let ans = marks.filter((val) => {
  return val > 90;
});

// console.log(ans);

// Prac 6
let number = prompt("Enter a number");
let arrs = [];
for (let i = 0; i < number; i++) {
  arrs[i] = i + 1;
}
console.log(arrs);
// console.log(
//   arrs.forEach((val) => {
//     console.log(val);
//   })
// );
// let sums = arrs.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(sums);

let multi = arrs.reduce((prev, curr) => {
  return prev * curr;
});

console.log(multi);
