console.log(document.forms)
console.log(document.forms[0])
console.log(document.getElementsByName('pesquisa'))
// console.log(document.getElementsByTagName('form'))

console.log(document.pesquisa)
console.log(document.pesquisa.q)

// Alterar um Input
document.pesquisa.q.value = 'JavaScript'
document.pesquisa.hl.value = 'pt-br'
console.log(document.pesquisa.hl.selectedIndex)