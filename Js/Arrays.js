// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);

//Prac 1

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let avg = sum / marks.length;
// console.log(`Average marks of class is ${avg}`);

// prac 2

let price = [250, 645, 300, 900, 50];

for (let i = 0; i < price.length; i++) {
  let disc = price[i] / 10;
  price[i] = price[i] - disc;
}

// console.log(`The discounted price of items are \n ${price}`);

// Prac 3

let companies = [
  "Bloomberg",
  "Microsoft",
  "Amazon",
  "Uber",
  "Google",
  "IBM",
  "Netflix",
];
console.log(companies);
//Delete first Element
let deleteFirst = companies.shift();
console.log(companies);

//Remove Uber and add Ola in its place
companies.splice(2, 1, "Ola");
console.log(companies);

//Add Apple at the end
companies.push("Apple");
console.log(`Companies are `, companies);
