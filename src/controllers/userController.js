// 1. Importações e Configuração:
import { Router } from 'express';
import { default as buscarUsuariosService } from '../services/buscarUsuarioService.js';
const router = Router();
import Usuario from '../models/usuarioModel.js';
import cadastrarUsuariosService from '../services/cadastrarUsuarioService.js';
import atualizarUsuariosService from '../services/atualizarUsuarioService.js';

//Definir rotas

router.get('/buscar_usuarios/:id?', async (req, res) => {
    try {
      const userID = parseInt(req.params.id);
      
      const usuariosEncontrados = await buscarUsuariosService(userID);
      
      return res.status(200).json(usuariosEncontrados);

    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuarios:', error });
    }
});

router.post('/cadastro_usuarios', async (req, res) => {
      try {
        const { NOME, CPF, EMAIL, TEL, DATA_NASCIMENTO, IDADE } = req.body;

        const novoUsuario = await cadastrarUsuariosService(NOME, CPF, EMAIL, TEL, DATA_NASCIMENTO, IDADE);

        return res.status(200).json({mdg : 'Usuario criado com sucesso:', novoUsuario});
        
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Erro ao buscar usuarios:'});
      }
});

//rota /excluir_usuarios/:id (rota de excluir cliente)
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

router.put('/atualizar_usuarios/:id', async (req, res) => {
  try {
    const userID = parseInt(req.params.id);
    const { NOME, EMAIL, TEL, IDADE } = req.body;
    
    const novoUsuario = await atualizarUsuariosService(NOME, EMAIL, TEL, IDADE);

    return res.status(200).json({mdg : 'Usuario atualizado com sucesso.'});

  } catch (e) {
    console.log(e);
    return res.status(500).json({error: 'Erro ao tentar atualizar usuário.'});
  }
});


export default router;