for(var i=0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        keyAnimation(buttonInnerHTML);
    });

}

document.addEventListener("keypress", function(event){
    
    var keyPress = event.key;
    playSound(keyPress);
    keyAnimation(keyPress);
});

function playSound(evnt){
    switch (evnt) {
        case "w":
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        
        case "a":
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;

        case "s":
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;

        case "d":
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;

        case "j":
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;

        case "k":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;

        case "l":
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;
    
        default: console.log(innerHTML);
            break;
    }

}
function keyAnimation(btnPress){
   var btnAnimated = document.querySelector("." + btnPress);
   btnAnimated.classList.add("pressed");
   setTimeout(function(){
    btnAnimated.classList.remove("pressed"), 105});

}


