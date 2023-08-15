(async () => {
    const database = require('../config/db.js');
    const Usuario = require('../models/usuarioModel.js');
    await database.sync();

    // const novoUsuario = await Usuario.create({
    //     NOME: 'Ricardo',
    //     CPF: '11122244455',
    //     EMAIL: 'ricardo@ricardo.com',
    //     TEL: '21981915682',
    //     DATA_NASCIMENTO: '1993-06-30 02:00:00',
    //     IDADE: 30
    // });
    // console.log(novoUsuario);
    
}) ();

//comando sync()vai verificar os modelos que eu tenho no meu projeto para com as tabelas que eu tenho la no meu db, e vai garantir que os dois estejam iguais, e se ela n existi criar ela automaticamente.