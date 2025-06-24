let disc = document.querySelectorAll(".box");
// disc[0].innerText = "This is a box";
// disc[1].innerText = "This is another box";
// disc[2].innerText = "This is a third box";
console.dir(disc);

let idx = 1;

//Advance

for (div of disc) {
  div.innerText = `This is box number ${idx}`;
  idx++;
}
