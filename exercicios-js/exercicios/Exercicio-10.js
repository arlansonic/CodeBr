/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function numero(inteiro){
    if(inteiro % 3 == 0){
        return true
    }else{
        return false
    }
}
console.log(numero(20))
console.log(numero(6))

