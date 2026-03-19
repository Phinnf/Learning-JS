const userRoles = new Map();


const userAn = { name: "An" };
const userBinh = { name: "Binh" };

userRoles.set(userAn, "Admin");
userRoles.set(userBinh, "Editor");
userRoles.set("system_status", "Activate");
userRoles.set(1, 4);

console.log(userRoles.get("system_status"));
console.log(userRoles.get(userAn));
console.log(userRoles.size);

