console.log('Callback é chamar de volta')
console.log('a base é o padrao observer, onde é utilizada a tecnologia assincrona, onde uma coisa observa \ne se acontece o que é esperado chama de volta para execução, eu acho')
console.log('uma callback é passar uma função, para outra função e quando um evento acontecer, \nessa função vai ser disparada e chamada de volta, pode ser chamada uma ou varias vezes')


const fabricantes = ["mercedes", "audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // nesse caso o evento é cada elemento percorrido no array, ele chama a função e executa, a cada elemento encotnrado

console.log('exemplos 2')
console.log(' vamos ver a diferença de um codigo com e sem call back')

const notas= [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
console.log('extrair as notas menores que 7')

// sem callback

const notasBaixas = []
for (let i in notas) { // percorremos o array com o for in notas
    if(notas[i] < 7) { //verificamos as notas menores que 7
        notasBaixas.push(notas[i]) //adicionamos as notas no array criado para armazenar as notas baixas
    }
}

console.log(notasBaixas) // exibimos as notas baixas

// com callback

const notasBaixas2 = notas.filter(function(nota) { //usamos uma função callback do javascript, o filter onde tem uma função 
    return nota < 7 //que vai ser executada  a cada elemento do array e armazena apenas as que forem true em outro array
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota <7) // aqui reduzido com a arrow function
console.log(notasBaixas3)

console.log('exemplos 3 funções callback')

// exemplo no browser
document.getElementsByTagName('body')[0].onclick = function(e) { // aqui o evento para executar a callback é o clique do mouse no body
    console.log('o evento ocorreu!')
}