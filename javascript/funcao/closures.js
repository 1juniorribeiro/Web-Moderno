console.log('closure é o escopo criado qunado uma função declarada ')
console.log('esse escopo permite a função acessar e manipular variaveis externas a função')

console.log('contexto lexico em ação!')

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }

    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())