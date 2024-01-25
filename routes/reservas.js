var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reservas', {
    title: 'Hotel Sergio',
    boton1:'Restaurante',
    boton2:'Inicio',
    boton3:'Actividades'

  });
});

module.exports = router;
