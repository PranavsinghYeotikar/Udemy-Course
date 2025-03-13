var colors = ['red', 'green', 'blue', 'yellow'];

var gameSequence = [];
var level = 0;
var started = true;

$(document).keypress(function (){
    if(started){
        $('#level-title').text("Level" + level);
        randomNumber();
        started = false;
    }
})

function gameCheck(colorIndex){
    if(gameSequence[colorIndex] == ourSelection[colorIndex]){
        if(gameSequence.length === ourSelection.length){
            setTimeout(() => {
                randomNumber();
            }, 1000);
        }
    }
    else{
        playSound('wrong');
        $('body').addClass("game-over");
        setTimeout(() => {
            $('body').removeClass("game-over");
        }, 1000);
        $("#level-title").text("Press any key to restart");
        restartGame();
    }
}

function randomNumber(){
    ourSelection = [];

    level++;
    $("#level-title").text("Level " + level);

    var random = Math.floor(Math.random() * 4);
    var colorSelected = colors[random];
    gameSequence.push(colorSelected);
    

    $('#' + colorSelected).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(colorSelected);
}


$('.btn').click(function (){
    var elementId = $(this).attr('id');
    ourSelection.push(elementId);
    playSound(elementId);
    animate(elementId);
    gameCheck(ourSelection.length - 1);
})

function restartGame(){
    started = false;
    gameSequence = [];
    level = 0;
    console.log("got in fail")
}

function playSound(colorSelected){
    var audio = new Audio("sounds/"  + colorSelected + ".mp3");
    audio.play();
}

function animate(colorSelected){
    $("#" + colorSelected).addClass('pressed');
    setTimeout(() => {
        $("#" + colorSelected).removeClass('pressed');
    }, 100);
}