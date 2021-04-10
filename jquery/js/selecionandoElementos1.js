// $('body').hide(1000).fadeOut(1000).show(3000)

$('#feira').addClass('destaque').removeClass('destaque')
$('li').addClass('destaque')
$('[wm-obrigatorio]').removeClass('destaque')
$('li.opcional').removeClass('destaque')
$('div p span').addClass('destaque')

// Exclusivos do Jquery
$('li:first').css('border', 'solid 3px yellow') //Aplicar diretamente no Primeiro da lista
$('li:odd').css('border', 'solid 10px orange') //Aplicar nos Impares
$('li:gt(1)').css('border', 'solid 10px white')
$('li:not(:last)').css('border', 'none') //Removendo todos menos o Ultimo Elemento
$('li:contains("r")').css('background-color', 'black') //Atacar as letras especificas

// Atacando o Formulário

$('form *').hide() //Esconder o formulário
$('form :text').show() //Mostrar o campo tipo Texto
$('form :password').show()
$('form :checkbox').show()
$('form :radio').show()
$('form :file').show()