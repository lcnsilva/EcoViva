const db = require('./config/dbConnection.js');
const express = require('express');
const cors = require('cors');
const PublicacaoController = require('./controllers/publicacaoController.js');
const EventoController = require('./controllers/eventoController.js');

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

app.get('/teste', PublicacaoController.listarPublicacoes);
app.post('/teste', PublicacaoController.cadastrarPublicacao);
app.put('/teste/:id', PublicacaoController.atualizarPublicacao);
app.delete('/teste/:id', PublicacaoController.excluirPublicacao);
app.get('/teste2', EventoController.listarEventos);
app.post('/teste2', EventoController.cadastrarEvento);
app.put('/teste2/:id', EventoController.atualizarEvento);
app.delete('/teste2/:id', EventoController.excluirEvento);

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
})



