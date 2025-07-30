// function sum(a, b) {
//   console.log(a + b);
// }

// function calculate(a, b, callback) {
//   callback(a, b);
// }

// calculate(5, 10, sum);

// calculate(20, 30, (x, y) => {
//   console.log(x * y);
// });

// // Nesting if else statements

// let age = 19;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("Senior Citizen");
//   } else {
//     console.log("Adult");
//   }
// } else {
//   console.log("Minor");
// }

//Call back to get data after 2 second 1,2,3
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

//callback hell nested callbacks pyramid - dooms
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

//Promise chain
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

// Promise chain More optimize way
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(4);
  })
  .then((res) => {
    console.log(res);
  });
