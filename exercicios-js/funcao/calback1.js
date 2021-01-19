const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){ //Retornando com função Padrão
    console.log(fabricante)
}) 

fabricantes.forEach(fabricante => console.log(fabricante)) // Retornando com Arrow Function