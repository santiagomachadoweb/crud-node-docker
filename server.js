const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("./database.db");

// Cria a tabela se não existir
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
  )
`);

// CREATE - criar usuário
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.run(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

// READ - listar usuários
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", (err, rows) => {
    res.json(rows);
  });
});

// UPDATE - atualizar usuário
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;
  db.run(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, req.params.id]
  );
  res.json({ updated: true });
});

// DELETE - remover usuário
app.delete("/users/:id", (req, res) => {
  db.run("DELETE FROM users WHERE id=?", [req.params.id]);
  res.json({ deleted: true });
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
