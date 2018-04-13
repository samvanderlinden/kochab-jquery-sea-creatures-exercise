console.log('JS sourced');

let clickCount = 0;

$(document).ready(onReady);

function onReady (){
    $('#counterButton').on('click', clickHandler);
    updateDomCount();
}

function clickHandler() {
    console.log('counter clicked');
    clickCount++;
    console.log(clickCount);
    // $('#counter').text('Total count is: ' + clickCount);
    updateDomCount();
    addNewCreature();
}

function updateDomCount () { // we are CALLING this function in the clickHandler function above
    $('#counter').text(clickCount);
}

function addNewCreature() {
    $('#creatureList').append(            
    
    '<tr>'  +
        '<td>' + $('#newCreatureName').val() + '</td>' +
        '<td>' + $('#newCreatureSize').val() + ' feet' + '</td>' +
        '<td>' + $('#newCreatureType').val() + '</td>' +
        '<td>' + $('#newCreatureSpeed').val() + ' mph' + '</td>' +
    '</tr>'
    );
}
