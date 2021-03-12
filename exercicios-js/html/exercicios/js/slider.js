function mover(elem, inicio, fim, passo, callback){
    const novoInicio = inicio - passo
    if(novoInicio >= fim) {
        elem.style.left = novoInicio + 'px'
        
        setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 3)
    }else{
        calback()
    }
}

    // function slider(){
    //     const elementos = document.querySelectorAll('[wm-slider]')
    // }
    

    const p = document.querySelector('[wm-slider] > p')
    p.style.display = 'block'

    mover(p, 1500, -400, 5, () =>{
        console.log('Terminou!!')
    })



