'use strict';
var db = require("../bin/mysql");
module.exports =  class Usuarios_models{

    getUsuario(nombre_usuario,pass_usuario){
        return new Promise((resolve,reject)=>{
        	db.query("SELECT * FROM usuarios WHERE  nombre_usuario = ?",nombre_usuario,(error,result)=>{
        		if (error) {
        			return reject(error);
        		}
        		else{
        			if (result.length == 0) {
        				var post={
        					id_usuario:'0',
        					nombre_usuario:nombre_usuario,
        					clave_usuario:pass_usuario
        				}
        				db.query('INSERT INTO usuarios SET ?',post,(err,resul,campos)=>{
        					if (error) throw error;
        				});
        				console.log("Registro exitoso");
        				return resolve("Registro exitoso");
        			}
        			else{
        				console.log("ELEGIR OTRO NOMBRE");
        				return resolve("error");
        			}
        			
        		}
        	})
        });
    };

    setUsuario(nombre_usuario){
    	
    };


}; 	

/**

<% if(JSON.stringify(resultado)=='{}') { %>
        <%= console.log("el objeto que llejo a registro.ejs es :"); %>
        <a>ya esta registrado<a>
    <% } %>
*/