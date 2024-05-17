$("#enviarMensaje").click(function() {
    alert("El mensaje fue enviado correctamente...");
});
$(function() {
    $("#enviarMensaje").tooltip();
    $("#github").tooltip();
    $("#linkedin").tooltip();
    $("#twitter").tooltip();
    $("#facebook").tooltip();
});
$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});