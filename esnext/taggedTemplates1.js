function tag (partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outro String'
}

const aluno = 'Arlan Marreiro'
const situacao = 'Aprovado'

console.log(tag `${aluno} esta ${situacao}`)



