// Praticando com QuerySelector

document.querySelector('#primeiro').classList.add('destaque')

const selecionar = seletor =>
    document.querySelectorAll(seletor).forEach(e => e.classList.add('destaque'))

const tirarSelecao = removeSelect =>
    document.querySelectorAll(removeSelect).forEach(e => e.classList.remove('destaque'))


selecionar('div')
tirarSelecao('*')

selecionar('.ultimo .terceiro')
selecionar('.segundo')

tirarSelecao('.segundo')

selecionar(':not(#primeiro')
tirarSelecao('*')

selecionar(':nth-child(1)')

tirarSelecao('*')

selecionar('div:nth-child(1)')
tirarSelecao('*')

selecionar('[wb-attrib]')
tirarSelecao('[wb-attrib]')