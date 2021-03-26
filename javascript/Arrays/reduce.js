console.log('o reduce é uma função para transformar um array em outros dados, só que com um accumulador\n o primeiro interage com o segundo e esse resultado de interação interage com o proximo elemento e assim sucessivamente')
// o reduce tem uma ideia de agragar dados
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) { //fizemos um map para pegar apenas a nota dos alunos, depois pegamos a nota atual do primeiro indice do array e colocamos no accumulador
    console.log(acumulador, atual) // em seguida colocamos a proxima nota no atual
    return acumulador + atual // e depois somammos para chegar ao resultado da soma de todas as notas
}, 10) // esse 10 é que podemos colocar um valor inicial para o reduce

console.log(resultado)

console.log('um desafio para o exemplo 2')

const alunos2 = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// retornar todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos2.map(a => a.bolsista).reduce(todosBolsistas))

// algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos2.map(a => a.bolsista).reduce(algumBolsista))


console.log('simulando nosso reduce')

Array.prototype.reduce2 = function(callback, valorInicial) { // aqui recebemos a callback para validar as informações e o valor inicial
    const indiceInicial = valorInicial ? 0 : 1 // aqui validamos se existe um valor inicial, se existe um valor inicial, o indiceinical é 0 senão o indice é 1
    let acumulador = valorInicial || this[0] // aqui o valor do acumulador é ou o valor inicial ou o valor do indice 0 
    for (let i = indiceInicial; i < this.length; i++) { // aqui percorremos desde o indice inicial , se tem valor inicial o indice é 0 se não é 1 pois o valor do indice 0 vai par ao acumulador
        acumulador = callback(acumulador, this[i], i, this) // aqui o acumulador recebe o resultado da callback
    }
    return acumulador // e retorna o acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))