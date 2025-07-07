let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("Button 1 clicked");
//   let a = 25;
//   a++;
//   console.log("Value of a:", a);
// };

let div = document.querySelector("div");

// div.onmouseover = (e) => {
//   console.log("Mouse over the div");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX);
//   console.log(e.clientY);
// };

btn1.addEventListener("click", () => {
  console.log("Button 1 clicked -  handler 1");
});

btn1.addEventListener("click", (evt) => {
  console.log("Button 1 clicked - handler 2");
  //   console.log(evt.target);
});

let handler3 = () => {
  console.log("Button 1 clicked - handler 3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
  console.log("Button 1 clicked - handler 4");
  //   console.log(evt.target);
});

btn1.removeEventListener("click", handler3);
