const H = document.getElementById('Hours');
const M = document.getElementById('minutes');
const S = document.getElementById('seconds');
const A = document.getElementById('ampm');
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h>12){
        h= h-12;
        ampm = "PM";

    }
    h = h<10 ? "0" +h : h;
    m = h<10 ? "0" +m : m;
    // s = h<10 ? "0" +s : s;
   H.innerText = h;
   M.innerText = m;
   S.innerText = s;
   A,(innerText = ampm);
   setTimeout(()=>{
    updateClock()
   },1000)


}
updateClock();
