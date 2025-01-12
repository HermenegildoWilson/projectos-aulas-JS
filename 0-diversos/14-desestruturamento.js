// A desestruturação consiste em extrair valores de um objecto de forma mais elegante e menos verbosa, podendo trazer muita praticidade evitando a declaração de inúmeras variaveis, quando a necessidade é que estas armazenem valores provenientes de um mesmo objecto.

const usuario = {
    nome:'Wilson',
    senha:'123',
    emeil:'hermenegildo@gmail.com'
}

// Declaramos uma 'unica variavel' que vai conter outras variaveis que devem corresponder as chaves do objecto que vem depois da igualade

// Se quisermos que o nome danova variavel seja diferente do nome da chave do objecto usamos labels, ou seja depos do nome da chave colocamos dois pontos e de seguida o novo nome que queremos dar a variavel.
let {nome:jo, emeil} = usuario;
console.log(jo, emeil);