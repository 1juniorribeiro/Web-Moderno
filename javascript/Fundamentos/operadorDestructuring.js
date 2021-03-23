console.log('incluido em 2015 ele tira da estrutura alguma coisa ');

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua 34',
        numero: 1000
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);
console.log('aqui retiramos do objeto pessoa somente as informações que queriamos e usamos para imprimir, desetruturamos o objeto')

const { nome: n, idade: i } = pessoa;
console.log(n, i);
console.log(' aqui desestruturamos e renomeamos ele para usarmos');

const { endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

console.log('aqui desestruturamos e tivemos acesso ao objeto aninhado endereco dentro de pessoas e tivemos acesso a suas informações');
console.log('o cep como não existe mostra undefined');

console.log(' desestruturação com arrays agora');

const [a] = [10];
console.log(a);

const [ n1, n3, n5, n6=0] = [10 , 7, 9 , 8];
console.log(n1, n3, n5, n6);

console.log('desestruturamos os dados de um vetor em varias variaveis para que possamos usar individulamente');

console.log(' usando em funções ');

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

console.log(rand({ max: 50, min: 40 }))

console.log('a desestruturação em funções faz com que possamos passar objetos diretos para uma função e ela extraia diretamente os dados do objetos necessarios e execute a função com os dados necessarios');

console.log('funções com arrays');

function rand2([ min = 0, max = 1000]) {
    if ( min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log('o Math.floor arrendoda o valor para baixo, o Math.Ceil arredonda o valor para cima')

console.log(rand2([50, 40]))

console.log(' acredito que o poder a ser extraido desse operador é trabalhar só com valores especificos de um objeto e array')
console.log(' e não com um objeto ou array inteiro e somente com o que tenho interesse')