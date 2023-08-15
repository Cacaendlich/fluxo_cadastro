(async () => {
    const database = require('../config/db.js');
    const Usuario = require('../models/usuarioModel.js');
    await database.sync();

    // const novoUsuario = await Produto.create({
    //     nome: 'Fone',
    //     preco: 200,
    //     descricao: 'Fone bacana.'
    // });
    // console.log(novoProduto);

    // operação de leitura(R do CRUD)
    // const produtos = await Produto.findAll(); //ler todos

    // const produto = await Produto.findByPk(1); //ler o ID
    // console.log(produto);

    //U do CRUD
    // produto.descricao = "Fiz uma alteração";
    // await produto.save();

    //D do CRUD
    // await produto.destroy();
    
}) ();

//comando sync()vai verificar os modelos que eu tenho no meu projeto para com as tabelas que eu tenho la no meu db, e vai garantir que os dois estejam iguais, e se ela n existi criar ela automaticamente.