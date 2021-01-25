/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento(plandeTrabalho, salarioAtual){
    
    switch(plandeTrabalho){        
    case 'A':
       return salarioAtual *1.1               
       
    case 'B':
        return salarioAtual *1.15
                
    case 'C':
        return salarioAtual * 1.20
        
    default: 
    return 'plano é inválido'
    }
}

console.log(aumento('A',1500))
console.log(aumento('B',1500))
console.log(aumento('C',1500))
console.log(aumento('D',1200))