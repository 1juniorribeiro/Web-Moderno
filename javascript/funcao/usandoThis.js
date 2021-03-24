console.log('this é uma forma de referenciar o objeto atual da execução')
console.log('o dono da instancia é o codigo que está sendo executdao naquele momento')
console.log('ele pode variar dependendo de quem chamou a função')
console.log(' dois motivos para a cração da arrow function, a 1 é para diminuir a sintaxe, e o outro grande motivo é para ter um this que não varia')
console.log('this não varia na função arrow \n')

console.log('this e a função bind \n');

const pessoa = { 
    saudacao:  'Boa noite \n',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas funcional e Orientado a objetos, onde atribuir o this a uma variavel faz fugir do contexto lexico, onde ele foi declarado

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind garante que uma função ou this ou alguma coisa sempre aponte para onde voce quer, como se amarrasse
falarDePessoa()

console.log('this usando bind 2 \n ')

function Pessoa() {
    this.idade = 0 

    const self = this // esse é um artificio para o this sempre apontar para pessoa
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa