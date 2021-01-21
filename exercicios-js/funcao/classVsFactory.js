class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é: ${this.nome}`)
    }
}
const p1 = new Pessoa('Arlan Marreiro')
p1.falar()

// Com Arrow function

const pessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = new Pessoa('Arlan Marreiro')
p2.falar()