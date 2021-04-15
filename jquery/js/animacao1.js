$('button').click(e => {
    const t = 500
    // $('#animar').hide(t).show()
    $('#animar').toggle(t).toggle(t)
    // $('#animar').fadeOut(t).fadeIn(t)
    $('#animar').fadeToggle(t).fadeToggle(t)
    // $('#animar').slideUp(t).slideDown(t)
    $('#animar').slideToggle(t).slideToggle(t)
})