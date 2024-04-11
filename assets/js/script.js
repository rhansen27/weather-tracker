// variable declaration
const searchButton = $("#search");
const searchInput = $("#city");

// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

// fetch weather data
async function fetchWeather(city) {}

// save to local storage
function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}
// recover data from local storage
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// function to handle search when button is clicked
function handleSearch() {
  const city = searchInput.val();
  if (city) {
    setLocalStorage("city", city);
  } else {
    alert("Please enter a city name");
  }
  return city;
}

// eventListener
searchButton.on("click", () => {
  handleSearch();
});
