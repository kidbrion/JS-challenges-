const open = document.querySelector("#open-btn");
const close = document.querySelector("#close-btn");
const cont = document.querySelector("#container");

open.addEventListener("click",()=>{
    cont.classList.add("active");
})

close.addEventListener("click",()=>{
    cont.classList.remove("active");
})