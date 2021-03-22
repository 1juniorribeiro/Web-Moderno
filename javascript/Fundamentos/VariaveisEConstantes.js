var a = 3;
let b = 4;

console.log("a diferença entre var e let é o escopo, use let");
console.log("const é a declaração de constante, sem motivo pra mudar variavel, use const")
console.log("A linguagem é fracamente tipada, tipagem dinamica, use somente um tipo de arquivo pras variaveis")
console.log("Não use valores genéricos para variaveis, use codigo claro ao inves de comentarios de codigo")

const  peso1 = 1.0
const peso2 = Number('2.8')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log("A tipagem real ou inteira para numeros é definido pela própria linguagem, e a propriedade isInteger mostra se ela é inteira ou não")

console.log(peso2.toFixed(2))
console.log("fixa o numero de casas decimais do numero")
console.log(peso1.toString())
console.log("transforma um numero em uma string, em texto, colocando o 2 como parametro para o toString transformo em binário ")
console.log(typeof peso1)
console.log("typeof mostra o tipo da variavel")

console.log("cuidados com o Number")
console.log(7 / 0, "Mostra o tipo infinity")
console.log("10" /2, "divide o numero entre aspas mesmo assim")
console.log("show" * 2, "retorna um tipo Not an Numbe, NaN")
console.log(0.1 + 0.7, "não fica 100% precisa pq fica muito lenta, aparece 0.79999")
console.log((10).toString(2), "só conseguimos usar essas operações com numeros literais se estiver dentro de parenteses")
