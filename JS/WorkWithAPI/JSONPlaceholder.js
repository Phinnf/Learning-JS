import axios from "axios";
import { error } from "node:console";
import { title } from "node:process";

// const getUserData = async (userId) => {
//   const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
//   try {
//     console.log(`Calling API to: ${url}`);
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(`Data: ${data.name}, ${data.email}`);
//     return data;
//   } catch (error) {
//     console.log(`Failed to get API: ${error.message}`);
//   }
// };

// getUserData(1);

// const getFirstPostTitle = async (titleId) => {
//   const url = `https://jsonplaceholder.typicode.com/posts/${titleId}`;
//   try {
//     console.log(`Calling API to: ${url}`);
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`${response.status}`);
//     }
//     const data = await response.json();
//     console.log(`Title: ${data.title}`);
//     return data;
//   } catch (error) {
//     console.log(`Failed to get API: ${error.message}`);
//   }
// };
// getFirstPostTitle(1);

// const createNewPost = async (postData) => {
//   const url = `https://jsonplaceholder.typicode.com/posts`;
//   try {
//     console.log(`Sending message to server`);
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     });
//     if (!response.OK) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Tạo bài viết thành công! ID mới là:", data.id);
//     console.log("Nội dung server xác nhận:", data);
//     return data;
//   } catch (error) {
//     console.error("Gửi dữ liệu thất bại:", error.message);
//   }
// };
// const myNewPost = {
//   title: "LearnJS",
//   body: "POST method 123",
//   userId: 1,
// };
// createNewPost(myNewPost);

// const registerUser = async (newUser) => {
//   const url = `https://jsonplaceholder.typicode.com/users`;
//   try {
//     console.log(`calling API to : ${url}`);
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP Error ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(`successfully create new user: ${data}`);
//     return data;
//   } catch (error) {
//     console.error(`Failed: ${error}`);
//   }
// };

// const testNewUser = {
//   name: "Mai",
//   username: "mai123123",
//   email: "mai1412@gmail.com",
// };
// registerUser(testNewUser);

const updatePost = async (postId, updatedData) => {
  // Chú ý: URL phải chứa postId để Server biết cần sửa bài nào
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  try {
    console.log(`Đang gửi yêu cầu PUT tới: ${url}`);
    const response = await fetch(url, {
      method: "PUT", // Khai báo hành động là Cập nhật
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), // Ép kiểu Object thành chuỗi JSON
    });

    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Cập nhật thành công! Dữ liệu mới:", data);
    return data;
  } catch (error) {
    console.error("Cập nhật thất bại:", error.message);
  }
};

// Dữ liệu mới muốn ghi đè lên bài viết số 1
const newData = {
  id: 1, // Nên giữ nguyên ID cũ
  title: "Tiêu đề đã được Mentor và Bạn sửa lại",
  body: "Nội dung này dùng phương thức PUT để ghi đè",
  userId: 1,
};

updatePost(1, newData);

const deletePost = async (postId) => {
  // Chỉ điểm đích danh bài viết cần xóa qua URL
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  try {
    console.log(`Đang gửi yêu cầu DELETE tới: ${url}`);
    const response = await fetch(url, {
      method: "DELETE", // Khai báo hành động Xóa, không cần Headers/Body
    });

    if (!response.ok) {
      throw new Error(`Lỗi HTTP: ${response.status}`);
    }

    // Với DELETE, server thường trả về một Object rỗng {} hoặc không trả về body
    console.log(`Đã xóa thành công bài viết số ${postId}!`);
    return true;
  } catch (error) {
    console.error("Xóa thất bại:", error.message);
  }
};

deletePost(1);

const deleteUser = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  console.log(`sending request to: ${url}`);
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(`User số ${userId} đã bị bay màu!`);
    return true;
  } catch (error) {
    console.log(`Delete Failed: ${error.message}`);
  }
};

deleteUser(1);
