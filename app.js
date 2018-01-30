let startTime;

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceIndex = 0;
let letterIndex = 0;


let currentSentence = sentences[sentenceIndex];
let currentLetter = currentSentence.charAt(0);

function toggleKeyboards() {
    $('#keyboard-upper-container').toggle();
    $('#keyboard-lower-container').toggle();
}

$(document).keydown(function(event) {
    if (event.which === 16) {
        toggleKeyboards();
    }
});

$(document).keyup(function(event) {
    if (event.which === 16) {
        toggleKeyboards();
    }
    $('.highlighted').removeClass('highlighted');
});
$(document).keypress(function(event) {
    event.preventDefault();

    if (!startTime) {
        startTime = event.timeStamp;
    }
    $('#' + event.which).addClass('highlighted');

    if (event.which === currentLetter.charCodeAt(0)) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        errorCount++;
    }})

    letterIndex++;

    if (letterIndex === currentSentence.length) {
        sentenceIndex++;
    }