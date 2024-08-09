const Sequelize = require('sequelize');
const db = require('../config/dbConnection.js');

const Publicacao = db.define('publicacoes', {
    id_publicacao : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome : {
        type: Sequelize.STRING,
        allowNull: false
    },
    topico : {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    contato : {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgsrc : {
        type: Sequelize.STRING,
    }
})

module.exports = Publicacao;

