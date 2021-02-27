console.log(this === global) //Falso pois o This aponta para Module.exports
console.log(this === module) // This é um Objeto

console.log(this === module.exports) // Verdadeiro 
console.log(this === exports) // Verdadeiro pois aponta para o moduloe.exports

function  logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // This aponta para o Global dentro de uma função
    
    // Dentro de uma função o this ele não aponta para um export

    // Fora de uma função ele aponta 
}

this.nome = 'Arlan Marreiro' //This fora de uma função ele aponta para Module.exports

logThis()