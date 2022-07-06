
var num = document.querySelectorAll(".drum").length;

for (var i = 0; i < num; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var content = this.innerHTML;

        makeSound(content);

        btnAnimation(content);
    });
}

document.addEventListener("keydown", function(e){
    makeSound(e.key);

    btnAnimation(e.key);
});

function makeSound (key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
    
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        default:
            console.log(content);
            break;
    }
}

function btnAnimation (currKey){

    var activebtn = document.querySelector("." + currKey);

    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    }, 150);

}
