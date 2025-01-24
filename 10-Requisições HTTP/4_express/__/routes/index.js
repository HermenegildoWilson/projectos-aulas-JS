const router = require('express').Router();

const controllers = require('../controllers')

router.get('/', controllers.get);
router.get('/exercicios/tabuada/:numero', controllers.exerciciosTabuada);
router.get('/exercicios/soma/:numero1/:numero2', controllers.exerciciosSoma);

function start(app) {
    app.use(router);
}

module.exports = { start };