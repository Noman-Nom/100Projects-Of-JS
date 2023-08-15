const nav = document.querySelector(".navbar");
const botc = document.querySelector(".bottom-continer");
console.log(nav.offsetHeight);
// console.log(nav);
window.addEventListener("scroll",()=>{
if(window.scrollY>botc.offsetTop-nav.offsetHeight-50){
    nav.classList.add("active");
}
else{
    nav.classList.remove("active");
}
})