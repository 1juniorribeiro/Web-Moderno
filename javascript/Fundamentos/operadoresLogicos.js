console.log('tabela verdade');

// simbolo do E é &&

// v e v -> v
// v e f -> f
// f e f -> f
// v e v e f-> f

//simbolo do OU é ||

// v ou ? -> v   
// f ou v -> v
// f ou f -> f

// ou exclusivo, não podem ser iguais 

// v xor v -> f
// v e f -> v
// f e v -> v
// f e f -> f

// !v -> f
// !f -> v

console.log('exemplo, analisar os trabalharos para comprar tv')

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor, onde é comparado bit a bit, mas ele prefere outra opção
    const comprarTv32 = trabalho1 != trabalho2 //a diferença também faz um ou excluiso, pq se for diferente um é verdadeiro e outro é falso
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))