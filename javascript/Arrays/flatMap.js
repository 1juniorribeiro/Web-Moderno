const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

// extrair a nota de toda a escola independente da turma

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)


const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


Array.prototype.flatMap = function(callback) {  // transformar um arrays de arrays em um array só
    return Array.prototype.concat.apply([], this.map(callback)) // concateno em array vazio a aplicação do map na callback
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
