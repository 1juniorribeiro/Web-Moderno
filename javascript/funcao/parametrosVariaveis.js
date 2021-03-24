console.log('arguments, mas na versão atual usamos o operador rest spred, ele vai falar depois, essa é a versão raiz')

function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 'b', 'c'))
