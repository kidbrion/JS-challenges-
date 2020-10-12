const stripArea = document.querySelector("#strip");

const text = "shit!! server can't be reached 🤣🤣🤣";

let i=0;


function writeText(){
    
    
    console.log(strip.innerText = text.slice(0, i));
    i++;
    
    if(i > text.length-1){
        i=0;
    }
}

setInterval(writeText,150);

