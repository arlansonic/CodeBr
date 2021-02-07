function Aula(nome, video){
    this.nome = nome 
    this.video = video 
}

const aula1 = new Aula('Seja bem Vindo!!', 123)
const aula2 = new Aula('Até logo!!',456)

console.log(aula1,aula2)

// Criando do zero o parametro NEW 

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Obrigado', 456)
console.log(aula3, aula4) 
