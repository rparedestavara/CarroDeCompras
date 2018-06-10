'use strict';
var Productos_model = require("../models/productos_models");
var express = require('express');
var router = express.Router();

var p = new Productos_model();



/* GET home page. */
router.get('/:id([0-9]+)', function(req, res, next) {
  console.log(req.query.nombre);
  console.log(req.params.id);
  p.getProducto(req.params.id, function(error, result){
    if(error){
       throw error;
    }else{
       var resultado = result;
       console.log(result);
       if(resultado.length > 0){
          console.log(resultado[0]);
          
       }else{
          console.log('Registro no encontrado');
       }
    }
 });


  res.render('catalogo', { title: 'Productos', subtitle:'Este es el id: '+req.params.id });
});

router.get('/catalogo',function(req,res,next){
	 p.getMisProductos(function(error, result){
	 	if(error){throw error;
	 		res.render('catalogo', { title: 'cata',error:'error'});
	 	}
	 	else{
	 		var resultado = result;
       		console.log(result);
       		if (resultado.length>=0) {
       			res.render('catalogo', { title: 'cata',productos:resultado});
       		}
       		else{
       			res.render('catalogo', { title: 'cata',error:'error'});
       		}
	 	}
	 });
	
});

module.exports = router;

