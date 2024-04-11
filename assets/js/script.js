// variable declaration
const searchButton = $("#search");
const searchInput = $("#city");

// API key
const API_KEY = "305a69ec163b25e41504278d241e096d";

// fetch weather data
async function fetchWeather(city) {
  const response = await fetch(
    `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&untis=imperial`
  );
  if (!response.ok) {
    alert("Request failed! Please try again.");
  } else {
    const data = await response.json();
    return data;
  }
}

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
