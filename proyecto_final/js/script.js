$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        if ($(window).scrollTop() > altura){
            $('.menu').addClass('menu-fixed');
        }else {
            $('.menu').removeClass('menu-fixed');
        }
    });
});

//codigo para mostrar en grande el mensaje de los articulos exclusivos de hombres.//
$("#box").hover(
    function (){
        $(this).animate({ 'width': "356px", "height" : "356px"});
    },
    function (){
        $(this).animate({ 'width': "105px", "height" : "105px"});
    }
);
//Codigo para leer mas en la descripcion de la cabecera y en la seccion de Marcas//
   jQuery(function () {
     jQuery(".leerMas").bind("click", function () {
   jQuery(this).text(jQuery(this).text() == "Leer más" ? "Ocultar" : "Leer más");
   jQuery(this).prev().slideToggle();
    });
  });