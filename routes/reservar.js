var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reservar', {
    title: 'Hotel Sergio',
    boton1:'Restaurante',
    boton2:'Inicio',
    boton3:'Actividades',
    boton4:'Reservas',
  });
});

module.exports = router;
