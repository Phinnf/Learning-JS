const cart = [
  { id: 1, item: "laptop", price: 1500 },
  { id: 2, item: "phone", price: 1000 },
  { id: 3, item: "mouse", price: 30 },
];

const expensiveItem = cart.filter(product => product.price >= 1000)

const itemNames = cart.map(product => product.item)

const totalCost = cart.reduce((total, product) => {
    const currentPrice = product.price
    return total + currentPrice
}, 0)
console.log(totalCost)

const scores = [45, 80, 65, 90, 30, ];
const passedScores = scores.filter(p => p > 50)
console.log(passedScores)

const Equal90 = scores.find((score) => {
    return score === 90;
});
console.log(Equal90);