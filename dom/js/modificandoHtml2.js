const div = document.querySelector('div')

div.innerHTML = 'Texto Alterado'

// div.outerHTML = 'Texto Alterado' - Remove tudo

div.insertAdjacentHTML('beforebegin', '<p>Antes Início</p>')
div.insertAdjacentHTML('afterbegin','<p>Depois do Inicio </p>')
div.insertAdjacentHTML('beforeend','<p>Antes do Fim</p>')
div.insertAdjacentHTML('afterend','<p>Depois do Fim</p>')

// Somente Texto
console.log(div.innerText)