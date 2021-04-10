// Conteudo 1
$('#conteudo1').append('<p>1</p>')

// Conteudo 2

const elementos = [
    $('<li>').append('Arroz'), //append adiciona
    $('<li>').append('Feijão'),
    $('<li>').append('Carne')
]

const lista = $('<ul><li>Sorvete<li><ul>').prepend(elementos) //Prepend adiciona um antes
$('#conteudo2').append(lista)

// Conteudo3

$('#conteudo3').append(['<h1>1</h1>', '<h1>2</h1>'])
    .prepend('<h1>0</h1>')

    $('#conteudo3').html('<h1>123</h1>') //Html sobrescreve todos

    $('#conteudo3').text('<h1>123</h1>')

    // Alterando Todos
    $('div[id]').html('<strong>Todos!</strong>') //Tem prioridade maior, pois altera todos que tiverem DIV