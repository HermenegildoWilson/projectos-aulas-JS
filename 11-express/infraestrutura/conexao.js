// Arquivo responsavel por criar a conexão ao banco de dados

const mysql = require('mysql');

class dataBase {
    #conexao;
    constructor() {
        // Criação da conexão com o modulo mysql
        this.#conexao = mysql.createConnection(
            // Passamos para este modulo as informações do banco em que queremos nos conectar
            {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: '',
                database: 'usuarios'
            }
        );
    }

    // Função que cria uma tabela no banco em que nos conectamos
    createTable(tableName = 'users') {
        // Codigo sql
        let sqlCode = `create table if not exists ${tableName}
                (
                    id integer(4) auto_increment primary key,
                    nome varchar(50) not null,
                    sexo enum('M', 'F') not null,
                    nascimento date not null,
                    dataCadastro date not null
                )
                default charset utf8;`;
        // Criação da tabela no banco;
        this.#conexao.query(sqlCode, (erro) => {
            if (erro) {
                console.log('Erro na criação da tabela', erro.message);
                return;
            }
            console.log('Tabela criada com sucesso', tableName);
        });
    }

    async select(tableName = 'users') {
        try {
            const resposta = await new Promise((resolvido, rejeitado) => {
                const sqlCode = `select * from ${tableName}`
                this.#conexao.query(sqlCode, (erro, dados) => {
                    if (erro) {
                        rejeitado('Falha do usuario ...');
                        return;
                    }
                    resolvido(dados);
                });
            });
            return resposta;
        } catch (erro) {
            return 'Falha na requisição... ' + erro
        }
    }

    insert (user, tableName='users') {
        const {nome, sexo, nascimento} = user;
        const dataCadastro = new Date().getFullYear() +'-'+ new Date().getMonth()+1 +'-'+ new Date().getUTCDate();
        
        const sqlCode = `insert into ${tableName} values (default, '${nome}', '${sexo}', '${nascimento}', '${dataCadastro}')`;

        this.#conexao.query(sqlCode, (erro, dados) => {
            if (erro) {
                console.log('Erro na insersão, '+erro);
                return;
            }
            console.log('Usuaio '+ nome +' cadastrado');
        })
    }
}

module.exports = new dataBase();