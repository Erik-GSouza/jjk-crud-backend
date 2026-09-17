require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const personagemRoutes = require("./routes/personagemRoutes");

const app = express();


// faz o front acessar API
app.use(cors());

// receber dados no modo json  
app.use(express.json());


//rotra inicial da APi
app.get("/", (req, res) => {
  res.json({ mensagem: "API de personagens funcionando" });
});


// rotas dos persoangens
app.use("/personagens", personagemRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/crud_personagens";


  // conecta mongo e inicia o server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  });