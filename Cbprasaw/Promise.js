// let promise = new Promise((resolve, reject) => {
//   console.log("I  am a promise");
//   resolve("suceess");
//   //   reject("Got errorff");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

const getPromise = () => {
  return new Promise((resolve, rejcet) => {
    console.log("I am a promise");
    // resolve("Success");
    rejcet("Network error");
  });
};

// let promise = getPromise();

// promise.then((res) => {
//   console.log("Promise fulfilled ", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log("fetchig data 2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {});
// });

console.log("fetching data 1");
asyncFunc1().then((res) => {
  console.log("fetchig data 2");
  asyncFunc2().then((res) => {});
});
