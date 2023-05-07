const box = document.querySelectorAll('.box');

box.forEach((x)=>{
    x.addEventListener("click", ()=>{
        removeActive();
        x.classList.add("active");
    })
})
function removeActive(){
    box.forEach((x)=>{
        x.classList.remove("active");
    })
}