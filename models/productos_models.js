'use strict';
var db = require("../bin/mysql");
module.exports =  class Productos_models{
    getProducto(productos_id){
        var query = db.query('SELECT * FROM productos', [productos_id], function(error, result){
            if(error){
               throw error;
            }else{
               var resultado = result;
               if(resultado.length > 0){
                  console.log(resultado[0]);
               }else{
                  console.log('Registro no encontrado');
               }
            }
         }
      );
    }
}



