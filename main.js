const express = require('express');
const bodyParser = require('body-parser');
const db = require('./conf_db/db');


// Trabalhando com o BD.
db.on('error', (error) => console.log(error));
db.once('open', async() =>{
    console.log('A conexão com o BD está aberta');

    //criar a aplicação express
    const app = express();

    //configurar a aplicação express
    app.use(express.static('public'));
    app.use(bodyParser.json());

    // add as rotas para os controllers
    app.use('/produtos', require('./controller/ProdutosController'));

    // escutar a porta 3000
    app.listen(3000, () => {
        console.log('Servidor no ar no endereço: http://localhost:3000');
    });
});