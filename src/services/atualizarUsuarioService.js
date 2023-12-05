const {UsuarioModel} = require("../models/usuarioModel")

const atualizarUsuariosService = async (NOME, EMAIL, TEL, IDADE) => {
    try {
        const atualizacaoUsuario = await UsuarioModel.update({
            NOME: NOME,
            EMAIL: EMAIL,
            TEL: TEL,
            IDADE: IDADE
        }, { where : {ID: userID}});

        const usuarioAtualizado = atualizacaoUsuario;

    return usuarioAtualizado;

    } catch (error) {
        throw error;
    }
};
module.exports = atualizarUsuariosService;