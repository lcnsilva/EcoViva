const express = require('express');
const EventoController = require('../controllers/eventoController.js');

const routes = express.Router();

routes.get('/eventos', EventoController.listarEventos);
routes.post('/publicacoes', EventoController.cadastrarEvento);
routes.put('/publicacoes/:id', EventoController.atualizarEvento);
routes.delete('/publicacoes/:id', EventoController.excluirEvento);

module.exports = routes;