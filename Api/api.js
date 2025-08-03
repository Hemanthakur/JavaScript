const URL = "https://dogapi.dog/api/v2/breeds";

const fact = document.querySelector("#description");

const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("Getting data ....");
  let response = await fetch(URL);
  console.log(response);
  //to get output data readable
  let data = await response.json();
  console.log(data.data[0]["attributes"]["description"]);
  fact.innerText = data.data[0]["attributes"]["description"];
};

btn.addEventListener("click", getFacts);
