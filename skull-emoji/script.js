
function skullEmoji(){
    emoji = document.createElement("div");
    emoji.classList.add("skull-emoji");
    emoji.innerText = "💀 ❤";

    emoji.style.left = Math.random()*100+"vw";
    emoji.style.animationDuration = Math.random()*10+2+3+"s";

    document.body.appendChild(emoji)
    setTimeout(()=>{
        skull-emoji.remove();
    },5000);
}

setInterval(skullEmoji, 500);