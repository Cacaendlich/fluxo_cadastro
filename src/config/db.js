// inicialização do banco de dados

// const dotenv = require('dotenv');
// dotenv.config({ path: "../../.env.local" });
// const { 'user', DB_PASSWORD, DB_DATABASE } = process.env;

const Sequelize = require('sequelize');

const  sequelize =  new Sequelize('user_database', 'sa', '35559987', {
    dialect: 'mssql',
    host: 'localhost',
    port: 1433
});

module.exports = sequelize;