const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const Q = document.getElementById('question');

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");
Q.innerText=`what is ${num1} multiply by ${num2}?`;
const CA = num1 * num2;

// let score = 0; 
//  initially hum ne score zero lia to score uodate nahi ho rha tha hum ak library use karenge ab or ak function banana pare ga jo hum ne neeche already bana lia he

let score = JSON.parse(localStorage.getItem("score"));
if (!score){

    score =0;
}

scoreEl.innerText = `score: ${score}`;
formEl.addEventListener("submit",()=>{

    const userAns = +inputEl.value
    // par jab user apna answer enter kare ga to wo number nahi hoga string hoga us ko number men convert karne k lie hum ne + use kia or hum parsint  bhi use kar sakte hen 
    if(userAns == CA ){
        score++;
        updatelocalstorage()
    }
    else{
        score--;
        updatelocalstorage()
    }

})
function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

