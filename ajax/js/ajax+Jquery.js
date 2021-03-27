function exibirResultado(id, dados){
    const texto = JSON.stringify(dados)
    document.getElementById(id).innerHTML = texto
}

$.ajax({
    url: 'parOuImpar',
    data:{
        numero: 6
    },
    success(data){
        exibirResultado('get', data)
    }
})

$.ajax({
    url:'formulario',
    method: 'post',
    data:{
        nome: 'Arlan Marreiro',
        idade: 26
    },    
    success(data){
        exibirResultado('post', data)
    },
    error(e){
        exibirResultado('post', e)
    }

})