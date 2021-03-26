console.log('o array em js é um objeto, organizado por indices')

console.log(typeof Array, typeof new Array, typeof []) // o array é dinamico, cresce e diminui dinamicamente, e pode botar qualquer dado
// a boa prática diz q temos que trabalhar com um tipo de dado só

let aprovados = new Array('Bia', "carlos", 'Ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'paulo' // mais indicado para substituir um dado existente de um array, mas também adiciona se voce souber o indice
aprovados.push('abia') // push é o metodo para adicionar itens ao array
console.log(aprovados.length) // mostrando o tamanho foi de 3 para 5 elementos no array

aprovados[9] = 'rafael'// adicionamos no indice 9 e o espaco entre o 5 e o 9 ficou vazio
console.log(aprovados.length) // o array ficou com tamanho 10 
console.log(aprovados[8] === undefined) // os indices abaixo do 9 ficaram indefinidos, mas não nulos, eles ocupam o espaço na memória, mas não tem dado nenhum definido

console.log(aprovados)

aprovados.sort() // esse método ordena os dados do array, ele altera o array principal
console.log(aprovados)

delete aprovados[1] // exclui um dado do array e coloca undefined no lugar
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // bia continua no indice 2

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1) // o primeiro numero é a partir de qual dado quer q o elemento seja excluido e o segundo quantos elementos serão excluidos
console.log(aprovados)
aprovados.splice(0, 2, 'adicionei', 'tres', 'elementos') // apaguei 2 elementos a partir do indice 0 e adicionei 3 depois 
console.log(aprovados)
