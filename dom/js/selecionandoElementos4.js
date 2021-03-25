function log(){
    console.log(this)
}

HTMLCollection.prototype.log = log
HTMLElement.prototype.log = log
NodeList.prototype.log = log
Node.prototype.log = log

const lista = document.querySelector('div ul')
lista.parentNode.log()
lista.childNodes.log() //Vai pegar a lista com os textos

const primeiro = lista.firstChild
primeiro.log()
primeiro.nextSibling.log()

const ultimo = lista.lastChild
ultimo.log()
ultimo.previousSibling.log()

lista.children.log()
lista.firstElementChild.log()
lista.lastElementChild.log()
lista.parentNode.previousElementSibling.log()
lista.parentNode.nextElementSibling.log()

document.querySelectorAll('div ul li').log()