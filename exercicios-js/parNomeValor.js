// par nome/valor
const saudacao ='Opa'; //Contexto lexico 1

function exec(){
    const saudacao ='Falaa' //contexto lexico 2
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 66,
    endereco:{
        logadouro: 'Rua Ebano Oriental',
        numero:17
    }
}
console.log(saudacao)
console.log(exec());
console.log(cliente);

