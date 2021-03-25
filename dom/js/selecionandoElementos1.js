document.getElementById('primeiro').classList.add('destaque')// Para puxar ID

const divs = document.getElementsByTagName('div') //Para Divs = getElemetsByTagname

Array.from(divs).forEach(e => e.classList.remove('destaque')) //Jeito 1 

const divsArray = [...divs] //Com Spread
divsArray.forEach(e => e.classList.add('destaque')) //Jeito 2

const ultimosElementos = document.getElementsByClassName('ultimo') //Selecionando a Classe 'ultimo'

for(let e of ultimosElementos){
    e.classList.remove('destaque')
}

// REtorna um HTML Collections que não é um Array
// Tem que fazer a conversão em Array. ou [...] Spread
