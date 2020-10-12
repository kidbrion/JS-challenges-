const img = document.querySelector("#img-container");

let i =0;

function slide(){
    i++;

    
    const imgNo = document.querySelectorAll("#img-container img");
    if(i>imgNo.length-1){
        i=0;
    }
    console.log(i);
    console.log(imgNo.length);

    img.style.transform = `translateX(${-i*500}px)`;
}

setInterval(slide, 3000);

