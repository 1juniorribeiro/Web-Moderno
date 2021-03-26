console.log('formas diferentes para percorrer um array')
console.log('exemplos 1')

const aprovados = ['agata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // aqui vale lembrar que pra cada elemento do array a função será chamada e essa função é uma função callback
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach( nome => console.log(nome)) //aqui a cada elemento vai ser recebido o valor do indice do array e como o indice do mesmo ta sendo ignorado, só vai mostra o valor que aqui definimos como nome

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

aprovados.forEach(function(nome, indice, array) { // só fiz esse exemplo pra mostrar que tem um terceiro elemento na função callback do foreach, quando eu aprender a usar isso melhor eu volto aqui e faço um exemplo melhor que faça sentido
    console.log(`a lista de candidatos é ${array} e os aprovados são: \n ${indice+ 1}) ${nome}`)
})

console.log('exemplo 2, implementando nosso proprio for each')

const aprovados2 = ['agata', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function(callback) { // aqui adicionamos ao prototype dos arrays o foreach2 com uma função que recebe uma callback
    for( let i=0; i<this.length; i++){ // aqui colocamos um for que que recebe o indice a partir de 0 e percorre até o tamanho do array
        callback(this[i], i, this) // aqui colocamos as 3 variaveis possiveis a serem recebidas no array, o this[i] é o valor atual do indice, o prorio indice q é o i que o for usa para percorrer e o this que é o proprio array
    }
}




aprovados2.forEach2(function(nome, indice) { // aqui vale lembrar que pra cada elemento do array a função será chamada e essa função é uma função callback
    console.log(`${indice+1}) ${nome}`)
})



