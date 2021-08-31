
// get search button
const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const img = document.getElementById('bg');
    img.style.display = 'none';
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';

    if (searchText.length == '') {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'No results found';
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        const res = await fetch(url);
        const data = await res.json();
        displayResult(data.meals);

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displayResult(data.meals));
    }

};
// display result
const displayResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'No results found';
    }
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
};
// load each meal detail
const loadMealDetail = async mealId => {
    const url = `
        https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
};

// fetch(url)
//     .then(res => res.json())
//     .then(data => displayMealDetails(data.meals[0]));

// display meal details
const displayMealDetails = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <img  src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        `;
    mealDetails.appendChild(div);
};

