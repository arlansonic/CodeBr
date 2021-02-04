// Coleção dinâmica de pares chave/valor

const produto = new Object
    produto.nome = 'Cadeira'
    produto['Marca do produto'] ='Generica'
    produto.preco = 200

    console.log(produto)
    // 
    delete produto.preco    
    delete produto['Marca do produto']
    console.log(produto)

    const carro = {
        modelo: 'A4',
        valor: 90000,
        proprietario:{
            nome: 'Arlan Marreiro',
            idade: 26,
            endereco:{
                rua: 'Professora Elvira Corrêa',
                numero: 200                
            }
        },
        //Objetos com Array
        condutores: [{
            nome: 'Apollo',
            idade: 7
        },{
            nome: 'Katiane',
            idade: 28
        }], //Sempre quando for 
            ///adicionar mais um objeto ou função em um objeto adicionar ' , ' para separar os mesmos 
        calcularValorSeguro: function(){

        }
    }

    carro.proprietario.endereco.numero = 1000
    carro['proprietario']['endereco']['rua'] = 'Av Autaz mirim'
    console.log(carro)
    //Deletar objetos

    // delete carro.condutores
    delete carro.proprietario.endereco
    delete carro.calcularValorSeguro
    console.log(carro)
    console.log(carro.condutores)
    console.log(carro.condutores.length)
