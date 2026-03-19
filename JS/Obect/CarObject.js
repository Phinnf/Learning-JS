const carTest = {
  test: "This is a car object",
  eat() {
    console.log("The car is eating fuel...");
  },
};

const multiply = (a, b) => {
  return a * b;
};

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  move() {
    console.log(`${this.brand} đang di chuyển trên đường...`);
  }
}
const toyota = new Car("toyota");

toyota.move();

for (const key in toyota) {
  console.log(`${key}: ${toyota[key]}`);
}

class ElectricCar extends Car {
  constructor(brand, batteryLife) {
    super(brand);
    this.batteryLife = batteryLife;
  }
  move() {
    super.move();
    console.warn(`Current battery: ${this.batteryLife}%`);
  }
}
const Tesla = new ElectricCar("Tesla", 85);

Tesla.move();

let currentTime = new Date().toLocaleDateString();
console.warn(currentTime);

let numbers = [1, 5, 10, 15];
let doubleArray = numbers.map((x) => x * 2);
console.log(doubleArray);
