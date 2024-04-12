// variable declaration
const searchButton = $("#search");
const searchInput = $("#city");
const form = $("#search-form");
const container = $("main");
const cityList = $("#fiveDayWeather");
// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

function getLocalStorage() {
  let cityNameArray = localStorage.getItem("city");
  if (cityNameArray === null) {
    cityNameArray = [];
  } else {
    cityNameArray = JSON.parse(cityNameArray);
  }
  return cityNameArray;
}

function setLocalStorage(city) {
  let cityNameArray = getLocalStorage();
  cityNameArray.unshift(city);
  localStorage.setItem("city", JSON.stringify(cityNameArray));
}

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

async function getFiveDayForecast(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  try {
    const response = await fetch(url);
    const weatherForecastData = await response.json();
    console.log(weatherForecastData);
  } catch (error) {
    console.error(error);
  }

  return weatherForecastData;
}

function renderFiveDay(weatherForecastData) {
  console.log(weatherForecastData);
  const day1 = weatherForecastData.list[0];
  const day2 = weatherForecastData.list[8];
  const day3 = weatherForecastData.list[16];
  const day4 = weatherForecastData.list[24];
  const day5 = weatherForecastData.list[32];

  const day1Card = createWeatherForecastCard(day1);
  const day2Card = createWeatherForecastCard(day2);
  const day3Card = createWeatherForecastCard(day3);
  const day4Card = createWeatherForecastCard(day4);
  const day5Card = createWeatherForecastCard(day5);

  $(".forecast-card").remove();
  cityList.append(day1Card);
  cityList.append(day2Card);
  cityList.append(day3Card);
  cityList.append(day4Card);
  cityList.append(day5Card);
}

function createSearchHistory(city) {
  const cityCard = `<div class="card search-history-card" id="searchHistory" data-city="${city}">
  <div class="card-body">
    <h5 class="card-title">${city}</h5>
  </div>`;

  return cityCard;
}

function renderSearchHistory(city) {
  $("#searchHistory").empty();
  let cityList = getLocalStorage();
  for (const city of cityList) {
    const cityCard = createSearchHistory(city);
    $("#searchHistory").append(cityCard);
  }

  $(".search-history-card").on("click", function () {
    const city = $(this).data("city");
    getWeather(city);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const city = searchInput.val();
  getWeather(city);
}

form.on("submit", handleSubmit);
