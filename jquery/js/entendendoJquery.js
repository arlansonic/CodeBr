$('div').hide(5000).show(5000).fadeOut(5000)
console.log($('div').get(1))
console.log($.isEmptyObject({nome: null}))
console.log(jQuery.inArray(3, [1, 2, 3]))

// Criando função em Jquery

$.fn.fundoVerde = function(){
    this.css('background-color', 'green')
    return this
}

$('body').fundoVerde().fadeOut(1000).show(5000)