import { sql, sqlConfig } from "../src/db/database.js";

sql.connect(sqlConfig)
    .then(conn => console.log('funcionou!'))
    .catch(err => console.log("erro!" + err));


//a criação da tabela(function)
// function createTable(conn){
 
//     const table = new sql.Table('Usuarios');
//     table.create = true;
//     table.columns.add('ID', sql.Int, {nullable: false, primary: true, identity: true, seed: 1, increment: 1});
//     table.columns.add('NOME', sql.NVarChar(150), {nullable: false});
//     table.columns.add('CPF', sql.NChar(20), {nullable: false});
//     table.columns.add('EMAIL', sql.NChar(50), {nullable: false});
//     table.columns.add('TEL', sql.NChar(50), {nullable: false});
//     table.columns.add('DATA_NASCIMENTO', sql.Date, {nullable: false});
//     table.columns.add('IDADE', sql.Int(3), {nullable: false});
//     // table.rows.add('camila','12345678975', 'camila@camila.com','21969066303','1994-06-25',29);
//     try {
//       const request = new sql.Request()
//       request.bulk(table)
//            .then(result => console.log('funcionou', result))
//            .catch(err => console.log('erro no bulk. ' + err));
//     } catch (e) {
//       console.log(e);
//     }
// };
