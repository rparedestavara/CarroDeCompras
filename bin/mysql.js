var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'php_carrito',
    port: 3306
 });
 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

 module.exports = connection; 