/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

/*

switch(inteiro){
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
        break

        default:
            return
    }
*/

function associacao(mes, valor){
    
    if(mes == 1){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Janeiro: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 2){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Fevereiro: R$ ${valor.toFixed(2).toString().replace(".",",")}`)   
    }else if(mes == 3){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Março: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 4){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Abril: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 5){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Maio: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 6){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Junho: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 7){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Julho: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 8){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Agosto: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 9){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Setembro: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 10){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Outubro: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 11){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Novembro: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else if(mes == 12){
        atraso = mes - 1
        valor = (valor * ((1 + (5/100)) **atraso))
        console.log(`Dezembro: R$ ${valor.toFixed(2).toString().replace(".",",")}`)
    }else{
        console.log('Não foi encontado mês')
    }
}
associacao(1,200)
associacao(2,200)
associacao(3,200)
associacao(4,200)
associacao(5,200)
associacao(6,200)
associacao(7,200)
associacao(8,200)
associacao(9,200)
associacao(10,200)
associacao(11,200)
associacao(12,200)
