const valor = 'Global'

function minhaFucao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFucao() // Puxou primeiro a função 'minha funcao' pois o JS puxa sempre de onde ela foi gerada ou definida
}

exec()

