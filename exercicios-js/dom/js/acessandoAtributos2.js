const lista = document.querySelector('#compras')
console.log('Elemento "ul"......................')
console.log('childNodes',lista.childNodes)
console.log('destino',lista.destino)
console.log('getAttribute',lista.getAttribute('destino'))
console.log('hasAttribute',lista.getAttribute('destino'))
lista.setAttribute('destino','empresa') //Atualizar atributos 
lista.setAttribute('status','aberto') //Adicionar Atributos
lista.removeAttribute('destino')

console.log(lista.dataset)



// Cuidados

const label = document.querySelector('label')

console.log(label.for)
console.log(label.htmlFor)
console.log(label.getAttribute('for'))