//Incremento While simulando um FOR
let contador = 1
while(contador <= 10){
    console.log(`Contador: = ${contador}`)
    contador++
}

//For

for(let i=0; i<=10; i++){
    console.log(`i = ${i}`)
}

// Array com For - .' length '  percorre o Array até o seu fim
const notas = [6.7, 7.4, 9.8, 8.1, 7.7, 10]
for(let i = 0; i < notas.length; i++){
    console.log(`Notas: ${notas[i]}`)
}