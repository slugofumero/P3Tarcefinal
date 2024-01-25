var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    boton5:'Chat usuario',
    boton6:'Chat staff',
    });
});

module.exports = router;
