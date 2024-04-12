// variable declaration
const searchButton = document.getElementById('search');
const searchInput = document.getElementById('city');
const form = document.getElementById('serach-form');

// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}

function handleSubmit(e){
    e.preventDefault();
    const city = searchInput.value;
    getWeather(city);
}

window.addEventListener('submit', handleSubmit);