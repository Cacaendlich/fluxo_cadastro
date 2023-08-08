require('dotenv').config({path: '.env.local'});

const {DB_USER, DB_PASSWORD, DB_DATABASE, DB_SERVER} = process.env;


const sqlConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  server: DB_SERVER,
  pool: {     //Essas configurações permitem controlar o desempenho e o comportamento do pool de conexões
    max: 10, // ajustando o número máximo de conexões simultâneas
    min: 0, //o número mínimo de conexões prontas
    idleTimeoutMillis: 30000 //e o tempo máximo de ociosidade antes de uma conexão ser fechada.
  },
  options: {
    trustServerCertificate: true,
    trustedConnection: true, 
    enableArithAbort: true 
  }
};

// Importa a biblioteca mssql para interagir com bancos de dados SQL Server no Node.js
const sql = require("mssql");

// Estabelece a conexão com o banco de dados
sql.connect(sqlConfig)
    .then(conn => createTable(conn))
    .catch(err => console.log("erro!" + err));

//a criação da tabela(function)
function createTable(conn){
 
    const table = new sql.Table('Usuarios');
    table.create = true;
    table.columns.add('ID', sql.Int, {nullable: false, primary: true, identity: true, seed: 1, increment: 1});
    table.columns.add('NOME', sql.NVarChar(150), {nullable: false});
    table.columns.add('CPF', sql.NChar(20), {nullable: false});
    table.columns.add('EMAIL', sql.NChar(50), {nullable: false});
    table.columns.add('TEL', sql.NChar(50), {nullable: false});
    table.columns.add('DATA_NASCIMENTO', sql.Date, {nullable: false});
    table.columns.add('IDADE', sql.Int(3), {nullable: false});
    // table.rows.add('camila','12345678975', 'camila@camila.com','21969066303','1994-06-25',29);
    try {
      const request = new sql.Request()
      request.bulk(table)
           .then(result => console.log('funcionou', result))
           .catch(err => console.log('erro no bulk. ' + err));
    } catch (e) {
      console.log(e);
    }
};
