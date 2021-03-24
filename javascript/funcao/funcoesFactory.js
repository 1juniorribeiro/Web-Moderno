console.log('funções fabricas')
console.log('funções que retornam um objeto')
console.log('a baixo temos um exemplo de dois objetos diferentes e usamos as factorys para não criarmos objetos um por um \n')

const prod1 = {
    nome: '..',
    preco: 45
}

const prod2 = {
    nome: '..',
    preco: 45
}

console.log('factory simples \n')

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) // uma função que retorna objetos pra serem usados 

console.log('exemplo factorys')

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('livro', 150.49))
console.log(criarProduto('tablet', 199.49))
