n = document.querySelectorAll(".drum").length

// CLICK 

for(var i = 0; i<n; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){

        var buttonInner = this.innerHTML
        sound(buttonInner)
        animation(buttonInner)
    })}


// KEYBOARD 

for(var i = 0; i<n; i++){
    document.addEventListener("keypress", function (event){
        sound(event.key)
        animation(event.key)

    })}

    function sound(key){
        switch (key) {

            case "z":
                var audio1 = new Audio("sounds/crash.mp3")
                audio1.play()
                break;
            case "x":
                var audio2 = new Audio("sounds/kick-bass.mp3")
                audio2.play()
                break;
            case "c":
                var audio3 = new Audio("sounds/snare.mp3")
                audio3.play()
                break;
            case "v":
                var audio4 = new Audio("sounds/tom-1.mp3")
                audio4.play()
                break;
            case "b":
                var audio5 = new Audio("sounds/tom-2.mp3")
                audio5.play()
                break;
            case "n":
                var audio6 = new Audio("sounds/tom-3.mp3")
                audio6.play()
                break;
            case "m":
                var audio7 = new Audio("sounds/tom-4.mp3")
                audio7.play()
                break;
        
            default: 
            console.log(buttonInner)
                break;
        }
    }

    function animation(currentKey){
        activeKey = document.querySelector("."+currentKey)
        activeKey.classList.add("pressed")

        setTimeout(function(){
            activeKey.classList.remove("pressed")
        }, 100)
    }
