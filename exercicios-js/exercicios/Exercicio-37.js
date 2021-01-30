/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

<<<<<<< HEAD
function pA(n, a1, r){
    for(let i= 0; i< n; i++){
        console.log(a1 + r*i)
    }
    console.log('Soma: '+ (n* (a1 +(a1 +((n - r)*r))))/2)
}

function pG(n, a1, r){
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: '+(a1 *((r**n)-1)/(r-1)))
}

console.log('SOMA DE PA')
pA(10, 10, 20)
console.log('-----------------------------')
console.log('SOMA DE PG')
pG(10, 10, 20)
=======
>>>>>>> ffc7c4ab9eceb817e0440f50756a8546fdba0d77
