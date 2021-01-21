const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){ //Retornando com função Padrão
    console.log(fabricante)
}) 

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 4e2e5f7315e8ddb00e13fa8bb4cd13e37e6d3e30
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
<<<<<<< HEAD

fabricantes.forEach(fabricante => console.log(fabricante)) // Retornando com Arrow Function
=======
=======
fabricantes.forEach(fabricante => console.log(fabricante)) // Retornando com Arrow Function
>>>>>>> 5cd2be1665e1c64117beabca0f31d204ef145d10
>>>>>>> 4e2e5f7315e8ddb00e13fa8bb4cd13e37e6d3e30
