const inputBox= document.querySelector("#input-box")
const seacrhBtn= document.querySelector("#search-btn")
const result= document.querySelector('.row')


// console.log(inputBox)

const getData = async()=>{
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputBox.value}`
            const response= await fetch(url)
            const data = await response.json()
            console.log(data.meals)

            if (data && data.meals){
                result.innerHTML=""
                        data.meals.map((meal)=>{
                          
                         result.innerHTML +=`<div class="col">
                         <img src=${meal.strMealThumb} alt="">
                         <h4>${meal.strMeal}</h4>
                         <a href="#">Get Recipe</a>
                     </div>`
                    
                        })
                


            }
}

seacrhBtn.addEventListener('click',()=>{
            console.log(inputBox.value)
            getData()

       
})


