var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('actividades', {
    title: 'Hotel Sergio',
    boton1:'Inicio',
    boton2:'Restaurante'
   });
});

module.exports = router;
