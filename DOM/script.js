// console.log("Hello World from script.js");
// alert("Hello World");
//By Id
let Heaading = document.getElementById("Heading");
console.dir(Heaading);
//By Class Name
let paragraph = document.getElementsByClassName("paragraph");
console.dir(paragraph);
console.log(paragraph[0].innerHTML);
// By tag Name
let tg = document.getElementsByTagName("p");
console.dir(tg);
console.log(tg[0].innerHTML);

console.log("==========================");
// By Query Selector
let queryClass = document.querySelector(".paragraph");
let queryId = document.querySelector("#Heading");
let queryTag = document.querySelectorAll("p");
console.dir(queryClass.innerHTML);
console.dir(queryId);
console.dir(queryTag);
