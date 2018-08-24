const mysql = require('mysql');
const connection  = require('express-myconnection');

module.exports = (app) => {
  app.use(
    connection(mysql, {  
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'customer',
      port: 3306
    },'pool') //or single
  );
}
