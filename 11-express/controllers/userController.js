// Importamos o objecto de manipulação de banco de dados
const conexaoDB = require('../infraestrutura');

class userController {
    buscar () {
        return conexaoDB.select();
    }
    
    criar (user) {
        return conexaoDB.insert(user);
    }

    atualisar (id) {
        return `Atualisando usuario ${id} ... `;
    }

    deletar () {
        return `Deletando usuario ${id} ... `;
    }
}

module.exports = new userController();