const escola = "Cod3r";

console.log(escola.charAt(4));//Char de acordo com a posição
console.log(escola.charCodeAt(3)); //Tabela ASC unicode
console.log(escola.indexOf(3));

console.log(escola.substring(1));//Incluindo o 1 até o final
console.log(escola.substring(0,3)); //Incluindo somente 0 e 3
console.log('Escola '.concat(escola).concat("!")); // Concatenação
console.log('Escola ' + escola +("!")); //Outra forma mais convecional de concatenar
console.log(escola.replace(3,'e')); //Mudar a letra de acordo com o numero

console.log('Arlan,Marreiro,Nascimento'.split(',')); //Dividir conjunto de Array de String separando por ('')
