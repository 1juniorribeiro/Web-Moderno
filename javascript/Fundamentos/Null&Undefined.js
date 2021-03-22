console.log('o objeto null depende da atribuição por valor e por referencia');

console.log('quando armazenamos um objeto, armazenamos um endereço de um lugar na memória');

console.log('quando trabalhamos com tipos primitivos, armazenamos valor, com tipos modernos como objetos, array, funções é armazenado o lugar da memória na variavel');

let valor 
console.log(valor, 'undefined pq a variavel nunca foi nem iniciada');

valor = null;
console.log(valor, ' null é ausencia de valor, ela não aponta pra absolutamente nada');

const produto = {};
console.log(produto.preco, 'o preco não está definido');
console.log(produto);

produto.preco = 3.50;
console.log(produto, 'aqui atribuimos valor a preço');

console.log('quando atribuimos valor de outros tipos passamos o endereço de memória para elas ');
console.log('quando atribuimos valor de um tipo primitivo, copiamos os valores para suas variaveis');