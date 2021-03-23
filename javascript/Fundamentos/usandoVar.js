console.log('exemplos 1');

{
    {
        {
            {
                var sera = 'será???'
            }
        }
    }
}

function teste() {
    var local = 123
    console.log(local)
}

teste();

console.log(sera, 'aqui vemos que o var só tem escopo dentro de uma função, fora de uma função é global');

console.log(' exemplos 2');

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);
console.log('não tem escopo')

console.log('usando var em loop');

for ( var i = 0; i <10; i++) {
    console.log(i);
}

console.log('i =', i);
console.log('foge do escopo e temos acesso externo a mesma variavel, use let')

console.log('usando var em loop 2');

const funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

console.log('foge do escopo também, use let')