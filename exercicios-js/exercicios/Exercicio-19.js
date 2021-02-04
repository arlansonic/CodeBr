/*
19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente
*/

//  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`

function lanchonete(calculo, qtde){
    switch(calculo){
        case '100':
            qtde = qtde * 3.00
                return console.log(`Cachorro Quente: R$ 3,00 - Total do Pedido: R$ ${qtde.toFixed(2).toString().replace(".",",")}`)
        case '200':            
            qtde = qtde * 4.00
                return console.log(`Hambúrguer Simples: R$ 4,00 - Total do Pedido: R$ ${qtde.toFixed(2).toString().replace(".",",")}`)
        case '300':
            qtde = qtde * 5.50
                return console.log(`Cheeseburguer : R$ 5,50 - Total do Pedido: R$ ${qtde.toFixed(2).toString().replace(".",",")}`)
        case '400':
            qtde = qtde * 7.50
                return console.log(`Bauru : R$ 7,50 - Total do Pedido: R$ ${qtde.toFixed(2).toString().replace(".",",")}`)
        case '500':
            qtde = qtde * 3.50
                return console.log(`Refrigerante : R$ 3,50 - Total do Pedido: R$ ${qtde.toFixed(2).toString().replace(".",",")}`)
        case '600':
            qtde = qtde * 2.50
            return console.log(`Suco : R$ 2,50 - Total do Pedido: R$ ${qtde.toFixed(2).toString().replace(".",",")}`)
            
        default:
            return console.log("Produto não existe")
    }
}
lanchonete('100',2)
lanchonete('200',5)
lanchonete('300',7)
lanchonete('400',6)
lanchonete('500',5)
lanchonete('600',3)
lanchonete('700',10)