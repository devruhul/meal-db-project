/* function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
};

// loadUsers();
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data));
};
function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => displayAlbums(data))
    
}

function displayAlbums(data) {
    const ul = document.getElementById('albums');
    for (const album of data){
        const li = document.createElement('li')
        li.innerText = ` title ${album.title} Id ${album.Id} `
        ul.appendChild(li)
        console.log(album.title);
    }
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data));
};

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name : ${user.name} email ${user.email}`;
        ul.appendChild(li);
    }
   
    
}; */

// quote generator kanye rest

const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
};
loadQuotes();

const displayQuotes = quotesList => {
    const quotes = document.getElementById('fav-quote');
    const p = document.createElement('p');
    p.innerText = quotesList.quote;
    quotes.appendChild(p);

};

// random user
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayBuddies(data));
};
loadBuddies();

const displayBuddies = buddies => {
    const randomBuddies = buddies.results;
    const buddiesId = document.getElementById('buddies');

    for (const buddy of randomBuddies) {
        const p = document.createElement('p');
        p.innerText = `Full Name : ${buddy.name.first} ${buddy.name.last}`;
        buddiesId.appendChild(p);
    }
};

// all countries capital name 
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
};
loadCountries();

const displayCountries = country => {
    const countriesDiv = document.getElementById('all-countries');
    country.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3> ${country.name} </h3>
            <p> ${country.capital} </p>
            <button onclick="loadCountryName('${country.name}')"> Click   </button>
        `;
        countriesDiv.appendChild(div);
    });


};
const loadCountryName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));

};

const displayCountryDetail = country => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h5>${country.name}</h4>
        <p>population: ${country.population}</p>
        <img  src="${country.flag}">
            
        `;
};


