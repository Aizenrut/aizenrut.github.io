var ajustarTelaGrande = true;
var ajustarTelaPequena = true;

function ajustarComponentes() {

    if ($(window).width() <= 975 && ajustarTelaPequena){
        $('#menuPrincipal').removeClass('bg-light flex-column sidebar');
        $('#menuPrincipal').addClass('navbar-dark bg-dark fixed-top');
        $('#menuEspacamento').addClass('p-2 px-4');
        $('#menuCabecalho').removeClass('w-100');
        $('#menuConteudo').addClass('collapse navbar-collapse');
        $('#menuImg').hide();
        $('#menuTitulo').show();
        $("section").removeClass("w-75").addClass("w-100");

        ajustarTelaGrande = true;
        ajustarTelaPequena = false;

    } else if ($(window).width() > 975 && ajustarTelaGrande) {
        $('#menuPrincipal').removeClass('navbar-dark bg-dark fixed-top');
        $('#menuPrincipal').addClass('bg-light flex-column sidebar');
        $('#menuEspacamento').removeClass('p-2 px-4');
        $('#menuCabecalho').addClass('w-100');
        $('#menuConteudo').removeClass('collapse navbar-collapse');
        $('#menuTitulo').hide();
        $('#menuImg').show();
        $("section").removeClass("w-100").addClass("w-75");

        ajustarTelaGrande = false;
        ajustarTelaPequena = true;
    }
}

function enviarMensagemContato() {
    alert('Mensagem enviada!');
}

function redirecionarMain() {
    window.open("https://aizenrut.github.io/main.html");
}