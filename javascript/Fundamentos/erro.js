function tratarErroELancar(erro){
    throw new Error('erro do servidor')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('aqui sempre executa caindo no try ou no catch')
    }
}
const obj = { nome: 'roberto' }
imprimirNomeGritado(obj)