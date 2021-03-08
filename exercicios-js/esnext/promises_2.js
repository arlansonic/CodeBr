// Exemplo executando SetTimeOut um dentro do outro somente com Callback
// setTimeout(function(){
//     console.log('Executando Callback...')
    
//     setTimeout(function(){
//         console.log('Executando Callback...')

//         setTimeout(function(){
//             console.log('Executando Callback...')
//         },2000)
//     }, 2000)
// }, 2000)


// // Exemplo 1 com Promise

// function esperarPor(tempo = 2000){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log('Executando Promise...')
//             resolve('Executando função Promise')
//         }, tempo)
//     })
// }

// esperarPor(3000).then(texto => console.log(texto))


// // Exemplo 2 uma dentro da Outra com Promise

// function esperarPor2(tempo = 2000){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log('Executando Promise....')
//             resolve('Continuação Executando Promise...')
//         }, tempo)
//     })
// }

// esperarPor2()
// .then(() => esperarPor2())
// .then(esperarPor2)

// Exemplo 3 uma dentro da Outra com Promise com Objetos...

function mostrarNomes(tempo = 1000){
    return new Promise(function(resolve){
        setTimeout(function(){
            familia = [{
                nome: 'Arlan Marreiro',
                situação: 'Pai',
                idade: '26',                
            }],[{
                nome: 'Maria Katiane',
                situação: 'Mãe',
                idade: '28'
            }],[{
                nome: 'Apollo Henrique',
                situação: 'Filho',
                idade: '7'
            }]
            resolve()
            console.log(familia)
            
        }, tempo)
    })
}

mostrarNomes()
.then(() => mostrarNomes())
.then(mostrarNomes)