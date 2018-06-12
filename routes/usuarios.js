'use strict';
var Usuarios_model = require("../models/usuarios_models");
var express = require('express');
var router = express.Router();

var usuarios_registrados = new Usuarios_model();



/* login */
router.get('/login', function(req, res, next) {
  res.render('login', { title:'login'});
});


/* registro */
router.get('/registro',function(req,res,next){
	res.render('registro',{title:'registro'});
});

/*registrar usuario*/
router.post('/registrarUsuario',function(req,res,next){
	/*console.log( req.body['usuario'] );*/
	/*console.log( req.body.usuario);*/
	usuarios_registrados.getUsuario(req.body.usuario, function(error, result){
    if(error){
       throw error;
    }else{
       var resultado = result;
       console.log(result);
       if(resultado.length > 0){
          res.render('registro_exitoso',{resultado:resultado});
 
       }else{
          res.render('registro',{resultado:resultado});
       }
    }
 });


});

module.exports = router;

