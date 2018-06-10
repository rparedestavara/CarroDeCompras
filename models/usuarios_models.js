'use strict';
var db = require("../bin/mysql");
module.exports =  class Usuarios_models{

    getUsuario(callback){
        var query=db.query('SELECT * FROM misproductos',callback);
    };

}

