const student = {
  name: "Hemant",
  age: 25,
  printAge: function () {
    console.log("marks: " + this.age);
  },
};

const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
  //   calcTax1: function () {
  //     console.log("Tax rate is 15%");
  //   },
};

const karan = {
  salary: 50000,
};

const amit = {
  salary: 60000,
};

const ankit = {
  salary: 70000,
  calcTax: function () {
    console.log("Tax rate is 20%");
  },
};

//To set the prototype of karan to employee
karan.__proto__ = employee;
amit.__proto__ = employee;
ankit.__proto__ = employee;
