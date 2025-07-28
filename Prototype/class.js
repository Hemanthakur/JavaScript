class Car {
  constructor(brand, mileage) {
    console.log("Car constructor called");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("Car is starting");
  }
  stop() {
    console.log("Car is stopping");
  }
  //   setBrand(brand) {
  //     this.brand = brand;
  //   }
}

let toyota = new Car("Toyota", 10);
// toyota.start();
// toyota.stop();
// toyota.setBrand("Toyota");
console.log(toyota);

let lexus = new Car("Lexus", 15);
// lexus.start();
// lexus.stop();
// lexus.setBrand("Lexus");
console.log(lexus);
