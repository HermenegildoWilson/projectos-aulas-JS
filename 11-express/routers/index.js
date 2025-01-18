//      ARQUIVO PRINIPAL QUE SERÁ REPSONSAVEL POR EXPORTAR TORAS AS ROTAS

// Importação da rota usuários
const routerUser = require('./usersRouter').router;

// Exportação das rotas, como as rotas serão usadas na aplicação principal passamos como parametro a app/servidor que as usará
module.exports = (app, express) => {
    // Informar que a aplicação poserá receber dados em JSON
    app.use(express.json);
    // E vai receber dados em formato url encoded
    app.use(express.urlencoded({ extended: true }));

    // Utilização da rota usuários
    app.use(routerUser);
}