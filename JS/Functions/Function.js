function greetNew(name = "Guest") {
  return console.log(`Hello ${name}! Welcome to our website.`);
}

greetNew(); // Output: Hello Guest! Welcome to our website.
greetNew("Alice"); // Output: Hello Alice! Welcome to our website.

function sumNew(multiplier, ...numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum * multiplier;
}
let age = 102;
const adult =
  age >= 18 ? "Adult"
  : age >= 100 ? "Elder"
  : "Not Elder";
console.log(adult);

console.log(sumNew(5, 2, 4, 8));

const createBill = (taxRate = 0.1, ...boughtProducts) => {
  const subTotal = boughtProducts.reduce((sum, price) => sum + price, 0);
  const finalTotal = subTotal + subTotal * taxRate;
  return finalTotal;
};
console.log(createBill(undefined, 100, 200, 50));

let score = 100;

const PlayRound = () => {
  let score = 200;
  console.log(`Score is ${score}`);
};

PlayRound();

const numbers = [1, 5, 8, 12, 20];
const filterNumbers = numbers.filter(n => {
  const isValid = n >= 10
  return isValid
})
.reduce((x,y) => {
  const sum = x + y
  return sum
}, 0)

  

console.log(filterNumbers);
