const {UsuarioModel} = require("../models/usuarioModel")

const buscarUsuariosService = async (userID) => {
    try {
      if(!userID){
        const resultadosBusca = await UsuarioModel.findAll();
      }else{
        const resultadosBusca = await UsuarioModel.findAll({
          where : {ID : userID}
        });
      }
      return resultadosBusca;

    } catch (error) {
        throw error;
    }
};

module.exports = buscarUsuariosService;