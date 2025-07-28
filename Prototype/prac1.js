let DATA = "Secret Data";

class User {
  viewData() {
    console.log("data", DATA);
  }
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Q2
class Admin extends User {
  constructor(name, email) {
    super(name, email); // Call the parent class constructor
  }
  editData() {
    DATA = "Edited Secret Data";
    super.viewData();
  }
}

let u1 = new User("Hemant", "hemant@example.com");
u1.viewData(); // Output: Viewing data
console.log(u1);
let u2 = new User("Amit", "amit@example.com");
u2.viewData(); // Output: Viewing data
console.log(u2);

let a1 = new Admin("admin1", "admin1@example.com");
a1.editData(); // Output: Viewing data
