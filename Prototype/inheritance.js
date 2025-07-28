class parent {
  hello() {
    console.log("Hello from parent class");
  }
}

class child extends parent {}

let c = new child();
c.hello(); // Output: Hello from parent class

class Person {
  constructor(name) {
    this.name = name;
    this.species = "Homo sapiens";
  }
  eat() {
    console.log("Eating...");
  }
  sleep() {
    console.log("Sleeping...");
  }
}

class Engineer extends Person {
  constructor(name, branch) {
    super(name); // to invoke the parent class constructor
    this.branch = branch;
  }
  code() {
    super.eat();
    console.log("Coding...");
    super.sleep();
  }
}

let Hemant = new Engineer("Hemant", "Computer Science");
