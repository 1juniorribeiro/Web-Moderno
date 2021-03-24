const soma = function(x, y) { // função anonima é uma função sem nome, armazenada como dado em variavel
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) { // aqui temos a função soma armazenada em uma variavel dentro de outra função
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // aqui passamos a função na chamada de outra função 
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) // aqui executamos uma arrwo function com retorno implicito na execução de outra função

const pessoa = {
    falar () {
        console.log('eai corno')
    }
}

pessoa.falar() // aqui definimos uma função como um dado de um objeto