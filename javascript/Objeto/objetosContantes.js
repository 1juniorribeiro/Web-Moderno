// pessoa -> 123  =>{...} / a constante aponta para o mesmo endereço de memória 
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' // além doq aqui atribuimos um valor a pessoa.nome e não pessoa 
console.log(pessoa) 

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana} não da pra atribuir

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa, 'objeto congelador, não pode ser mais alterado')

