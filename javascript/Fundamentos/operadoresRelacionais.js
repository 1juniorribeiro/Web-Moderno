console.log('operadores também binarios, com dois elementos')
console.log('tomar cuidado com a pegadinha por ser fracamente tipado, e o resultado é sempre true ou false')

console.log('01)', 'valor igual', '1' == 1)
console.log('02)','é extritamente igual?', '1' === 1)
console.log('03)','o valor é diferente?', '1' != 1)
console.log('04)','é extritamente diferente?', '1' !== 1)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2, 'nesse caso sempre vai dar false pois estamos comparando o lugar de memoria por ser um objeto');
console.log('10)', d1 == d2, 'nesse caso sempre vai dar false pois estamos comparando o lugar de memoria por ser um objeto');
console.log('11)', d1.getTime() === d2.getTime(), 'nesse caso o valor é true pois estamos comparando valores através do getTime')

console.log('12)', undefined == null, 'pois os valores são iguais, não possuem valores')
console.log('13)', undefined === null, ' pois não são extritamente iguais, pois são de tipos diferentes')

console.log(' via de regra use o extritamente iguais para que analise também o tipo')