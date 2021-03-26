const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa quebrou o carro, removeu o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elementos no array
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hammilton') // adiciona um array ou primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover elementos de um array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir do indice dois não vou remover nenhum elemento e adicionar 2 depois
console.log(pilotos)

// remover

pilotos.splice(3, 1) // massa quebrou dnv 
console.log(pilotos) // lembrando que se pode misturar os 2 e remover e adicionar ao mesmo tempo

const algunsPilotos1 = pilotos.slice(2) //o slice gera um novo array a partir do indice indicado, pegamos uma parte de um array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // aqui retiramos o pedaço do array do indice 1 até o anterior ao indice 4 ou seja até o 3, totalizando 3 elementos
console.log(algunsPilotos2)


