// we mainlly use async await or promise chain

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("succcess");
    }, 2000);
  });
}

// callback hell nested callbacks pyramid - dooms
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

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

// Async - Await Code
async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
}

//IIFE use once only
(async function () {
  await getData(1);
  await getData(2);
})();
