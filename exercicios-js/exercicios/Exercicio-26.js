/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100
*/

function acharPares(){
    for(let x = 0; x <= 100; x++){
        if(x%2 == 0){
        console.log(`Numeros Pares: ${x}`)
        }
    }
}
acharPares()