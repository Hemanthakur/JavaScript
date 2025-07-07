let modeButton = document.querySelector("#modeButton");

let currentMode = "light";

// Short uct with css
// modeButton.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode"); //Direct toggle in one line
//
// });

modeButton.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    document.querySelector("body").classList.add("dark-mode");
    document.querySelector("body").classList.remove("light-mode");
    // document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("body").style.color = "white";
  } else {
    currentMode = "light";
    document.querySelector("body").classList.add("light-mode");
    document.querySelector("body").classList.remove("dark-mode");
    // document.querySelector("body").style.backgroundColor = "white";
    // document.querySelector("body").style.color = "black";
  }
  console.log("Current mode:", currentMode);
});
