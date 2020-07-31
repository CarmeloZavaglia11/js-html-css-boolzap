$(document).ready(function(){

// Settaggio input a ''

    $('input').val('');

// TIME

var dt = new Date();
var time = dt.getHours() + ":" + minutes_with_leading_zeros(dt);

$('.contacted-info').append('<p> Ultimo accesso oggi alle ' +  time + '</p>');

$('.time').text(time);

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

    if (e.which == 13 || e.keyCode == 13) {
        messages()
    }

});

// Match conversazione con utente

$('.contact').click(function(){

    var contactIndex = $(this).index();

    $('.contact').removeClass('active');
    $('.messages-table').removeClass('active');

    selectedChat = $('.messages-table').eq(contactIndex);
    selectedChat.addClass('active');
    $(this).addClass('active');


    var img = $('.contact.active').find('img').attr('src');
    var tit = $('.contact.active').find('h3').text();

    $('.contacted-img > img').attr('src',img);
    $('.contacted-info > h3').text(tit);

});

// Searching

$('#searching').keyup(function () { 
    var input = $('#searching').val().toLowerCase();
    var contacts = $('.contact');

    contacts.each(function(){
        
        if ($(this).find('.contact-name').text().toLowerCase().includes(input)) {
            $(this).show();
        }  else {
            $(this).hide();
        }
    });
});


// FUNZIONI //



function messages() {

    var dt = new Date();

    var time = dt.getHours() + ":" + minutes_with_leading_zeros(dt);

    var textInput = $('#testo').val();

    if (textInput == '') {
        return;
    }

    var messaggio = $('.cloning .message').clone().text(textInput).addClass('sent').append('<span>' + time + '<span/>');

    var risposta = $('.cloning .message').clone().addClass('received');



    $('.messages-table.active').append(messaggio);

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

        risposta.append('<span>' + time + '</span>');

        $('.messages-table.active').append(risposta);

    },1000);
}

function numeroRandom(min,max) {
    numero = Math.floor(Math.random()* (max - min + 1) ) + min;
    return numero;
}

function minutes_with_leading_zeros(dt) {
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

});
