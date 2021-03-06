// usando a notação literal 
const obj1 = {}
console.log(obj1)

// object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome // faz esse atributo ficar publico
    this.getPrecoComDesconto = () => { //deixa a função visivel a partir de instancias dele
        return preco *(1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)