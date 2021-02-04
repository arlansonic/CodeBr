/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescimento(altura1, taxa1, altura2, taxa2){

    if(altura1 == altura2){
        if(taxa1 > taxa2){
            console.log('A criança 1 ultrapassa a criança 2 em 1 ano')
        }else if(taxa1 < taxa2){
            console.log('A criança 2 ultrapassa a criança 1')
        }else{
            console.log('As crianças tem igual altura e crescimento')
        }
    }else{
        if(altura1 > altura2){
            console.log('Criança 1 ultrapassa a criança 2')
        }else if(altura1 < altura2){
            console.log('Criança 2 ultrapassa a crinça 1')
        }else{
            calcularTempo(altura1, taxa1, altura2, taxa2)
        }
    }
}

    function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
        let qtdAnos = 0

        while(alturaMenor < alturaMaior){
            alturaMenor += taxaAlturaMaior
            alturaMaior += taxaAlturaMenor
            qtdAnos++
        }
        console.log(qtdAnos)
        return qtdAnos
    }

    crescimento(150,2,130,4)