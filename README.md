
# Projeto de Fluxo de Cadastro de Usuários

Este projeto implementa um sistema de cadastro de usuários com funcionalidades básicas de CRUD (Create, Read, Update, Delete). O projeto foi desenvolvido utilizando as tecnologias Node.js, MSSQL Server, Express, Sequelize, Body Parser e JavaScript.
## Funcionalidades

- Cadastro de usuários com informações como nome, CPF, email, telefone, data de nascimento e idade.
- Busca de todos os usuários cadastrados ou busca de um usuário específico por ID.
- Atualização dos dados de um usuário.
- Exclusão de um usuário.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js: Download Node.js
MSSQL Server: Download MSSQL Server
Git (opcional, para clonar o repositório): Download Git

## Configuração

1 - Clone este repositório (se você não baixou o arquivo zip):
git clone https://github.com/Cacaendlich/fluxo_cadastro

2 - Acesse o diretório do projeto:
cd fluxo_cadastro

3 - Instale as dependências:
npm install

4 - Configure as variáveis de ambiente:
Renomeie o arquivo .env.example para .env.local e configure as variáveis de ambiente, como a conexão com o banco de dados MSSQL.

## Uso

Inicie o servidor:
npm start

Acesse a API por meio de um cliente HTTP (por exemplo, Postman ou curl) para realizar as operações de CRUD (Create, Read, Update, Delete) de usuários.

## Rotas da API
* Buscar todos os Usuários

Endpoint: GET /buscar_usuarios

Retorna todos os usuários cadastrados.

* Buscar Usuário por ID
Endpoint: GET /buscar_usuarios/:id

Retorna um usuário específico com base no ID fornecido.

* Cadastrar Usuário
Endpoint: POST /cadastro_usuarios

Cadastra um novo usuário com os dados fornecidos no corpo da requisição.

* Atualizar Usuário
Endpoint: PUT /atualizar_usuarios/:id

Atualiza os dados de um usuário específico com base no ID fornecido e nos dados no corpo da requisição.

* Excluir Usuário
Endpoint: DELETE /excluir_usuarios/:id

Exclui um usuário específico com base no ID fornecido.


## Autores

- [@Camila Endlich](https://github.com/Cacaendlich)

