'use strict';

var pokemonsNumber = 649,
    player1 = $('.player-1'),
    player2 = $('.player-2'),
    message = $('.message'),
    db;

function sortPoke() {
    var pokemonRand1 = Math.floor((Math.random() * pokemonsNumber)),
        pokemonRand2 = Math.floor((Math.random() * pokemonsNumber));

    player1.html('<div>' +
        '<h2>'+ db[pokemonRand1].name +' #'+ (parseInt(db[pokemonRand1].id, 10)) +'</h2>' +
        '<img src="'+ db[pokemonRand1].url +'" alt="'+ db[pokemonRand1].name +'">' +
        '<h2>Power: '+ db[pokemonRand1].power +'</h2>' +
        '</div>');

    player2.html('<div>' +
        '<h2>'+ db[pokemonRand2].name +' #'+ (parseInt(db[pokemonRand2].id, 10)) +'</h2>' +
        '<img src="'+ db[pokemonRand2].url +'" alt="'+ db[pokemonRand2].name +'">' +
        '<h2>Power: '+ db[pokemonRand2].power +'</h2>' +
        '</div>');

    if (db[pokemonRand1].power > db[pokemonRand2].power) {
        message.text('Você ganhou!');
    } else if (db[pokemonRand2].power > db[pokemonRand1].power) {
        message.text('Você perdeu!');
    } else {
        message.text('A batalha empatou!');
    }
}

function getDB() {
    $.ajax({
        url: 'json/db.json',
        cache: true
    }).done(function(data) {
        db = data;
        sortPoke();
    });
}

(function($) {
    getDB();

    $('.play').on('click', function(){
        sortPoke();
    });
})(jQuery);

