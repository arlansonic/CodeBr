document.usuarioForm.onsubmit = async e => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)
    data.append('ajax', true)

    const options = {
        method: form.method, 
        body: new URLSearchParams(data)        
    }

    const resultado = document.getElementById('resultado')

                /* Com Promisse */

    // fetch(form.action, options)
    //     .then(resp => resp.json())
    //     .then(json =>{
    //         const resultado = document.getElementById('resultado')
    //         resultado.innerHTML = JSON.stringify(json)
    //     })

    //     .catch(e =>{
    //         resultado.innerHTML = e
    //     })
    
            /*  Com Async Await */
        
        try{
            const resp = await fetch(form.action, options)
            const json = await resp.json()
            resultado.innerHTML = JSON.stringify(json)            
        } catch (e){
            resultado.innerHTML = e
        }
       
}