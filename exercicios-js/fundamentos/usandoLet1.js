var numero = 1
{
    let numero = 2
    console.log('Dentro com let: ', numero);
}

console.log('Fora com Var:', numero);

//Var pega em Globais e em funções
//Let pega em bloco, funções e globais