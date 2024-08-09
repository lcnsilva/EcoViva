const express = require('express');
const EventoController = require('../controllers/eventoController.js');

const routes = express.Router();

routes.get('/eventos', EventoController.listarEventos);
routes.post('/eventos', EventoController.cadastrarEvento);
routes.put('/eventos/:id', EventoController.atualizarEvento);
routes.delete('/eventos/:id', EventoController.excluirEvento);

module.exports = routes;