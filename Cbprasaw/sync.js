console.log("One");

function hello() {
  console.log("Hello, World!");
}

console.log("Two");

setTimeout(hello, 3000);

console.log("Three");

setTimeout(() => {
  console.log("This is a delayed message!");
}, 3000);

console.log("Four");
