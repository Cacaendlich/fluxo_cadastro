(async () => {
    const database = require('../config/db.js');
    const Usuario = require('../models/usuarioModel.js');
    await database.sync();

    // const novoUsuario = await Usuario.create({
    //     NOME: 'Helena',
    //     CPF: '11333244455',
    //     EMAIL: 'helena@helena.com',
    //     TEL: '21981915682',
    //     DATA_NASCIMENTO: '2013-12-13 13:45:00',
    //     IDADE: 30
    // });
    // console.log(novoUsuario);
    
}) ();

//comando sync()vai verificar os modelos que eu tenho no meu projeto para com as tabelas que eu tenho la no meu db, e vai garantir que os dois estejam iguais, e se ela n existi criar ela automaticamente.