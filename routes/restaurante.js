var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('restaurante', {
    title: 'Hotel Sergio',
    boton1:'Inicio',
    boton2:'Actividades'
   });
});

module.exports = router;
