/**
 * Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
📕 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.

Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
 */

 function converterIdadeEmAnosParaDias(idade){
    let ano = 365

    if(idade > 0){
        return ano * idade
    }
 }

 console.log(converterIdadeEmAnosParaDias(26))