//Função sem Retorno
function imprimirSoma(a, b){ //Passar parametros para ser usados
    console.log(a+b);
}
imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7);//Só vai pegar os 2 parametros
imprimirSoma();

function soma(a, b = 1){
    return a +b; //Retorna o resultado da função
}

console.log(soma(2 + 5));
console.log(soma(2));
console.log(soma());//Não retorna