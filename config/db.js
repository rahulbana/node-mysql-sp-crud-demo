const mysql = require('mysql');
const connection  = require('express-myconnection');
const { DBHOST, DBNAME, DBPWD, DBUSER, DBPORT } = process.env;

module.exports = (app) => {
  app.use(
    connection(mysql, {  
      host: DBHOST,
      database: DBNAME,
      port: DBPORT,
      user: DBUSER,
      password: DBPWD,
    },'pool') //or single
  );
}
