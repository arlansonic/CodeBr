 $('#div1').append(', 2') 
 $('#div1').prepend('0, ')

 $('<span>, 3</span>').appendTo('#div1')
 $('<span>-1, </span> ').prependTo('#div1')

 $('#div2').before('<p>Antes 2</p>')
 $('#div2').after('<p>Depois 2</p>')

 $('<p>Antes 3</p>').insertBefore('#div3')
 $('<p>Depois 3</p>').insertAfter('#div3')

//  Criando Divs com  -Wrap-

// $('p.numero').wrap('<div>')
$('p.numero').wrapAll('<div id="div4">')

// Desabilitar #div4
$('#div4').empty()

$('#div3, #div4').prev().remove()

// Substituindo os paragrafos por Divs
// $('<div>Substituto</div>').replaceAll('body > p')

// $('body > p').replaceWith('<div>Substituto</div>')

// Função com mais flexibilidade para colocar Divs personalizadas, nó caso coloquei as Divs nos paragrafos
$('body > p').replaceWith(function(){
    return $('<div>').html($(this).html()).append(' - Pipoco')
})
