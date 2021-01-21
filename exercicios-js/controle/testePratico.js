let num = function(){
    est = estado
    for(let i=0; i<10; i++){
        if(est == 'Manaus'){
            console.log(`Capital da Região norte ${estado.regiaonorte}`)
        }else if(est == 'Rio Grande do Sul'){
            est.regiaosul
        }else{
            console.log('Nenhuma opção foi escolhida')
        }
    }

}

const estado = {

    regiaonorte: 'Manaus',
    regiaosul: 'Rio Grande do Sul',
    regiaocentrooeste: 'Bahia',
    regiaooesto:'São Paulo'
       
}



num('Manaus')


const pessoa = {
    nome: 'Arlan Marreiro',
    idade: 26,
    endereco: {
        logadouro: 'Rua Ebano Oriental',
        numero: 17
    }
}

const{nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {endereco: {logadouro, numero }} = pessoa
console.log(logadouro,numero)

const {endereco: {logadouro: l, numero: n1}} = pessoa
console.log(l,n1)
