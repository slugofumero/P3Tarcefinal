var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Hotel Sergio',
    boton1:'Restaurante',
    boton2:'Habitaciones',
    boton3:'Actividades',
    boton4:'Reservas',
    boton5:'Chat en vivo',
    descripcionTarce:'Disfrute un ambiente acogedor y el máximo confort en estas habitaciones de estilo neoclásico.',
    descripcionTF:'Goce de un ambiente de paz con salón independiente, bañera de diseño.',
    descripcionGC:'Combina el estilo clásico y los servicios más actuales. Balcón, zona de estar y Servicio VIP.',
    descripcionSergio:'La experiencia más exclusiva con amplia terraza, salón independiente, 2 baños y Servicio VIP.'

    });
});

module.exports = router;
