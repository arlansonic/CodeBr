let dobro = function(a){
    return 2 * a
}

dobro = (a) =>{ // Se for colocar os { } é obrigatorio colocar o ' return '
    return 2 * a 
}

dobro = a => 2 * a //Quando é função apenas de uma linha não precisa colocar { }
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'Ola' //Padrao ' () '
ola  = _ => 'Olá' //Outro meio de colocar ' _ ' é um parametro

console.log(ola())