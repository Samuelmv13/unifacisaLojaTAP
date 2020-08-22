const mongoose = require('mongoose');

//Criar o schema
const produtoSchema = new mongoose.Schema({
    nome:String,
    valor:Number
});

//Criar e exportar o modelo
module.exports = mongoose.model('Produto', produtoSchema); 