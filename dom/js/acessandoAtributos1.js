const img = document.querySelector('img')
console.log('getAttribute', img.getAttribute('src'))
console.log('src', img.src)

console.log('["src"]',img['src'])
console.log('alt',img.alt)


console.log('Elemento "img"................')
console.log('NodeType',img.nodeType)

console.log('NodeName', img.nodeName)

const src = img.getAttributeNode('src')
console.log('Atributo "src"..................')
console.log('NodeType',src.nodeType)
console.log('NodeName',src.nodeName)
console.log('NodeValue',src.nodeValue)

const link = document.querySelector('a')
console.log('Elemento "a"..............................')
console.log('href',link.href)
console.log('fristChild.nodeType',link.firstChild.nodeType)
link.firstChild.nodeValue = 'New Text'
