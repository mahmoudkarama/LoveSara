var drumList = document.querySelectorAll(".drum");
console.log(drumList.length);

for (var i = 0; i < drumList.length; i++) {
    //drumList[i].addEventListener("click", function () { alert("I got clicked!") });
    drumList[i].addEventListener("click", soundSwitch);
   /* function drum() {
        var btnName = this.innerHTML;
        console.log(btnName);
        if (btnName == "w") {
            playAudio("sounds/tom-1.mp3");
        }
        if (btnName == "a") {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        if (btnName == "s") {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        }
        if (btnName == "d") {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        }
        if (btnName == "j") {
            playAudio("sounds/crash.mp3");
        }
        if (btnName == "k") {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        if (btnName == "l") {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        }
    }*/
    function soundSwitch() {                                   //switch statemwnt
        var btnName = this.innerHTML;
        switch (btnName) {                                     // btnName is the statement 
           case "w":                                           // case one like if btnName = "w"
                playAudio("sounds/tom-1.mp3");
                loveMessage("I love you ❤");                  // do this // callback this function
                break;                                         // if not break mean contine the next code
           case "a":                                           // case two
                playAudio("sounds/tom-2.mp3");
                loveMessage("Iam Happy to have you in my life 😘"); 
                break;
           case "s":                                           // case three
                playAudio("sounds/tom-3.mp3");
                loveMessage("You are my every thing for me 😘");
                break;
           case "d":                                           // case four
                playAudio("sounds/tom-4.mp3");
                loveMessage("💕عايز اقولك اني بحبك جدا و اني حياتي بدات بجد من اول ما شوفتك يا سارسوري🌹");
                break;
           case "j":                                           // case five
                playAudio("sounds/crash.mp3");
                loveMessage(" 😍بعشقك و بموت فيكي ");
                break;
           case "k":                                           // case sex
                playAudio("sounds/kick-bass.mp3");
                loveMessage("🥰ربنا يخليكي ليا و يديمك في حياتي يا كل عمري و حياتي");
                break;
           case "l":                                           // case seven
                playAudio("sounds/snare.mp3");
                loveMessage("اوعدك انك هنفضلي جوه عيني و هفضل كل يوم احبك اكتر من الي قبله لاخر يوم في عمري 💖");
                break;
            
        
            default: console.log(btnName);                    // default like else do this code
               break;
        }
    }
}

// function playAudio(urlAudio) {
//     var audio = new Audio(urlAudio);
//     audio.play();
// }

var playAudio = function (urlAudio) { var audio = new Audio(urlAudio); audio.play(); }

var loveMessage = function (message) { document.getElementById("demo").innerHTML += `<br> ${message}`; }
