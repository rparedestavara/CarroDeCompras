'use strict';
var Productos_model = require("../models/productos_models");
var express = require('express');
var router = express.Router();

var p = new Productos_model();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title:'login'});
});



module.exports = router;

