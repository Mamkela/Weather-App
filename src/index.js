function displayTemperature(response) {
  
  let weatherInfo = document.querySelector("#weather-info");
  weatherInfo.classList.remove("hidden");

  
  let errorMessage = document.querySelector("#error-message");
  errorMessage.classList.add("hidden");


  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;

  
  iconElement.innerHTML = `<img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png" alt="${response.data.condition.description}" />`;
}

function handleError() {
  
  let weatherInfo = document.querySelector("#weather-info");
  weatherInfo.classList.add("hidden");

  let errorMessage = document.querySelector("#error-message");
  errorMessage.classList.remove("hidden");
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433"; 
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature).catch(handleError);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
