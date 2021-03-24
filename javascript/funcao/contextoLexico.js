console.log('contexto no qual as coisas foram declaradas dentro da linguagem')

const valor = 'global'

function minhaFuncao() { // a função em js carrega com ela o contexto em que ela foi declarada
    console.log(valor)   // se ela for executa em qualquer outro lugar da aplicação ela carrega o contexto de onde ela foi criada
} //faz com que exista um escopo lexico

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec() // esse conceito é importante para entender closures