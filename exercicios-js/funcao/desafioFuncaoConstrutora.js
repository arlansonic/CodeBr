function Pessoa(nome){
       this.nome = nome
    
    this.falar = function(){    
        console.log(`Meu nome é: ${this.nome}`)
       }
    }
const p1 = new Pessoa('Arlan Marreiro')
p1.falar()
console.log('Exemplo 1')
console.log('------------------------------')

function Produto(nome, descricao, valor, categoria){
        this.nome,
        this.descricao,
        this.valor,
        this.categoria

        this.desc = function(){
            console.log(`Nome Produto: ${nome}`)
            console.log(`Descrição: ${descricao}`)
            console.log(`Valor: ${valor}`)
            console.log(`Categoria: ${categoria}`)
        }
}

const prod = new Produto('Feijão','Carioca',6.50,'Vegetal')
prod.desc()

console.log('Exemplo 2')
console.log('----------------------------------------------------------')


console.log('Exemplo 3')
console.log('----------------------------------------------------------')

function Atividades(ciclismo, natacao, correr, caminhar){
    this.ciclismo, this.natacao, this.correr, this.caminhar

    this.ativ = function(){
        console.log(`Modalidade de Ciclismo: ${ciclismo}`)
        console.log(`Tipo de natação: ${natacao}`)
        console.log(`Estilo de Corrida: ${correr}`)
        console.log(`Estilo de Caminhada: ${caminhar}`)
    }
}

const atv = new Atividades('Montain Bike', 'Nado Borboleta', 'Trotar', 'Casual')
atv.ativ()
