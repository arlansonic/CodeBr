// const submit = document.querySelector('[wm-submit]')
// submit.onclick = function(e){
//     e.preventDefault() //Tirar o Evento Pesquisar

//     const form = e.target.parentNode
//     const formData = new FormData(form)
//     formData.append('ajax', true)

//     console.log(formData.get('q'))
//     console.log(formData.has('hl'))

//     for(let dado of formData){
//         console.log(dado)
//     }
    
// }

const form = document.forms[0]
form.onsubmit = function(e){
    e.preventDefault() //Tirar o Evento Pesquisar

    const form = e.target
    const formData = new FormData(form)
    formData.append('ajax', true)

    console.log(formData.get('q'))
    console.log(formData.has('hl'))

    for(let dado of formData){
        console.log(dado)
    }
    
}