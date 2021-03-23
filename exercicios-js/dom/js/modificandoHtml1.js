

const body = document.querySelector('body')

const div1 = document.createElement('div')
div1.classList.add('destaque')
div1.innerHTML = 'Primeiro'

const div2 = document.createElement('div')
div2.setAttribute('wm-atributo','valor')
div2.innerHTML = 'Segundo'

const p = document.createElement('p')
p.innerHTML = 'Terceiro'

const div3 = document.createElement('div')
div3.appendChild(p)

// Inserir na Tela as Divs criadas
body.appendChild(div1)
body.appendChild(div2)
body.appendChild(div3)

const texto = document.createTextNode('Antes...')
div3.insertBefore(texto, div3.childNodes[0])

// Clonando div com - cloneNode
const div4 = div3.cloneNode(true)

// Adicionando a Div clonada na Tela
body.appendChild(div4)

// Removendo a div
body.removeChild(div3)


