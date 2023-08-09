// Importa a biblioteca mssql para interagir com bancos de dados SQL Server no Node.js
const sql = require("mssql");

// require('dotenv').config({path: '.env.local'});

// const {DB_USER, DB_PASSWORD, DB_DATABASE, DB_SERVER} = process.env;


const config = {
  user: 'sa',
  password: '35559987',
  server: 'localhost',
  options: {
    trustServerCertificate: true,
    encrypt: true,  
  }
};

async function createTable(){
  try {
  await sql.connect(config);

  const query = 
    CREATE TABLE Pessoas (
      Id INT IDENTITY(1,1) PRIMARY KEY,
      Nome NVARCHAR(255) NOT NULL,
      CPF NVARCHAR(14) NOT NULL,
      Email NVARCHAR(255) NOT NULL,
      Telefone NVARCHAR(20) NOT NULL,
      DataNascimento DATE NOT NULL,
      Idade INT
    )
  ;

  const result = await sql.query(query);

  } catch(e){
      console.log('err', e)
  }
}
createTable();
// //a criação da tabela(function)
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
