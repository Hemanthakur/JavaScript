console.log("Demo Js");
// Prac - 1
const product = {
  title: "Ball pen",
  rating: 2,
  price: 20,
  offer: 20,
};
console.log(product);

//Prac -2

const profile = {
  name: "John",
  isfollow: true,
  post: 20 + " posts",
  followers: 1000,
  following: 500,
  description: "This is a profile description",
};
//Add a nek key to the profile object
profile.profession = "Software Engineer";
console.log(profile);

profile.isFollow = profile.isfollow;
delete profile.isfollow; // Correcting the key name to camelCase
console.log(profile);
