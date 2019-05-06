'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuarioController');

var api = express.Router();

//crear endpoints
api.get('/listar-usuarios', UsuarioController.listarUsuarios);
api.get('/detalle-usuario', UsuarioController.detalleUsuario);

module.exports = api;