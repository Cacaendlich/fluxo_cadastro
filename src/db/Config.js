// inicialização do banco de dados

const dotenv = require('dotenv');
dotenv.config({ path: "././.env.local" });
const { DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const Sequelize = require('sequelize');

const  sequelize =  new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    dialect: 'mssql',
    host: 'localhost',
    port: 1433
});


module.exports = sequelize;