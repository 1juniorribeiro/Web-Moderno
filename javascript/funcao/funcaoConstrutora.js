console.log('você pode criar instancias sobre uma função')

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// em js funções podem ser constrututoras, funcionando como moldes para outras, a função funciona como uma classe e partir dela podemos criar objetos
console.log(typeof Carro) //carro é uma função 
console.log(typeof ferrari) // que foi instanciado e assim foi criado um objeto
