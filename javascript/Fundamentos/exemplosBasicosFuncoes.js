console.log('exemplo 1');

console.log('uma função é um verbo, uma ação que executa um processo com um bloco com chaves{}');
console.log('e quando você invoca ela todos os passos do bloco são executados');

function imprimirSoma(a, b) { //dentro dos parenteces estão os parametros necessarios para que a função seja executada
    console.log(a + b);
}

imprimirSoma(2, 3);


function soma(a, b=0) {
    return a+b //aqui ele da um retorno para ser usado da maneira que precisar
}

console.log(soma(2,5)); // se chamamos a função soma sem o console não é mostrado na tela pois na função não tem o console.log


console.log('exemplos 2')

console.log('armazenando uma função em uma variavel')
const imprimirSoma2 = function(a, b) {
    console.log(a+b);
}

imprimirSoma2(2, 4);

console.log('armazenando uma função arrow em uma variavel')
const soma2 = (a, b) => {
    return a + b;
}

console.log(soma2(2, 6));

console.log('função com retorno implicito');

const subtracao = (a, b) => a -b;

console.log(subtracao(8, 2))
