import express from "express";
import { response } from "./src/util/helper.util.js";
import pool from "./db.js"; 
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// 1. GET -
app.get("/todos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    return res.response(undefined, 500, `Server error: ${error}`, false);
  }
});

// 2. GET theo ID
app.get("/todos/:id", async (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    if (isNaN(todoId)) {
      return res.status(400).json({ message: "ID không hợp lệ" });
    }

    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [
      todoId,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy công việc này" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi Server" });
  }
});

// 3. POST
app.post("/todos", async (req, res) => {
  try {
    const { title, completed } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "Tiêu đề không hợp lệ" });
    }

    const dbResult = await pool.query(
      "INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *",
      [title.trim(), completed === true],
    );

    res.status(201).json({
      message: "Thêm thành công",
      data: dbResult.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi Server" });
  }
});

// 4. PUT - Cập nhật
app.put("/todos/:id", async (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    if (isNaN(todoId)) {
      return res.status(400).json({ message: "ID không hợp lệ" });
    }

    const { title, completed } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "Tiêu đề không hợp lệ" });
    }

    const dbResult = await pool.query(
      "UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
      [title.trim(), completed === true, todoId],
    );

    if (dbResult.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy công việc này trong DB" });
    }

    res.json({
      message: "Cập nhật thành công",
      data: dbResult.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi Server" });
  }
});

// 5. DELETE - Xóa
app.delete("/todos/:id", async (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    if (isNaN(todoId)) {
      return res.status(400).json({ message: "ID không hợp lệ" });
    }

    const dbResult = await pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [todoId],
    );

    if (dbResult.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy công việc để xóa" });
    }

    res.json({ message: "Xóa thành công" });
  } catch (error) {
    console.error(error);
    return response(undefined, 500, "Loi Server", false);
  }
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});
