// 1. Importações e Configuração:
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarioModel.js');

//Definir rotas

// Rota para buscar todos os Usuarios
router.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      console.log(usuarios);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuarios:', error });
    }
  });

module.exports = router;