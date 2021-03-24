console.log('classe é uma forma diferente de usar funções em js')
console.log('classe é um conjunto de atributos e comportamentos para ser instanciada')

class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('joão')
p1.falar()

// transformar essa classe em uma função factory

function Pessoa2(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa2('joão')
p3.falar()

const criarPessoa = nome => { // não corre o risco de o this não entender de onde é, acaba não tendo acesso pelo this
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()
