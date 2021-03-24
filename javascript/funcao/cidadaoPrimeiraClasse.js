console.log('podemos tratar uma função como um dado em js')

// criar de forma literal

function fun1() {} // funcção, parametros e bloco de codigo da função

// armazenar em uma variavel

const fun2 = function () {}  // função anonima, invoca ela co mo nome da variavel com parenteses fun2()

//armazenar em um array

const array = [ function(a, b) { return a+ b}, fun1, fun2]

// armazenar em um atributo de objeto 

const obj = {}

obj.falar = function() { return 'Ola' }
console.log(obj.falar())

// passar uma função como parametro

function run(fun) {
    fun()
}

run(function () { console.log('executando uma função em outra, oloco bixo')})

// uma funçao pode retornar/conter outra função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)