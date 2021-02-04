/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capitalinicial, taxadejuros, tempodeaplicacao){

    let juros = capitalinicial * taxadejuros * tempodeaplicacao
    console.log(`Juros Simples R$ ${juros.toFixed(2).toString().replace(".", ",")}`)
       
}
function jurosCompostos (capitalInicial, taxa, tempo) {
    let juros = capitalInicial *(1 + taxa) ** tempo
    // return capitalInicial * (1 + taxa) ** tempo
    console.log(`Juros Compostos: ${juros.toFixed(2).toString().replace(".",",")}`)
}

jurosSimples(1200,0.02,10)
jurosCompostos(1200,0.02,10)
