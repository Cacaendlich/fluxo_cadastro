import UsuarioModel from "../models/usuarioModel";

const buscarUsuariosService = async (userID) => {
    try {
      if(!userID){
        const resultadosBusca = await UsuarioModel.findAll();
      }else{
        const resultadosBusca = await Usuario.findAll({
          where : {ID : userID}
        });
      }
      return resultadosBusca;

    } catch (error) {
        throw error;
    }
};
export default buscarUsuariosService;