// 1. Importações e Configuração:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; //porta padrão

//roteador de usuarios
const rotasUsuarios = require('./controllers/userController.js')

//modelo de usuario
const Usuario = require('./models/usuarioModel.js');

//configurando nossa aplicação (app) Express para usar o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//rota raiz
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// usando o roteador de usuários
app.use(rotasUsuarios);

// start no servidor da API
app.listen(port);
console.log('API funcionando!');
