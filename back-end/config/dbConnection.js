const Sequelize = require('sequelize');

const sequelizeConfig = new Sequelize({
    dialect: 'sqlite',
    storage: './config/app.db'
});

module.exports = sequelizeConfig;