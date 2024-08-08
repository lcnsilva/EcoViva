const db = require('./config/dbConnection.js');


db.authenticate().then(() => {
    console.log("Conectado ao banco de dados.")
}).catch( (error) => {
    console.log("Erro ao conectar.", error);
})