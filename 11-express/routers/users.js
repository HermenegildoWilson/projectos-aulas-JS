const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Respondendo a GET </h1>');
});

module.exports = {router};