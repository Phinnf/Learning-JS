const user = { name: "Alex", age: 0 };

// CÁCH VIẾT NGHIỆP DƯ: Phải so sánh rườm rà
if (user.name !== "") {
  console.log("Tên hợp lệ");
}

// CÁCH VIẾT CHUYÊN NGHIỆP: Tận dụng Truthy / Falsy
if (user.name) {
  console.log("Tên hợp lệ"); // Sẽ chạy vì "Alex" là Truthy
}

if (user.age) {
  console.log("Tuổi hợp lệ");
} else {
  console.log("Tuổi không hợp lệ"); // Sẽ chạy vào đây vì số 0 là Falsy!
}

const score = 85;
const modernScore =
  score >= 80 ? "Xuất sắc"
  : score >= 60 ? "Đạt yêu cầu"
  : "Không đạt yêu cầu";
console.log(modernScore);

let customerAge = 8;
let ticketPrice = undefined;
let tkPriceOnAge = customerAge > 12 ? (ticketPrice = 100) : (ticketPrice = 50);
console.log(ticketPrice);

