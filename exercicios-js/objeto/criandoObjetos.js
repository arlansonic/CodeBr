// Usando a anotação literal de objetos

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
obj2 = new Object
console.log(obj2)

// Funções construtoras 
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Computador', 5000, 0.25)
console.log('Valor do Produto 1: '+p1.getPrecoComDesconto(), 'Valor do Produto 2: '+p2.getPrecoComDesconto())

//  Função Factory
function criarFuncionario(nome, salario, faltas){
    return{
        nome, 
        salario,
        faltas,
        getSalario(){
            return (salario /30) *(30 - faltas) //.toFixed(2).toString().replace(".",",")
            
        }
    }
}

const f1 = criarFuncionario('Arlan Marreiro', 2993, 4)
const f2 = criarFuncionario('Apollo', 5000, 1)

console.log('Funcionario 1: '+f1.getSalario(), 'Salario funcionario 2: '+f2.getSalario())

//  Objeto.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//  Função que retorna Objeto..
console.log('---------------------------------')
console.log('Puxando um texto para Objeto em JSON')
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)