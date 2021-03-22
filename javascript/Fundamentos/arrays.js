console.log('vetores, uma forma de agrupar multiplos valores em uma unica variavel indexada')
console.log('um array em js é heterogeneo e não tem tamanho fixo');

const valores = [7.7, 8.9, 6.3, 9.2]; //licença poética do professor para isar nome de variavel genérica
console.log(valores[0], valores[3], 'acima declamaros um array da forma literal, com suas 4 posições e aqui mostramos o da posição 0 e 3');
console.log(valores[4], ' resultado undefined')

valores[4] = 10;
console.log(valores, 'aqui adicionamos um valor a posição 4 do array')
console.log(valores.length, ' aqui mostramos o tamanho do array');

valores.push({id: 3}, false, null, 'teste', 123);
console.log('o push adiciona valores ao array');
console.log(valores, 'aqui mostramos que o array em js é heterogeno e aceita qualquer tipo de informação mesmo misturada');
console.log('não misture dados em um array');

console.log(valores.pop(), 'apaga o ultimo valor de um array');
delete valores[0]; 
console.log(valores, 'apaga o valor da posição 0 do array');

console.log( typeof valores, ' em js um array é um objeto')