import UsuarioModel from "../models/usuarioModel";

const atualizarUsuariosService = async (NOME, EMAIL, TEL, IDADE) => {
    try {
        const atualizacaoUsuario = await Usuario.update({
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
export default atualizarUsuariosService;