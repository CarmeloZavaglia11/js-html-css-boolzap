var risp = [
    "ciao! sono pronto chiedimi qualcosa!",
    "non ho ben capito cosa hai detto",
    "mi chiamo Francesco, il bot piu' fresco",
    "fa molto caldo oggi, ci sono quasi 40 gradi!!",
    "tutto bene , tu?",
    "non voglio fare il maleducato,chiedimi altro"
]

$('.send-button').click(messages);

$(document).keydown(function(e){

    if (e.which == 13 || e.code == Enter) {
        messages()
    }

});

function messages() {
    var textInput = $('#testo').val();

    var clone = $('.cloning .message').clone().text(textInput).addClass('sent');

    var risposta = $('.cloning .message').clone().addClass('received');

    $('.messages-table').append(clone);

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
        
            default:
                risposta.text(risp[1])
                break;
        }
        
        $('.messages-table').append(risposta);

    },1000);
}

function numeroRandom(min,max) {
    numero = Math.floor(Math.random()* (max - min + 1) ) + min;
    return numero;
}