const mongoose = require('mongoose') // importando o mongoose 


const pranchinhasSchema = new mongoose.Schema({  
    nome: { type: String, required: true},
    medidas: String,
    volume: String,
    valor: { type: String, required: true},
});

module.exports = mongoose.model('pranchinhas', pranchinhasSchema ); // passando o schema e exportando o model junto com o schema.