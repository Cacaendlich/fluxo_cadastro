require('dotenv').config({path: '.env.local'})
console.log(process.env); // remova isso depois de confirmar que está funcionando

const {DB_USER, DB_PASSWORD, DB_DATABASE, DB_SERVER} = process.env;

