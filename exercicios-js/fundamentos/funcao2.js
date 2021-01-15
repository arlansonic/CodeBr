//Armazenando uma função em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variavel
 
const soma = (a, b) =>{ //Arrow para reduzir e agilizar ' => '
    return a + b
}
console.log(soma(2, 5));

const soma1 = (a, b, c) =>{
    return a + b + c
}

console.log(soma1(10, 20, 50));

//Retorno implicito

const subtracao = (a,b) => a - b; //Arrow reduzir ainda mais 
console.log(subtracao(10,20));