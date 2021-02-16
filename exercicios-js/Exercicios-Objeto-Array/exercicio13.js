/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []

*/

console.log('-------Resolução 1')
function retornar(array){
    const result = []

    for(let item of array){
        if(typeof item === "number"){
            result.push(item)
        }
    }
    
    return result
}
console.log(retornar(["Arlan Marreiro", 26, "JavaScript", 15]))

console.log('-------Resolução 2')

function retornar2(array){
    return array.filter(item => typeof item === "number")
}

console.log(retornar2(["Arlan Marreiro", 26, "HTML", 20]))