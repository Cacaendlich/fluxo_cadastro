import dotenv from 'dotenv';
import mssql from 'mssql';

dotenv.config({path: '../../.env.local'});

const {DB_USER, DB_PASSWORD, DB_DATABASE, DB_SERVER} = process.env;

//  console.log(DB_USER, DB_PASSWORD, DB_DATABASE, DB_SERVER);

const sqlConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  server: 'localhost',
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

const sql = mssql;

// Estabelece a conexão com o banco de dados
sql.connect(sqlConfig)
    .then(conn => console.log('funcionou!'))
    .catch(err => console.log("erro!" + err));

