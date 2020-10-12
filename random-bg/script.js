const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
   
    document.body.style.background= bgChanger();
    btn.innerText = bgChanger();
    
    
    //console.log(bgChanger())
});

 function bgChanger(){


    return `hsl(${Math.floor(Math.random()*360)},100%,50%`;
    
};