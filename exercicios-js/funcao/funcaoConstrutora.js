// 'this' Publico | ' let ' || ' const ' Privado 

function Carro(velocidadeMaxima = 200, delta = 5){  

    // Atributo Privado
    let velocidadeAtual = 0

    // Metodo Publico
    this.acalerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acalerar()
console.log('Velocidade Atual do Uno: '+ uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acalerar()
console.log('Velocidade Atual da Ferrari: ' + ferrari.getVelocidadeAtual())

const gol = new Carro(200, 50)
gol.acalerar()
console.log('Velocidade Atual do Gol: '+gol.getVelocidadeAtual())