console.log('o map serve para mapear e transformar um array para outro array do mesmo tamanho')
console.log('percorremos todos os elementos e transformamos os dados do array e transforma em outro')

const nums = [1, 2, 3, 4, 5]

// o map é um for com proprosito

let resultado = nums.map(function(e) { // vale lembrar que ele gera um novo array e não modifica o original
    return e * 2 // todo map tem q ter um retorno
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // fazendo funções com retorno podemos alterar e fazer quantos maps forem necessarios

console.log(resultado)

console.log('exemplo 2 ')

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

//retornar um array com apenas os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultadoCarrinho = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultadoCarrinho)

console.log('implementando map para ver como funciona /n')

Array.prototype.map2 = function(callback) { // adicionamos o map 2 ao prototype e colocamos como parametro uma callback, essa callbak que fica como parametro somos nós que criamos ela, com os elementos que indicamos depois que nesse caso é o valor, o index e o proprio array
    const newArray = [] // criamos um novo array pq o map gera um novo array
    for( let i=0; i<this.length; i++){ // percorremos o array original
        newArray.push(callback(this[i], i, this)) // adicionamos no novvo array os novos dados tratados pela callback
    }
    return newArray // retornamos o novo array
}

const carrinho2 = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const paraObjeto2 = json => JSON.parse(json)
const apenasPreco2 = produto => produto.preco

const resultadoCarrinho2 = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultadoCarrinho2)