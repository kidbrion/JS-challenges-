const cont = document.querySelector("#container");
const img = document.querySelector("img");

cont.addEventListener("mousemove",(event)=>{
    let x = event.clientX-event.target.offsetLeft;
    let y = event.clientY -event.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
})


cont.addEventListener("mouseleave",(event)=>{
    let x = event.clientX-event.target.offsetLeft;
    let y = event.clientY -event.target.offsetTop;

    img.style.transformOrigin = " center center";
    img.style.transform = "scale(1)";
})

