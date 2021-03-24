const items = document.querySelectorAll('[wm-dropzone] .item')
items.forEach((item, index) => {
    item.draggable = true
    item.id = item.id || `draggable-item-${index}`
    item.ondragstart = e =>
        e.dataTransfer.setData('item-id', e.target.id)
})

const dropzones = document.querySelectorAll('[wm-dropzone]')
dropzones.forEach(dropzone => {
    dropzone.ondragover = e => e.preventDefault()
    dropzone.ondrop = function(e){
        const id = e.dataTransfer.getData('item-id')
        const item = document.getElementById(id)
        e.target.appendChild(item) // Adicionar Divs um dentro do outro
        // dropzone.appendChild(item) // Não deixar as Divs entrarem uma dentro da outra
    }
})