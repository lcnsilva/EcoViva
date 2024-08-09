const express = require('express');
const DicaController = require('../controllers/dicaController.js');

const routes = express.Router();

routes.get('/dicas', DicaController.listarDicas);
routes.post('/dicas', DicaController.cadastrarDica);
routes.put('/dicas/:id', DicaController.atualizarDica);
routes.delete('/dicas/:id', DicaController.excluirDica);

module.exports = routes;