const mongoose = require('mongoose') // importando o mongoose 


const logSchema = new mongoose.Schema({  
    nome: { type: String, required: true},
    medidas: String,
    volume: String,
    Description: String,
    NumberVendedor: String,
    valor: { type: String, required: true},
});

module.exports = mongoose.model('long', logSchema ); // passando o schema e exportando o model junto com o schema.