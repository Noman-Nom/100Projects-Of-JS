// method 1
//  document.getElementById('item1').addEventListener('click',function(e){

//     // alert("clicked")
//     // console.log(e.target)

//     // e.target.parentNode.remove();
//     const removeIt = e.target.parentNode;
//     removeIt.remove();

//  })

// method 2

// document.getElementById("item1").addEventListener("click", function (e) {
//   const removeIt = e.target.parentNode;

//   // by using css in js
//   removeIt.style.display = "none";
// });


// method 3 important 

document.querySelector('#images').addEventListener('click', function(e){
           const removeIt = e.target.parentNode;
        //    removeIt.remove();
        removeIt.style.display ="none"
      
})