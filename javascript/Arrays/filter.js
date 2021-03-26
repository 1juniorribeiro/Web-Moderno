console.log('serve para percorrer um array e filtrar e gerar um array menor com as informações que você deseja')
console.log('é uma forma para filtrar as infromações necessarias')

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){ // colocamos uma função callback para retornar verdadeiro oufalso os elementos verdadeiros serão armazenados ou impressos
    return false // só pra mostrar q se for false não mostra nada
}))

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil

console.log(produtos.filter(produtoCaro).filter(produtoFragil))

console.log('implementando nosso proprio filter')

Array.prototype.filter2 = function(callback) {
    newArray = []
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){ // ao colocar algo no if para prosseguir, altomaticamente a condição tem q ser true
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos2 = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const produtoCaro2 = produto => produto.preco >= 500
const produtoFragil2 = produto => produto.fragil

console.log(produtos2.filter2(produtoCaro2).filter(produtoFragil2))