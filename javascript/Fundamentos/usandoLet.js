console.log('exemplos 1');

let numero = 1

{
    let numero = 2
    console.log('dentro =', numero);
}

console.log('fora = ', numero);
console.log('tem escopo de bloco');

console.log('exemplos 2');


console.log('let em loop');

for ( let i = 0; i <10; i++) {
    console.log(i);
}

console.log('não foge do escopo');

console.log('let em loop 2');

const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

console.log('o escopo de bloco vai fazer ler em cada momento que for incrementado')