//tomamos la altura   
var altura = $('nav').offset().top;
//verificamos el scroll
$(window).on('scroll', function(){
    //si escroll es mayor a altura
    if ( $(window).scrollTop() > altura ){
        $('nav').addClass('NavFixed');
    } else {
        $('nav').removeClass('NavFixed');
    }
});

$("#Mujer").on("click", function (Evento) {
    Evento.preventDefault();
    $('html,body').animate({
        scrollTop: $("#Mujer").offset().top - 250
    }, 500);
});