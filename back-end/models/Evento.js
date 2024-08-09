const Sequelize = require('sequelize');
const db = require('../config/dbConnection.js');

const Evento = db.define('eventos', {
    id_evento : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo : {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_organizador : {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_inicio : {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_final : {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    endereco : {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Evento;