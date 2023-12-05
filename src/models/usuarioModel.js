const { INTEGER, STRING, DATE } = require('sequelize');
const { define } = require('../db/Config.js');

const usuarioModel = define('Usuarios',{
    ID: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    NOME: {
        type: STRING(150),
        allowNull: false
    },
    CPF: {
        type: STRING(20),
        allowNull: false
    },
    EMAIL: {
        type: STRING(50),
        allowNull: false
    },
    TEL: {
        type: STRING(20),
        allowNull: false
    },
    DATA_NASCIMENTO: {
        type: DATE,
        allowNull: false
    },
    IDADE: {
        type: INTEGER,
        allowNull: false
    }
});

usuarioModel.sync();

module.exports = usuarioModel;