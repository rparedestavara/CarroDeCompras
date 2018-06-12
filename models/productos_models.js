'use strict';
var db = require("../bin/mysql");
module.exports =  class Productos_models{
    getProducto(usuario,callback){
        var query = db.query('SELECT * FROM productos', usuario,callback);
    };

    getMisProductos(callback){
        var query=db.query('SELECT * FROM misproductos',callback);
    };

}



