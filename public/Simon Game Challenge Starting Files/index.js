var btnColours = ["green", "red", "yellow", "blue"];
var ansP = [];
var level = 0;
var count = 0;

$(document).keypress(function(){
    if(level === 0){
        nextSequence();
    }
});

function nextSequence() {
    $("#level-title").text("Level " + level++);

    var rN = Math.floor(Math.random() * 4);
    
    ansP.push(btnColours[rN]);

    $("#" + btnColours[rN]).fadeIn(100).fadeOut(100).fadeIn(100);
    new Audio("sounds/" + btnColours[rN] + ".mp3").play();

    checkAns();
    
}

function animate(btn) {
    $("#" + btn).addClass("pressed");
    new Audio("sounds/" + btn + ".mp3").play();

    setTimeout(function(){
        $("#" + btn).removeClass("pressed");
    }, 80);
}

$(".btn").click(function(){
    var curr = $(this).attr("id");
    animate(curr);

    if(ansP[count] !== curr) {
        wrongAns();
        return;
    }
    count++;
    if(count >= level){
        count = 0;
        setTimeout(nextSequence, 500);
    }
});

function wrongAns() {
    ansP = [];
    level = 0;
    count = 0;

    $("#level-title").text("Game Over, Press any key to Restart");
    new Audio("sounds/wrong.mp3").play();

    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
}




    //      QUEUE USAGE::
// $("." + btnColours[curr]).addClass("pressed");
// $("." + btnColours[curr]).delay(800).queue(function (next) {
//     $(this).removeClass("pressed");
//     next();
// });