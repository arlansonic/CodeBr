const pai = {
    nome: 'Arlan Marreiro',
    corCabelo: 'Castanho'
}


const filho1 = Object.create(pai)
filho1.nome ='Apollo Henrique'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai,{
    nome: {
        value: 'Maria Katiane', //Valor
        writable: false, //Deixa ou não alterar o tipo do objeto
        enumerable: true //Visualizar ou não
    }
}) 

console.log(filho2.nome)
filho2.nome = 'Pipoco'
console.log(`${filho2.nome} Tem cabelo: ${filho2.corCabelo}`)

//Mostra o Nome do Objeto
console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

//Verifica se está puxando um atributo de herança
for(let key in filho2){
    filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por Herança ${key}`)
}