const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

function playMusic(){

    bgMusic.volume = 0;

    bgMusic.play();

    isPlaying = true;

    musicBtn.classList.add("active");

    const fade = setInterval(() => {

        if(bgMusic.volume < 0.7){

            bgMusic.volume += 0.05;

        }else{

            clearInterval(fade);

        }

    },200);

}

function pauseMusic(){

    bgMusic.pause();

    isPlaying = false;

    musicBtn.classList.remove("active");

}

function toggleMusic(){

    if(isPlaying){

        pauseMusic();

    }else{

        bgMusic.play();

        isPlaying = true;

        musicBtn.classList.add("active");

    }

}

musicBtn.addEventListener("click",toggleMusic);