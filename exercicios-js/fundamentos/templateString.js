const nome ='Rebeca';
const concatenacao ='Olá ' + nome +'!';

const template =`   
    Olá             
    ${nome}!`
//Concatenação com quebra de linha
console.log(concatenacao,template);

// Expressões
console.log(`1 + 1 = ${1 + 1}`); //Somar 1 + 1 

const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up('Cuidado')}!`); //Concatenação + toUpperCase() deixando todas as letras maiusculas!
