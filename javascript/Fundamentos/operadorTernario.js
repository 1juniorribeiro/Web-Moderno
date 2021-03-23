const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'
console.log('o operador ternario é composto de um operador relacional, uma comparação que retorna true ou false')
console.log('então o ? representa o se for true e o : o senão, no caso o false')

console.log(resultado(7.1))
console.log(resultado(6.1))
