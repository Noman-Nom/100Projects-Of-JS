const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', (e)=>{

    e.preventDefault()

const vi = parseFloat(document.querySelector('#vi').value)
const a = parseFloat(document.querySelector('#a').value)
const t = parseFloat(document.querySelector('#t').value)

if( isNaN(vi) || vi === '' ){
                alert('please enter a valid input')
}
else if(isNaN(a) || a === ''){
            alert('please enter a valid input')
}
else if(isNaN(t) || t === ''){
            alert('please enter a valid input')
}

else{
    console.log("good boy")
}

console.log("vi = " , vi)
console.log("a = " , a)
console.log("t = " , t )

// console.log(typeof vi)
// console.log(typeof a)
// console.log(typeof t)




})