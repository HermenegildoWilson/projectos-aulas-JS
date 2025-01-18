// Arquivo onde trataremos as rotas de usuario

const router = require('express').Router();

const { userController } = require('../controllers');

// Tratamento da rota caso for GET
router.get('/users', (req, res, next) => {
    const listaUsuarios = userController.buscar();

    listaUsuarios
        .then((usuarios) => {
            res.status(200);
            res.send(usuarios);
        })
        .catch((errp) => {
            res.status(400);
            res.send('Falha...');
        })
});

// Tratamento da rota caso for POST
router.post('/users/:cadastro', (req, res, next) => {
    const user = {nome:'Hermenegildo', sexo:'M', nascimento:'2005-11-18'};
    userController.criar(user);
    res.send('Sucesso');
});

// Tratamento da rota caso for PUT
router.put('/users/:id', (req, res, next) => {
    const { id } = req.params;
    const resposta = userController.atualisar(id);
    res.send(resposta);
});

// Tratamento da rota caso for DELETE
router.delete('/users/:id', (req, res, next) => {
    const { id } = req.params;
    const resposta = userController.deletar(id);
    res.send(resposta);
});

// Exportação de tosas as rotas
module.exports = {router};