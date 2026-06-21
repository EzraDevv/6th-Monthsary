const text = document.getElementById("message");

let index = 0;

const songDuration = 237;

const messageDuration =
((songDuration*1000)-(700*messages.length))
/
messages.length;

function showMessage(){

    text.classList.remove("show");

    setTimeout(()=>{

        text.innerHTML = messages[index];

        if(index >= messages.length-3){

            text.classList.add("final");

        }

        text.classList.add("show");

        index++;

        if(index < messages.length){

            setTimeout(showMessage,messageDuration);

        }

    },700);

}