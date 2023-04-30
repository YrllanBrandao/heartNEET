const sounds = {
    theme: "/assets/sounds/theme.mp3"
}

const player = document.getElementById("main-player");
const buttonSound = document.querySelector(".btn-sound");


const volume = 0.1;
player.play()
player.volume = volume;


let isMuted = false;

buttonSound.addEventListener("click", ()=>{
   
    if(isMuted)
    {
        buttonSound.classList.remove("muted");
        player.volume = 0.1;
        isMuted = false;
    }

    else{
        buttonSound.classList.add("muted")
        player.volume = 0;
        isMuted = true;
    }
})