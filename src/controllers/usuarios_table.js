(async () => {
    const database = require('../config/db.js');
    const Usuario = require('../models/usuarioModel.js');
    await database.sync();
}) ();

//comando sync()vai verificar os modelos que eu tenho no meu projeto para com as tabelas que eu tenho la no meu db, e vai garantir que os dois estejam iguais, e se ela n existi criar ela automaticamente.