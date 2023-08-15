const TA = document.getElementById('textarea');
const TC =document.getElementById("total-counter");
const RC =document.getElementById("remaining-counter");


TA.addEventListener("keyup", ()=>{
    console.log("key is presesed")
    updateCounter()


})
function updateCounter(){
   TC.innerText= TA.value.length
   RC.innerText = TA.getAttribute("maxlength") -TA.value.length;
}
updateCounter()