function api1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data 1");
      resolve(200);
    }, 2000);
  });
}

function api2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data 2");
      resolve(200);
    }, 2000);
  });
}

function api3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data 3");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  api1();
  await api2();
  await api3();
}
