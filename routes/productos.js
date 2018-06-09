'use strict';
var Productos_model = require("../models/productos_models");
var express = require('express');
var router = express.Router();

var p = new Productos_model();



/* GET home page. */
router.get('/:id([0-9]+)', function(req, res, next) {
  console.log(req.query.nombre);
  console.log(req.params.id);
  p.getProducto(req.params.id);
  res.render('catalogo', { title: 'Productos', subtitle:'Este es el id: '+req.params.id });
});

module.exports = router;

