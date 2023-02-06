const loadMeal = (search) =>{
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
   fetch(url).then(res=>res.json()).then(data=>displayMeal(data.meals));
}

const displayMeal = (meals)=>{
   const mealContainer = document.getElementById('meal-container');
   mealContainer.innerHTML = ``;
   meals.forEach(meal=>{
      console.log(meal)
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('col');
      mealDiv.innerHTML = `
      <div class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="strMealThumb">
         <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
         </div>
      </div>
      `;
      mealContainer.appendChild(mealDiv);
   })
}
const searchFood = ()=>{
   const searchItems = document.getElementById('search-items');
   const searchText = searchItems.value;
   loadMeal(searchText);
}