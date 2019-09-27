

// add key pressed listener
// var buttonList = ["red","blue","green", "yellow"];
// for (var i = 0; i<4; i++){
//     var color = buttonList[i];
//     $("#"+color).click(function () {
//         answer = checkPattern(color);
//         if (!answer){
//             $("#"+color).addClass("pressed");
//             $("body").addClass("game-over");
//             setTimeout(function () {
//                 $("#"+color).removeClass("pressed");
//                 $("body").removeClass("game-over");
//             },100)
//         }else{
//             $("#"+color).addClass("pressed");
//             setTimeout(function () {
//                 $("#"+color).removeClass("pressed");
//             }, 100)
//         }
//     })
// }

// press key function
$("#red").click(function () {
    answer = checkPattern("red");
    if (!answer){
        var pressed = new Audio("./sounds/red.mp3");
        pressed.play();
        var warning = new Audio("./sounds/wrong.mp3");
        warning.play();
        $("#red").addClass("pressed");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("#red").removeClass("pressed");
            $("body").removeClass("game-over");
        },100)
    }else{
        var pressed = new Audio("./sounds/red.mp3");
        pressed.play();
        $("#red").addClass("pressed");
        setTimeout(function () {
            $("#red").removeClass("pressed");
        }, 100)
    }


    // $("#red").css("background-color","white");
})

$("#green").click(function () {
    answer = checkPattern("green");
    if (!answer) {
        var pressed = new Audio("./sounds/green.mp3");
        pressed.play();
        var warning = new Audio("./sounds/wrong.mp3");
        warning.play();
        $("#green").addClass("pressed");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("#green").removeClass("pressed");
            $("body").removeClass("game-over");
        }, 100)
    }else{
        var pressed = new Audio("./sounds/green.mp3");
        pressed.play();
        $("#green").addClass("pressed");
        setTimeout(function () {
            $("#green").removeClass("pressed");
        }, 100)
    }
    // $("#red").css("background-color","white");
})


$("#yellow").click(function () {
    answer = checkPattern("yellow");
    if (!answer) {
        var pressed = new Audio("./sounds/yellow.mp3");
        pressed.play();
        var warning = new Audio("./sounds/wrong.mp3");
        warning.play();
        $("#yellow").addClass("pressed");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("#yellow").removeClass("pressed");
            $("body").removeClass("game-over");
        }, 100)
    }else{
        var pressed = new Audio("./sounds/yellow.mp3");
        pressed.play();
        $("#yellow").addClass("pressed");
        setTimeout(function () {
            $("#yellow").removeClass("pressed");
        }, 100)
    }
    // $("#red").css("background-color","white");
})

$("#blue").click(function () {
    answer = checkPattern("blue");
    if (!answer) {
        var pressed = new Audio("./sounds/blue.mp3");
        pressed.play();
        var warning = new Audio("./sounds/wrong.mp3");
        warning.play();
        $("#blue").addClass("pressed");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("#blue").removeClass("pressed");
            $("body").removeClass("game-over");
        }, 100)
    }else{
        var pressed = new Audio("./sounds/blue.mp3");
        pressed.play();
        $("#blue").addClass("pressed");
        setTimeout(function () {
            $("#blue").removeClass("pressed");
        }, 100)
    }
    // $("#red").css("background-color","white");
})

var started = false;
var loseGame = false;
var keyNotPressed = true;
var memoryPattesrn = [];
var nextIndex = 0;
var nextShouldBeClicked = '';
var level = 1;
var nothingWrong = true;

 // wait for a user to press any key to start the game
$(document).keypress(function (event) {
    console.log(event);
    keyNotPressed = false;
    //    generate next pattern
    if (!started){
        setTimeout(function () {
            generatePattern();
            started = true;
        },500);
    }

})


function generatePattern() {
    $("h1").text("Level "+level);
    var randomNum = Math.floor(Math.random() * 4);
    var nextPattern = ["green", "red", "yellow", "blue"][randomNum];
    memoryPattesrn.push(nextPattern);
    console.log(memoryPattesrn);
    //    show next pattern
    $("#" + nextPattern).css("opacity",0.5);
    setTimeout(function () {
        $("#" + nextPattern).css("opacity",1.0);
    }, 150);
    var machinePressed = new Audio("./sounds/"+nextPattern+".mp3");
    machinePressed.play();
    nextShouldBeClicked = memoryPattesrn[nextIndex];
    console.log(nextShouldBeClicked);
}

//   // press key function
// $("#red").click(function () {
//     $("#red").addClass("pressed");
//     $("body").addClass("game-over");
//     setTimeout(function () {
//         $("#red").removeClass("pressed");
//         $("body").removeClass("game-over");
//     },100)
//     // $("#red").css("background-color","white");
// })


function checkPattern(inputPattern) {
    console.log("input pattern: "+inputPattern);
    if (nextIndex<memoryPattesrn.length && inputPattern == nextShouldBeClicked){
        nextIndex+=1;
        console.log("aaaaaa");
        nothingWrong = true;
        if (nextIndex == memoryPattesrn.length){
            setTimeout(function () {
                if (nothingWrong){
                    nextIndex = 0;
                    level += 1;
                    generatePattern();
                }
            },1000);
        }else{
            console.log("bbbb");
            nextShouldBeClicked = memoryPattesrn[nextIndex];
        }
        return true;
    }else {
    //    start over the game
        nothingWrong =false;
        loseGame = true;
        nextIndex = 0;
        level = 1;
        memoryPattesrn = [];
        nextShouldBeClicked = '';
        started = false;
        $("h1").text("Game Over, Press Any Key to Restart");
        return false;
    }

}