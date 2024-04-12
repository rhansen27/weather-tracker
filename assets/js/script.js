// variable declaration
const searchButton = document.getElementById("search");
const searchInput = document.getElementById("city");
const form = document.getElementById("serach-form");
const container = document.querySelector("main");
const cityWeatherEl = document.getElementById("cityWeather");
// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url).then(function (response) {
    console.log(response);
    if (!response.ok) {
      errorMessage(error);
    } else {
      return response.json();
    }
  });
}

function renderCardForCity(weatherData) {
  const city = weatherData.name;
  const temp = weatherData.main.temp;
  const wind = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;

  const cityCard = `div class="col-12">
  <h4 id="cityName">${city}</h4>
  <p id="temp">Temp: ${temp} F</p>
  <p id="wind">Wind: ${wind} MPH</p>
  <p id="humidity">Humidity: ${humidity}%</p>`;

  cityWeatherEl.innerHTML = "";
  cityWeatherEl.innerHTML = cityCard;
}

function errorMessage(error) {
  const alert = document.createElement("div");
  alert.classList.add(
    "alert",
    "alert-danger",
    "alert-dismissible",
    "fade",
    "show"
  );
  alert.innerText = error;
  container.appendChild(alert);
}

function handleSubmit(e) {
  e.preventDefault();
  const city = searchInput.value;
  getWeather(city);
}

window.addEventListener("submit", handleSubmit);
