// Một chuỗi JSON bị lỗi (thiếu dấu ngoặc kép ở chữ age)
const badJsonData = '{"name": "Alex", age: 25}';

console.log("--- Bắt đầu ứng dụng ---");

try {
  console.log("1. Đang cố gắng đọc dữ liệu...");

  // Dòng lệnh này gặp lỗi và "phát nổ"
  const user = JSON.parse(badJsonData);

  // NHỮNG DÒNG BÊN DƯỚI LỖI SẼ KHÔNG BAO GIỜ ĐƯỢC CHẠY
  console.log("2. Đọc thành công:", user.name);
} catch (error) {
  // JS Engine lập tức "nhảy" thẳng xuống đây khi có lỗi ở block try
  console.log("🚨 Bắt được lỗi rồi!");
  console.log("Tên của lỗi:", error.name); // Kết quả: SyntaxError
  console.log("Chi tiết lỗi:", error.message); // Kết quả: Expected property name...
} finally {
  // KHỐI NÀY LUÔN LUÔN CHẠY (Dù thành công hay thất bại)
  console.log("3. Dọn dẹp: Ẩn vòng xoay Loading (Spinner)...");
}

console.log("--- Ứng dụng vẫn chạy tiếp tục bình thường ---");

function login(password) {
  if (password.length < 6) {
    // Chủ động ném ra một Ngoại lệ (Exception)
    throw new Error("Mật khẩu quá ngắn, phải từ 6 ký tự trở lên!");
  }
  return "Đăng nhập thành công!";
}

try {
  const result = login("123");
  console.log(result);
} catch (err) {
  console.log("Lỗi đăng nhập:", err.message);
  // Kết quả in ra: Lỗi đăng nhập: Mật khẩu quá ngắn, phải từ 6 ký tự trở lên!
}

function withdrawMoney(amount, balance) {
    if (amount > balance) {
        throw new Error("So du khong du")
    }
    return balance - amount;
}
try {
    withdrawMoney(500, 200)
}
catch (err){
    console.log(`${err}`)
}

// YÊU CẦU 2: Bọc lời gọi hàm withdrawMoney(500, 200) bên trong một cấu trúc try/catch. 
// Hãy in ra màn hình console.log(error.message) nếu có lỗi xảy ra.