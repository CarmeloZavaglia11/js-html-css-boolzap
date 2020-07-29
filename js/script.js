$(document).ready(function(){

    

// TIME 

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes();

$('.contacted-info').append('<p> Ultimo accesso oggi alle ' +  time + '</p>')

// Risposte Bot

var risp = [
    "ciao! sono pronto chiedimi qualcosa!",
    "non ho ben capito cosa hai detto",
    "mi chiamo Francesco, il bot piu' fresco",
    "fa molto caldo oggi, ci sono quasi 40 gradi!!",
    "tutto bene , tu?",
    "non voglio fare il maleducato,chiedimi altro",
    "menomale :)"
]

// Invio messaggi

$('.send-button').click(messages);

$(document).keydown(function(e){

    if (e.which == 13 || e.code == 13) {
        messages()
    }

});

// FUNZIONI //



function messages() {

    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();

    var textInput = $('#testo').val();

    if (textInput.val('')) {
        return;
    }

    var messaggio = $('.cloning .message').clone().text(textInput).addClass('sent').append('<span>' + time + '<span/>');

    var risposta = $('.cloning .message').clone().addClass('received');

    

    $('.messages-table').append(messaggio);

    $('#testo').val('');

    

    setTimeout(function(){


        switch (textInput) {
            case 'ciao':
                risposta.text(risp[0]);
                break;
            case 'come stai?':
                risposta.text(risp[4]);
                break;
            case 'come ti chiami?':
                risposta.text(risp[2]);
                break;
            case "com'è il tempo oggi?":
                risposta.text(risp[3]);
                break;
            case "vaffanculo":
                risposta.text(risp[5]);
                break;
            case "tutto bene":
                risposta.text(risp[6]);
                break;
            default:
                risposta.text(risp[1]);
                break;
        }

        risposta.append('<span>' + time + '</span>')
        
        $('.messages-table').append(risposta);

    },1000);
}

function numeroRandom(min,max) {
    numero = Math.floor(Math.random()* (max - min + 1) ) + min;
    return numero;
}
});



