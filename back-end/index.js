const db = require('./config/dbConnection.js');
const express = require('express');

const app = express();
const PORT = 3000;

db.authenticate().then(() => {
    console.log("Conectado ao banco de dados.")
}).catch( (error) => {
    console.log("Erro ao conectar.", error);
})


app.use(express.json());

app.get('/', (req,res) => {
    res.send("Gincana TECH API");
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http:localhost:${PORT}`);
})



