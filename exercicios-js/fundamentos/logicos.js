// Exemplo 1
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = ! comprarSorvete //Operador uniario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// Exemplo 2
console.log('Exemplo 2')

function pagamento(pagamento1, pagamento2){
    const pagarBemol = pagamento1 || pagamento2
    const pagarEscola = pagamento1 && pagamento2
    const pagarCartao = pagamento1 !=  pagamento2
    const pagarEnergia = pagamento1 = ! pagamento2

    return { pagarBemol, pagarEscola, pagarCartao, pagarEnergia}
}

console.log(pagamento(true, true))
console.log(pagamento(true, false))
console.log(pagamento(false, true))
console.log(pagamento(false, false))
