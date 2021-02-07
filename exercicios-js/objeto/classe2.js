class Avo{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(nome, sobrenome, profissao ='Analista de Sistemas'){
        
        super(nome, sobrenome)        
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Arlan','Marreiro')
    }
}

const filho = new Filho
console.log(filho)
