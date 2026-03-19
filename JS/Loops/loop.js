const fruits = [`apple`, `banana`, `orange`];
// for (let i = 0; i < fruits.length; i++){
//     console.log(`Index ${i}: ${fruits[i]}`)
// }

let i = 0;
while (i < fruits.length) {
  console.log(`Index ${i}: ${fruits[i]}`);
  i++;
  console.log(i);
}

do {
  console.log(`Hello: ${i + 1}`);
  i++;
} while (i < 3);

for (const fruit of fruits) {
  console.log(fruit);
}

const userProfile = {
  name: "John Doe",
  age: 30,
  experience: 5,
};
for (const key in userProfile) {
  console.log(`${key}: ${userProfile[key]}`);
}

i = 0;
const numbers = [10, 20, 30, 40, 50];
while (i < numbers.length) {
  if (numbers[i] <= 30) {
    console.log(numbers[i]);
    i++;
  } else {
    break;
  }
}
const lessThan30 = numbers.filter((num) => {
  return num <= 30;
});
console.log(lessThan30);

const users = [
  { username: "john_doe", violationCount: 0, isAdmin: false },
  { username: "hacker99", violationCount: 5, isAdmin: false },
  { username: "super_admin", violationCount: 10, isAdmin: true },
  { username: "spammer", violationCount: 3, isAdmin: false },
];
const bannedUser = users.filter(
  (user) => user.violationCount >= 3 && !user.isAdmin,
);

