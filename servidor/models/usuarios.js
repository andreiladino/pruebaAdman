'use strict'

const schema = require('schm');
    
const Usuario = schema({
    first_name: {type: String, default: "Adolfo"},
    last_name: {type: String},
    avatar: {type: String},
    email: {type: String},
    password: {type: String},
});



module.exports = Usuario;