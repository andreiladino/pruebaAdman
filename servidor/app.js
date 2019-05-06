'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var usuarioRoute = require('./routes/usuarioRoute');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// configurar cabeceras http
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas bases 
app.use('/api', usuarioRoute);

module.exports = app;