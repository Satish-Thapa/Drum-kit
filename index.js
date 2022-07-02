for (var i = 0; i< document.querySelectorAll(".drum").length;i++){
    console.log("hey");
   
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var hello = this.innerHTML;
       
        batti(hello);
   
})
}
document.addEventListener("keydown",function(event){
    var hey = event.key;
    
    batti(hey);
})


function batti(hey){
    var activekey = document.querySelector("."+hey);
    // console.log(activekey);
    activekey.classList.toggle("pressed");
    switch (hey){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case"a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case"s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case"d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break; 
        case"j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case"k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case"l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default:
            console.log("Wrong")
        

    }

}