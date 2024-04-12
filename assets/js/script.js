// variable declaration
const searchButton = $("#search");
const searchInput = $("#city");
const form = $("#search-form");
const container = $("main");
const cityList = $("#dailyWeather");
// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

async function getWeather(city) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  }
}

function renderCardForCity(weatherData) {
  const cityName = weatherData.name;
  const cityTemp = weatherData.main.temp;
  const cityWind = weatherData.wind.speed;
  const cityHumidity = weatherData.main.humidity;

  const cityCard = `div class="col-12">
  <h4 id="cityName">${cityName}</h4>
  <p id="temp">Temp: ${cityTemp} F</p>
  <p id="wind">Wind: ${cityWind} MPH</p>
  <p id="humidity">Humidity: ${cityHumidity}%</p>`;
  $("#dailyWeather").empty().append(cityCard);
}

// function errorMessage(error) {
//   const alert = document.createElement("div");
//   alert.classList.add(
//     "alert",
//     "alert-danger",
//     "alert-dismissible",
//     "fade",
//     "show"
//   );
//   alert.innerText = error;
//   container.append(alert);
// }

function getFiveDayForecast(lat, lon) {}

function handleSubmit(e) {
  e.preventDefault();
  const city = searchInput.val();
  getWeather(city);
}

form.on("submit", handleSubmit);
