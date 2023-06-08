const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "infoCadastro",
  port: 3307
});

app.delete("/cad/:cpf/delete", (req, res) => {
  const { cpf } = req.params;
  let SQL = "DELETE FROM cadastro WHERE cpf = ?";
  db.query(SQL, [cpf], (err, result) => {
    if (err) {
      console.error('Erro ao excluir a conta:', err);
      res.status(500).send('Erro ao excluir a conta');
    } else {
      res.sendStatus(200);
    }
  });
});

app.post("/cad", (req, res) => {
  const { nome, cpf, email, senha } = req.body;
  let SQL = "INSERT INTO cadastro (nome, cpf, email, senha) VALUES (?, ?, ?, ?)";
  db.query(SQL, [nome, cpf, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar:', err);
      res.status(500).send('Erro ao cadastrar');
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/cad", (req, res) => {
  let SQL = "SELECT * FROM cadastro";
  db.query(SQL, (err, result) => {
    if (err) {
      console.error('Erro ao obter os dados:', err);
      res.status(500).send('Erro ao obter os dados');
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
