// 1. Importações e Configuração:
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarioModel.js');

//Definir rotas

// Rota para buscar todos os Usuarios
router.get('/buscar_usuarios/:id?', async (req, res) => {
    try {
      const userID = parseInt(req.params.id);
      
      if(!userID){
        const usuariosEncontrados = await Usuario.findAll();
        return res.status(200).json(usuariosEncontrados);
      }else{
        const usuarioEncontrado = await Usuario.findAll({
          where : {ID : userID}
        });
        return res.status(200).json(usuarioEncontrado);
      }

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuarios:', error });
    }
});

// Rota para cadastrar os Usuarios
router.post('/cadastro_usuarios', async (req, res) => {
      try {
        const { NOME, CPF, EMAIL, TEL, DATA_NASCIMENTO, IDADE } = req.body;

        // Inserir o novo usuário
        const novoUsuario = await Usuario.create({
            NOME,
            CPF,
            EMAIL,
            TEL,
            DATA_NASCIMENTO,
            IDADE
        });
        return res.status(200).json({mdg : 'Usuario criado com sucesso:', novoUsuario});
        
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Erro ao buscar usuarios:'});
      }
});

//rota /clientes (rota de excluir cliente)
router.delete('/excluir_usuarios/:id', async (req, res) => {
  try {
    const userID = parseInt(req.params.id);
    const deletarUsuario = await Usuario.destroy({ where: { ID: userID } });
    if (deletarUsuario === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ msg: 'Usuário excluído com sucesso.' })

  } catch (e) {
    console.log(e);
    return res.status(500).json({error: 'Erro ao tentar excluir usuário.'});
  }
});

module.exports = router;