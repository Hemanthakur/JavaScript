//prac 1
alert("Enter a number to check if it is multiple of 5");
let num = prompt("Enter your numnber: ");
if (num % 5 == 0) {
  console.log("The number is multiple by 5");
} else {
  console.log("The number is not multiple by 5");
}

//prac 2
let marks = prompt("Enter your marks: ");
if (marks >= 90 && marks <= 100) {
  console.log("You got A grade");
} else if (marks >= 70 && marks < 89) {
  console.log("You got B grade");
} else if (marks >= 60 && marks < 69) {
  console.log("You got C grade");
} else if (marks >= 50 && marks < 59) {
  console.log("You got D grade");
} else if (marks >= 0 && marks < 49) {
  console.log("You got F grade");
}
