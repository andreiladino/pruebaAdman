'use strict'

var bcrypt = require('bcrypt-nodejs');
var request = require("request");

function RegistrarUsuario(req, res) {

    var params = req.body;
    var usuario = {};

    usuario.email = params.email;
    usuario.password = params.password;

    // validamos si password viene vacio
    if (params.password) {
        //Encriptar contraseña
        bcrypt.hash(params.password, null, null, function (err, hash) {
            user.password = hash;
            // validamos si email viene vacio
            if (user.email != null) {
                //registrar usuario


            } else {
                res.status(200).send({ message: 'Rellena todo los campos' });
            }
        });


    } else {
        res.status(200).send({ message: 'Introduce la contraseña' });
    }
}

function listarUsuarios(req, res) {

    var params = req.body;
    var page = params.page;
    var url = 'https://reqres.in/api/users?page=' + page;
    request.get({
        "headers": { "content-type": "application/json" },
        "url": url,
    }, (error, response, body) => {
        if (error) {
            res.status(500).send({ message: "Error en el servicio" });
        }
        var dataArray = JSON.parse(body)
        res.status(200).send({
            message: "Consulta exitosa",
            result: dataArray.data
        });
    });
}


function detalleUsuario(req, res) {

    var id = req.params.id;
    var url = 'https://reqres.in/api/users/' + id;
    request.get({
        "headers": { "content-type": "application/json" },
        "url": url,
    }, (error, response, body) => {
        if (error) {
            res.status(500).send({ message: "Error en el servicio" });
        }

        var dataArray = JSON.parse(body)
        res.status(200).send({
            data: dataArray.data
        });
    });
}

module.exports = {
    RegistrarUsuario,
    listarUsuarios,
    detalleUsuario
};