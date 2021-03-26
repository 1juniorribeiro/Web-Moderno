console.log('é uma técnica de encapsulamentos, onde você coloca os atributos privados\n e ter metodos que alterem e controlam esses atributos')

const sequencia = {
    _valor: 1, //convenção que ela é privada
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)