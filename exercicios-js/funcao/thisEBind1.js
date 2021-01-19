const pessoa = {
    saudacao: 'Arlan Marreiro',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //Conflito entre paradimas: Funcional de OO

const falarDePessoa = pessoa.falar.bind(pessoa) //Bind é responsavel por Amarar 
falarDePessoa()