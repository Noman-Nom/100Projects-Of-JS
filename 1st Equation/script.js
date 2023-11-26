const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', (e)=>{

    e.preventDefault()

let vi = parseFloat(document.querySelector('#vi').value)
let a = parseFloat(document.querySelector('#a').value)
let t = parseFloat(document.querySelector('#t').value)

const vf = document.querySelector('#vf')

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
   const result =(vi + a*t).toFixed(2)

   vf.value = result
   console.log(result)
   console.log(typeof result)

  

  
}

console.log("vi = " , vi)
console.log("a = " , a)
console.log("t = " , t )

// console.log(typeof vi)
// console.log(typeof a)
// console.log(typeof t)




})