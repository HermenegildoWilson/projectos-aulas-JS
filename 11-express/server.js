const express = require('express');
const app = express();


// Importação das rotas, que estão no diretório de rotas
const router = require('./routers');
router(app, express);


app.listen(3000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar');
        return;
    }
    console.log('Servidor rodando...');
})