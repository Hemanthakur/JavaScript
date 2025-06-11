console.log("Practice Questions");

//Print all even number from 0 to 100

for (let i = 0; i <= 100; i += 2) {
   console.log(i);
}

for (let i = 0; i <= 100; i ++) {
   if (i % 2 === 0) {
     console.log(i);
   }
}

//Guess the number game until user don't guess the number

 let guess = 4;
 let number = prompt("Enter a number between 1 and 10:");

 while (number != guess)
 {
   number = prompt("You enter wrong number, try again:");
 }
 console.log("You guessed the number!");

// String enter username as full name and print it as @usernamelength

let fullName = prompt("Enter your full name:");
let userName = `@${fullName}${fullName.length}`;
console.log(userName);
