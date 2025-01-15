const express = require('express');

const app = express();

app.listen(3000, (erro) => {
    if(erro) {
        console.log('Deu bug');
        return;
    }
}).on('listening', () => {
    console.log('Rodando...');
});