// Meu exemplo
function produto(descricao = 'Feijao', valor = 20,  categoria = 'Vegetal'){
    
    return {
        descricao: descricao,
        categoria: categoria,
        valor: valor
    }
}
console.log(produto())

// Exemplo 2 

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2000))
console.log(criarProduto('Smartphone', 3000))