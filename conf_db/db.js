const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb://localhost/loja';

// Abrindo a conexão com o BD.
mongoose.connect(DATABASE_URL, {useNewUrlParser: true});

//Obtendo e exportando a conexão
module.exports = mongoose.connection;
