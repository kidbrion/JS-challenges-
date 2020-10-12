const btn = document.querySelector("#notif-btn");
const cont = document.querySelector("#container")

btn.addEventListener("click",()=>{
    generateNotification();
});

function generateNotification(){
    const notif = document.createElement("div");
    notif.classList.add("notification");
    notif.innerText = "notification generated successfully";
    cont.appendChild(notif);

    setTimeout(()=>{
        notif.remove()
    },2500)
};