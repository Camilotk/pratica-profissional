// Importando as dependências do projeto
const express = require("express");
const mongoose = require('mongoose');
const requireDir = require("require-dir");
const cors = require("cors");

// Cria uma aplicação Express
const app = express();
//Permitir enviar dados para a App no formato JSON
app.use(express.json());
//Cria a conexão com o banco de dados
app.use(cors());

const uri =
"mongodb+srv://dbUser:123luis123@cluster0.cifcl.mongodb.net/ifrs_db?retryWrites=true&w=majority";
mongoose.connect(uri,
{ useNewUrlParser: true, useUnifiedTopology: true });
//Registra o Model em index.js
requireDir("./src/models");
// Redireciona o caminho http://localhost:3000/api para o routes
app.use('/api', require('./src/routes'));
// Inicia o servidor na porta '3000'
app.listen(3000, () => {
console.log("Exemplo de aplicativo ouvindo a porta 3000");
});
