let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

olha = () => 'Olá'

console.log('exemplos 2')
console.log('vamos trabalhar o conceito que o this dentro de uma arrow function tem um local fixo')

function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa

console.log('exemplos 3')

let ComparaComThis = function(param) {
    console.log(this === param);
}

ComparaComThis(global)

const obj ={}
ComparaComThis = ComparaComThis.bind(obj)
ComparaComThis(global)
ComparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
