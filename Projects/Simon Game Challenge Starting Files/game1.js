var colors = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var level = 0;
var started = true;

$(document).keypress(function () {
    if (started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = false;
    }
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success');
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }

    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 1000);

        $('#level-title').text("Game-over, Press Any Key for Restart");
        restart();
    }
}

function nextSequence() {
    userClickedPattern = [];//to clean it foe every level

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = colors[randomNumber];
    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
})

function restart(){
    level = 0;
    started = false;
    gamePattern = [];
    
}

function playSound(nameColor) {
    var audio = new Audio("sounds/" + nameColor + ".mp3");
    audio.play();
}

function animatePress(nameColor) {
    $('#' + nameColor).addClass("pressed");
    setTimeout(() => {
        $('#' + nameColor).removeClass("pressed");
    }, 100);

}
