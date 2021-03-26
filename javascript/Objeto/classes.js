class lancamento { // criamos uma classe lancamento para moldar os lançamentos no sistema
    constructor(nome ='Generico', valor = 0){ // definimos os atributos e colocamos valor padrao
        this.nome = nome // definimos com o this os atributos a servirem como molde
        this.valor = valor
    } // esse constructor sera transformado em uma função, quando for chamada pelo new, é uma função construtora
}

class cicloFinanceiro { // criamos a classe para consolidar os lancamentos
    constructor(mes, ano) { //colocamos os atributos base para a criaçaõ de um novo ciclo financeiro através de uma função construtora
        this.mes = mes // atribuimos as variaveis a seren publicas e atribuirem as variaveis privadas
        this.ano = ano
        this.lancamentos = [] // definimos o array que vai receber os lancamentos da classe criada acima
    }

    addLancamentos(...lancamentos) { // criamos a função para adicionar os lancamentos a variavel lancamento da função construtora, com um push
        lancamentos.forEach( l => this.lancamentos.push(l)) // percorre os lançamentos que recebo e adicionando ao array do constructor através do push
    }

    sumario() { // criamos uma função para ter o valor consolidado
        let valorConsolidado = 0  //criamos a variavel para receber o valor consolidado
        this.lancamentos.forEach(l => { // percorremos o array de lancamentos, lancamento por lancamento
            valorConsolidado += l.valor // adicionamos os valores dos lancamentos ao valor consolidado
        })
        return valorConsolidado // retornamos o valor consolidado
    }
}

const salario = new lancamento('Salario', 45000) // criamos dois novos lançamentos, um positivo e um negativo 
const contaDeLuz = new lancamento('Luz', -2200)

const contas  = new cicloFinanceiro(3, 2021) // criamos um novo ciclo financeiro para que o array de lancamentos seja iniciado
contas.addLancamentos(salario, contaDeLuz) // adicionamos os lancamentos criados com a função 
console.log(contas.sumario()) // exibimos o valor consolidado


console.log('exemplos 2 classes, como funcionam as heranças em classeS? do mesmo jeito via prototype \n \n \n')
console.log('só muda a forma da sintaxe para atribuir como prototipo, chuto que seja pelo extends')

class Avo {
    constructor(sobrenome) {
        this.sobrenome
    }
}

class Pai extends Avo { // acertei o pai é brabo
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome) // o super é para chamar a função construtora da classe pai(ou no caso aqui avo), para ativar a atribuição do this e termos acesso a variavel publica
        this.profissao = profissao //aqui se não fizermos a atribuição pelo super quando usarmos a classe pai, o sobrenome vai ficar undefined, por isso usamos o super
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
