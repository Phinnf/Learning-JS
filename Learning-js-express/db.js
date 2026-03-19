import pkg from "pg";
const { Pool } = pkg;

import "dotenv/config";

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool
  .connect()
  .then(() => console.log("🟢 Đã kết nối thành công với PostgreSQL!"))
  .catch((err) => console.error("🔴 Lỗi kết nối database:", err.message));

export default pool;
