var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var restauranteRouter = require('./routes/restaurante');
var actividadesRouter = require('./routes/actividades');
var usersRouter = require('./routes/users');
var reservarRouter = require('./routes/reservar');
var reservasRouter = require('./routes/reservas');
var chatstaffRouter = require('./routes/chatstaff');
var chatusuarioRouter = require('./routes/chatusuario');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/restaurante', restauranteRouter);
app.use('/actividades', actividadesRouter);
app.use('/users', usersRouter);
app.use('/reservar', reservarRouter);
app.use('/reservas', reservasRouter);
app.use('/chatstaff', chatstaffRouter);
app.use('/chatusuario', chatusuarioRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // Reenviar el mensaje a todos los demás clientes
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

console.log('Servidor de señalización corriendo en el puerto 8080');