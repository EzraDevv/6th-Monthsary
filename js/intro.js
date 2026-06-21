const introScreen = document.getElementById("introScreen");
const startBtn = document.getElementById("startBtn");

function hideIntro(){

    introScreen.classList.add("hide");

}

startBtn.addEventListener("click",()=>{

    playMusic();

    hideIntro();

    setTimeout(()=>{

        showMessage();

    },800);

});