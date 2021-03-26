// JSON É um formato textual, é um formato de dados

const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }

console.log(JSON.stringify(obj)) // a função foi excluida do dado, JSON  é um formato de dados, é um texto

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //de JSON  para objetos

console.log(JSON.parse('{"a": 1.7, "b": "strings", "c": true, "d": {}, "e": []}')) // aceita varios tipos de dado
