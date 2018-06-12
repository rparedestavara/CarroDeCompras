'use strict';
var db = require("../bin/mysql");
module.exports =  class Usuarios_models{

    getUsuario(nombre_usuario,callback){
    	/*console.log( nombre_usuario);*/
        /*var query=db.query('SELECT * FROM usuarios WHERE (nombre_usuario=id_usuario)',callback);*/
        var query=db.query('SELECT * FROM usuarios WHERE  nombre_usuario = ?',nombre_usuario,callback);
    };

    esta(id_usuario,callback){
    	var query=db.query('SELECT * FROM usuarios WHERE nombre_usuario = ?',id_usuario,callback);
    };

}; 	
