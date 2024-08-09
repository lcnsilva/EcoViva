const Sequelize = require('sequelize');
const db = require('../config/dbConnection.js');

const Dica = db.define('dicas', {
    id_dica : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo : {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao : {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgsrc : {
        type: Sequelize.STRING,
    }
})

module.exports = Dica;