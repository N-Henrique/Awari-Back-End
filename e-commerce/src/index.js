const express = require("express");
const connection = require("./db/connection.js");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const [result] = await connection.execute("select * from produtos;");
    return res.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.post("/", async (req, res) => {
  try {
    if (req.body.nome.length >= 60) {
      return res.status(400).json({ error: "fild is to long" });
    }
    const [result] = await connection.execute(`
    insert into produtos (nome,preco,descricao,categoria,imagem_url,created_at,update_at) values
        ('${req.body.nome}', ${req.body.preco}, '${req.body.descricao}', '${
      req.body.categoria
    }', '${req.body.imagem_url}', ${new Date()}, ${new Date()})
    `);
    return res.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3002);
