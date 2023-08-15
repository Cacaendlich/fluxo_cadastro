// 1. Importações e Configuração:
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarioModel.js');

//Definir rotas

// Rota para buscar todos os Usuarios
router.get('/buscar_usuarios', async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      console.log(usuarios);
      return res.status(200).json(usuarios);
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
        return res.status(500).json({ error: 'Erro ao buscar usuarios:', error });
      }
  });

module.exports = router;