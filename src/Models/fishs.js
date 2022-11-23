const mongoose = require('mongoose') // importando o mongoose 


const fishSchema = new mongoose.Schema({  
    nome: { type: String, required: true},
    medidas: String,
    volume: String,
    Description: String,
    NumberVendedor: String,
    valor: { type: String, required: true},
});

module.exports = mongoose.model('fish', fishSchema ); // passando o schema e exportando o model junto com o schema.