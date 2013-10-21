'use strict';

function sortPoke() {
    var player1 = Math.floor((Math.random() * 649) +1) - 1,
        player2 = Math.floor((Math.random() * 649) +1) - 1,
        pokemon1 = document.getElementById('pokemon1'),
        pokemon2 = document.getElementById('pokemon2'),
        message = document.getElementById('message');

    $.ajax({
        url: 'db.json',
        cache: true
    }).done(function( data ) {
        var db = data;

        pokemon1.innerHTML = '<div>' +
        '<h2>'+ db[player1].name +' #'+ (parseInt(db[player1].id, 10)+1) +'</h2>' +
        '<img src="'+ db[player1].url +'" alt="'+ db[player1].name +'">' +
        '<h2>Power: '+ db[player1].power +'</h2>' +
        '</div>';

        pokemon2.innerHTML = '<div>' +
            '<h2>'+ db[player2].name +' #'+ (parseInt(db[player2].id, 10)+1) +'</h2>' +
            '<img src="'+ db[player2].url +'" alt="'+ db[player2].name +'">' +
            '<h2>Power: '+ db[player2].power +'</h2>' +
            '</div>';

        if (db[player1].power > db[player2].power) {
            message.innerHTML = 'Você ganhou!';
        } else if (db[player2].power > db[player1].power) {
            message.innerHTML = 'Você perdeu!';
        } else {
            message.innerHTML = 'A batalha empatou!';
        }
    });

}

(function($) {
    sortPoke();
})(jQuery);

