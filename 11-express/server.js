const express = require('express');

const app = express();
const { router } = require('./routers/users');

app.use(router);

app.listen(3000, (erro) => {
    if (erro) {
        console.log('Erro ao rodar');
        return;
    }
    console.log('Servidor rodando...');
})