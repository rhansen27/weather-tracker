// variable declaration
const searchButton = document.getElementById("search");
const searchInput = document.getElementById("city");
const form = document.getElementById("serach-form");
const container = document.querySelector("main");
// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url).then(function (response) {
    console.log(response);
    if (!response.ok) {
      errorMessage(error);
    }
  });
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
