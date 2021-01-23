/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function nota(nota1){
    
    if(nota1 == 38){
        console.log(`Sua nota foi ${nota1} está no limite, mas iremos aredondar a mesma para: ${Math.round(40)}`)
    }else if(nota1 >=40){
        console.log(`Você passou de ano sua nota é: ${nota1}`)
    }else{
        console.log('Sua nota foi abaixo de 38: REPROVADO')
    }
}

console.log(nota(100))
console.log(nota(50))
console.log(nota(40))
console.log(nota(38))
console.log(nota(30))