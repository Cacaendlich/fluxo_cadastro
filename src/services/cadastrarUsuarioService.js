import UsuarioModel from "../models/usuarioModel";

const cadastrarUsuariosService = async (NOME, CPF, EMAIL, TEL, DATA_NASCIMENTO, IDADE) => {
    try {
      const novoUsuario = await Usuario.create({
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
export default cadastrarUsuariosService;