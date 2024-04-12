// variable declaration
const searchButton = $("#search");
const searchInput = $("#city");
const form = $("#serach-form");
const container = $("main");
const cityList = $("#dailyWeather");
// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  fetch(url).then(function (response) {
    if (!response.ok) {
      errorMessage(error);
    } else {
      console.log(response);
      return response.json();
    }
  });
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

function getFiveDayForecast(lat, lon) {}

function handleSubmit(e) {
  e.preventDefault();
  const city = searchInput.value;
  getWeather(city);
}
$document.ready(function () {
  let cityName = searchInput.val();

  if (cityName) {
    getWeather(cityName);
  } else {
    errorMessage("Please enter a city name");
  }
});

form.on("submit", handleSubmit);
