(async () => {
    const database = require('../config/db.js');
    const Usuario = require('../models/usuarioModel.js');
    await database.sync();

    // const novoUsuario = await Usuario.create({
    //     NOME: 'camila',
    //     CPF: '11122233355',
    //     EMAIL: 'camila@camila.com',
    //     TEL: '21969066303',
    //     DATA_NASCIMENTO: '1994-06-25 02:00:00',
    //     IDADE: 29
    // });
    // console.log(novoUsuario);
    
}) ();

//comando sync()vai verificar os modelos que eu tenho no meu projeto para com as tabelas que eu tenho la no meu db, e vai garantir que os dois estejam iguais, e se ela n existi criar ela automaticamente.