'use strict';
var db = require("../bin/mysql");
module.exports =  class Productos_models{
    getProducto(productos_id,callback){
        var query = db.query('SELECT * FROM productos', [productos_id],callback);
    };

    getMisProductos(callback){
        var query=db.query('SELECT * FROM misproductos',callback);
    };

}



