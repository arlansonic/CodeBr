/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/
//console.log(media.toFixed(2)); //toFixed - retira os valores decimais 

/*
function valor(valor1, valor2){
  
    let media 
    media = valor1 + valor2
    return (media.toFixed(2).replace(".",","))    
}
console.log('Valor em R$ '+valor(0.1,0.2))
*/

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}
formatarValorDecimal(0.1 + 0.2)
formatarValorDecimal(0.5 + 0.20)
