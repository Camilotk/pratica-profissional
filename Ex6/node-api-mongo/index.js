const express = require('express');
const mongoose = require('mongoose');
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://admin:admin123@cluster0.xpml8.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models/');

app.use('/api', require('./src/router'));

app.listen(3000, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3000");
});