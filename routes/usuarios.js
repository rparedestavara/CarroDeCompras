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
var usuario; 
 usuarios_registrados.getUsuario(req.body.usuario,req.body.pass).then((resultado) => { 
         console.log("esta vacio : ");
  })
});

module.exports = router;

