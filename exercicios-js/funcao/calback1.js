const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){ //Retornando com função Padrão
    console.log(fabricante)
}) 


fabricantes.forEach(fabricante => console.log(fabricante)) // Retornando com Arrow Function


//Fazendo com função normal
const empresas = ['Bike Norte', 'Cal-Comp', 'Samsung', 'Ceras Jhonson']

function imprimir(nomeEmp, indice){
    console.log(`${indice}. ${nomeEmp}`)
}

empresas.forEach(imprimir)

// Fazendo com Arrow function

empresas.forEach(empresas => {
    return console.log(empresas)
})

fabricantes.forEach(fabricante => console.log(fabricante)) // Retornando com Arrow Function
