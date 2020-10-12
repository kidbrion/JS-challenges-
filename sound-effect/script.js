const audios = [
    "Electronic",
    "harley",
    "heavy",
    "Kid",
    "labrador",
    "M16",
    "muscle",
    "Scary",
]

audios.forEach(audio => {
    const button = document.createElement("button");
    button.classList.add("audio-btn");
    button.innerText = audio;

    button.addEventListener("click", ()=>{
        stop();
        document.getElementById(audio).play();
    })

    document.body.appendChild(button);
});

function stop(){
    audios.forEach(audio=>{
        const aud = document.getElementById(audio);
        aud.pause();
        aud.currentTime=0;
    })
};