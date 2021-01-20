// //Incremento While simulando um FOR
// let contador = 1
// while(contador <= 10){
//     console.log(`Contador: = ${contador}`)
//     contador++
// }

// //For

// for(let i=0; i<=10; i++){
//     console.log(`i = ${i}`)
// }

// // Array com For - .' length '  percorre o Array até o seu fim
// const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 10]
// for(let i = 0; i < notas.length; i++){
//     console.log(`Notas: ${notas[i]}`)
// }

const nomes = ['Arlan Marreiro', 's', 'Apollo Henrique Marreiro Loopes']

//Passos contador 10 for normal
for(let x = 0; x<10; x++){
    console.log(`Nomes: ${nomes}`)
}

//Retirar o indice e mostrar na tela


dados = {
    idade: 26,
    logadouro: {
        rua: 'Rua Ebano Oriental',
        bairro: 'Jorge Teixeira II Etapa',
        cidade: 'Manaus',
        estado: 'Amazonas',
        pais: 'Brasil'
    }
}

let inf = dados

for(let atr in nomes){
    if(nomes[atr] == 'Arlan Marreiro'){
    console.log(
    `Indice: ${atr} 
    Nomes: ${nomes[atr]} 
    Idade: ${inf.idade}
    Logadouro: ${inf.logadouro.rua} 
    Bairro: ${inf.logadouro.bairro} 
    Cidade: ${inf.logadouro.cidade} 
    Estado: ${inf.logadouro.estado}
    Pais: ${inf.logadouro.pais}
    `)}else if(nomes[atr] == 'Maria Katiane Barreto Lopes'){
        console.log(
    `Indice: ${atr} 
     Nomes: ${nomes[atr]} 
     Idade: ${inf.idade}
     Logadouro: ${inf.logadouro.rua} 
     Bairro: ${inf.logadouro.bairro} 
     Cidade: ${inf.logadouro.cidade} 
     Estado: ${inf.logadouro.estado}
     Pais: ${inf.logadouro.pais}
     `)
    }else{
        ErrodeNomes()
    }
}
    

//Função Erro de Nome
function ErrodeNomes(atr){
    try{
        console.log(`Seu nome é Não foi encontrado`)
    }catch(e){
        console.error('Ops!! Deu um erro....');
    }
}


