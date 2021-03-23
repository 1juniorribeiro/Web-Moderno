console.log('par nome valor')

const saudacao = 'opa' // contexto léxico 1 
console.log(' contexto lexico é o local fisico onde sua variavel foi declarado no codigo');

function exec() {
    const saudacao = 'falaa' // contexto lexico 2
    return saudacao;
}

// objetos são frupos aninhados de pares nome/valor

const cliente = {
    nome: ' pedro',
    idade: 23,
    peso: 105,
    endereco: {
        logradouro: ' rua 2',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

console.log('acredito q a intenção dessa aula foi mostrar que o escopo é definido pelo contexto lexico, ou seja onde a variavel foi declarada')