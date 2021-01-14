const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger (peso2));

//Exemplo de calculo de Média
const avaliacao1 =  6.5;
const avaliacao2 = 7.5;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //toFixed - retira os valores decimais 
console.log(media.toString(2)); //toString mostra o valor em binário 
console.log(typeof media); //typeof mostra o tipo de dados
console.log(typeof Number)//Number função para mostrar o valor