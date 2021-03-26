console.log('como funciona a herança em js?')
console.log('o objetivo é que voce possa receber atributos e comportamentos de um objeto pai para que voce reusar codigo')
// se puder priorize composição ao invés de herança
// a herança é baseada em protótipo 
/* se você tem um objeto pai com x caracteristicas como por exemplo, nome cor do cabelo e idade
mas numa função voce tem um objeto filho do pai sómente com os atribudos nome e idade
a linguagem vai pegar a cor do cabelo do objeto pai  
*/

const ferrari = {
    modelo: 'F40',
    velMax:324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)

console.log('exemplos 2 \n')

// cadeia de propótipos {prototype chain }

//Object.prototype.attr0 = '0'  // não faça isso em casa
const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax:324 //shadowing, vai sombrear a velmax do objeto
}

const volvo2 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari2, carro) // estabeleci carro como prototypo de ferrari
Object.setPrototypeOf(volvo2, carro) 

console.log(ferrari2) // aqui como ocorre apenas o tostring dos valores para serem exibidos só mostram
console.log(volvo2) // os dados que definimos na propria declaração do objeto

volvo2.acelerarMais(100) // porém mesmo assim temos acesso as propriedades do nosso ptotoripo/pai
console.log(volvo2.status()) // então usamos as informações do pai/prototipo

ferrari2.acelerarMais(300)
console.log(ferrari2.status())

console.log('exemplos 3 \n')

const pai2 = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai2) // criamos um objeto baseado no objeto paiu
filha1.nome = 'Ana' // atribuimos um valor a ela
console.log(filha1.corCabelo) //o atributo cor do cabelo esta disponivel 

const filha2 = Object.create(pai2, {
    nome: {value: 'Bia', writable: false, enumerable: true} // aqui mudamos a informação do valor nome após um objeto ser criado baseado no objeto pai
}) //em seguida colocamos com o writable que o valor não pode ser alterado e com o enumerable que ele pode ser listado

console.log(filha2.nome)
filha2.nome = 'carla' // não funciona pelo writable false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // aqui nessa listagem normal não é listado os atributos herdados
console.log(Object.keys(filha2))

for( let key in filha2) {
    filha2.hasOwnProperty(key) ?  // se a filha 2 tem uma propriedade key que pertence a aquele objeto
        console.log(key) : console.log(`Por herança: ${key}`) //se não imprimios a key que ela recebe por herança
}

console.log('exemplos 4, herança na função \n \n \n')

function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // aqui vemos que dois objetos criados a partir de uma função construtoras apontam para o meus prototipo atraves do proto
console.log(meuObjeto.prototype === obj1.__proto__) // quando crriamos a partir de uma função construtora o prototype da função criada a partir dela aponta para o atributo prototype da primeira função

meuObjeto.prototype.nome = 'anonimo'
meuObjeto.prototype.falar = function () { // todos os objtos instanciados a partir dessa função meu objeto terão acesso a essa função
    console.log(`Bom dia meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype // mudamos a referencia do obj3 para a referencia do meuobjeto e ter o mesmo prototipo
obj3.nome = 'Obj3'
obj3.falar()

// resumindo 
console.log((new meuObjeto).__proto__ === meuObjeto.prototype) // quando um objeto é instanciado através de uma função eles são iguais
console.log(meuObjeto.__proto__ === Function.prototype) // a função também tem um atributo __proto__ e ele aponta pra o prototipo da função
console.log(Function.prototype.__proto__ === Object.prototype) //o prototipo do prototipo de uma função aponta para o prototipo de um objeto, acho que por isso que o tipo do objeto é função
console.log(Object.prototype.__proto__ === null) // é nulo pq depois do prototype não tem mais nada

console.log('exemplos 5 \n \n \n')

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { // aqui adicionamos uma função reverse para escrever uma string de tras pra frente
    return this.split('').reverse().join('') // adicionamos essa função ao prototype da string e assim podemos chamala depois de qualquer string
} // esse javascript da muito poder pra gente, to com medo, esses metodos que a string ja tem, como o split já estão dentro da string e podem ser acessados pelo this

console.log('Escola Cod3r'.reverse()) // aqui chamamos o reverse na string

Array.prototype.first = function () { // adicionamos uma função para mostrar o primeiro elemento do array
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())

String.prototype.toString = function () { // aqui substituimos o toString, meu deus não faça isso em casa
    return 'Lascou tudo'
}

console.log('exemplos 6, meu deus oq vem por ai \n \n \n')

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simular o operador new 

function novo(f, ...params) { // vai receber uma função e um conjunto de parametros que queremos no ojbeto
    const obj = {} // usamos a notação literal de objetos para a criação de um objeto vazio
    obj.__proto__ = f.prototype // passamos o prototipo da função para o novo objeto
    f.apply(obj, params) // recebmos o obj para ser aplicado na função com a função aplly e o array de params que é gerado a partir do operador spread rest
    return obj // e retornamos o novo objeto com o protótipo e parametros da função original
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)
