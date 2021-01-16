// Exemplo 1
console.log('Exemplo 1 ')
function tratarErroElancar(erro){
    // throw new Error('... Erro de Função')
        // throw 10
        // throw true
        // throw 'mensagem'

        throw{ //throw : Lançar
            nome: erro.name,
            msg: erro.message,
            date: new Date
        }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!') // .topUpperCase() : Maiusculo | .toLowerCase() : Minusculo
    }catch(e){
        tratarErroElancar(e)
    }finally{
        console.log('Final')
    }
    
}

const obj = {nome: 'Arlan Marreiro'}
imprimirNomeGritado(obj)


//Exemplo 2 
console.log('Exemplo 2')

function tratarErroEmandar(erro){
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function ImprimirNomeMinusculo(obj2){
    try{
        console.log(obj2.name.toLowerCase() + ' <- Nome Minusculo')
    }catch(e){
        tratarErroEmandar(e)
    }finally{
        console.log('Finally')
    }    
}

const obj2 = {nome: 'WORKSHOP'}
ImprimirNomeMinusculo(obj2)
