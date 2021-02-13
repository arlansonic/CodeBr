/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verificarString(string1, string2){
    let contido = true

    for(let x = 0; x < string1.length; x++){
        let caractereString1 = string1.charAt(x).toLowerCase()
    for(let j = 0; j < string2.length; j++){
        let caractereString2 = string2.charAt(j).toLowerCase()
        if(caractereString1 == caractereString2){
            contido = true
            break
            }else{
                contido = false
            }
        }if(!contido){
            console.log(`Situação: ${contido}`)
        }
    }
    console.log(`Situação: ${contido}`)
}
verificarString('abc','bca')