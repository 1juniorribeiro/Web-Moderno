console.log('como o tipo boolean funciona no js');

let isAtive = false;
console.log(isAtive, 'atribuindo o tipo booleano a uma variavel');

isAtive = true;
console.log(isAtive, 'também atribuindo um valor mas alterando o valor da variavel')

isAtive = 1;
console.log(!!isAtive, 'tranformando um valor em boolean com a negação, nego 1 vez, falso, nego outra verdadeiro, assim sempre sabemos se é verdadeiro ou falso');

console.log('os verdadeiros  ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtive = true));

console.log('os falsos')
console.log(!!0);
console.log(!!' ');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtive = false));

console.log('resumindo !! isso transforma qualquer coisa em verdadeiro ou falso');
