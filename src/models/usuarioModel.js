const Sequelize = require('sequelize');
const database = require('../db/Config.js');

// criando o modelo de produto no define a gnete passa o nome nome do produto e o objeto com o schema dele.no schema fazemos o mapeamento das colunas que terma no banco, com as propriedades que terma no objeto local.

const UsuarioModel = database.define('users',{
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    NOME: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    CPF: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    EMAIL: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    TEL: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    DATA_NASCIMENTO: {
        type: Sequelize.DATE,
        allowNull: false
    },
    IDADE: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

UsuarioModel.sync();

module.exports = UsuarioModel;
// criei o modelo do usuario, a representação local de um objeto de uma tabela que existe no db ou que vai existir.