const prod1 = {}; //{}Objeto
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2);

const prod4 = {
    nome: 'Arlan Marreiro',
    idade: 26
}
console.log(prod4);

const prod5 = {
    nome: 'Maria Katiane Barreto Lopes',
    idade: 28,
    rua: 'Professora Elvira Correa'
}
console.log(typeof prod5);


const prod6 = {};
prod6.nome ='Arlan Marreiro'
prod6.rua = 'Rua Professora Elvira corrêa'
prod6.numero = 17
prod6.cep = ['69088357']

console.log(prod6);
