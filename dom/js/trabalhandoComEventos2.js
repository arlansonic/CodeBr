// const item = document.querySelector('.elemento')
// item.style.position = 'absolute'

// item.onmousemove = e =>{
//     const item = e.target
//     item.style.cursor = 'move'
//     if(e.buttons){
//         item.style.top = `${e.clientY - (item.clientHeight / 2)}px`
//         item.style.left = `${e.clientX - (item.clientWidth / 2)}px`
//     }
// }

const item = document.querySelector('.elemento1')
item.style.position = 'absolute'

item.onmousemove = e =>{
    const item = e.target    
    item.style.cursor = 'move'
    
    if(e.buttons){
        item.style.top = `${e.clientY - (item.clientHeight /2)}px`
        item.style.left = `${e.clientX - (item.clientWidth /2)}px`
    }
}

const item2 = document.querySelector('.elemento2')
item2.style.display = 'flex'
item2.style.margin = '10%'