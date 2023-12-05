const {UsuarioModel} = require("../models/usuarioModel")

const cadastrarUsuariosService = async (NOME, CPF, EMAIL, TEL, DATA_NASCIMENTO, IDADE) => {
    try {
      const novoUsuario = await UsuarioModel.create({
        NOME,
        CPF,
        EMAIL,
        TEL,
        DATA_NASCIMENTO,
        IDADE
    });

    return novoUsuario;

    } catch (error) {
        throw error;
    }
};
module.exports = cadastrarUsuariosService;