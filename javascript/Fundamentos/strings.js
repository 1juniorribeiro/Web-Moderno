console.log("strings são cadeias de caracteres, delimitadas por aspas simples ou duplas");

const escola = "cod3r";

console.log(escola.charAt(4), "mostra o indice pedido da cadeia de caracteres");
console.log(escola.charAt(5), "nesse caso como não existe um caracte, não gera erro mas sim um espaço vazio");
console.log(escola.charCodeAt(3), "pega o valor do caractere na tabela ASCII");
console.log(escola.indexOf('3'), "Existe o valor 3 na cadeia de caracteres?");

console.log(escola.substring(1), "Exibe a cadeia de caracteres a partir do indice indicado");
console.log(escola.substring(0, 3), "exibe a cadeia de caracteres do indice 0 ao indice 3");

console.log('Escola '.concat(escola).concat("!"), "faz a concatenação de strings, ou seja une eles");
console.log('Escola ' + escola + '!', 'também faz uma concatenação');
console.log(escola.replace(3, 'e'), "substitui ele mentos, no aso o 3 pelo e ");

console.log('Ana, Maria, Pedro'.split(','), "gera um array com os elementos, onde você coloca no split com o que vão ser separados os elementos")

console.log('usando templates strings');

const nome = 'Rebeca';
const concatenacao = 'olá' + nome + '!';
console.log('exemplo de concatenação sem template strings');

const template = `
    Olá
    ${nome}`
console.log(concatenacao, template, ' template strings é o string que suporta variaveis dentro e expressões');

const up = texto => texto.toUpperCase()
console.log(`${up('função que deixa os caracteres maiusculos')}`);
console.log('templates strings faz com que possamos usar funções expressões e varias coisas q eu nem consigo imaginar');
