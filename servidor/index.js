'use strict'

var port = process.env.PORT || 8080;
var app = require('./app');


app.listen(port, function(){
    console.log("Servidor del api rest");
})