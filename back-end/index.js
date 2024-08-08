const db = require('./config/dbConnection.js');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

db.authenticate().then(() => {
    console.log("Conectado ao banco de dados.")
}).catch( (error) => {
    console.log("Erro ao conectar.", error);
})

const allowedOrigins = ['http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:5500'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log('Origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Gincana TECH API");
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http:localhost:${PORT}`);
})



