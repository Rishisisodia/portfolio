console.log("js/weather-app.js loaded");

// Key bff369e74346dbfdf5ed77df6a2908aa

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=45.537336999387264&lon=-73.57100665397856&appid=bff369e74346dbfdf5ed77df6a2908aa&units=metric";

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();
  displayWeather(data);
}

getWeather();

const main = document.querySelector("main");
const tempArray = ["temp_min", "temp", "temp_max", "feels_like"];
const tempLabels = ["Current", "Feels Like", "Min", "Max"];


function displayWeather(data) {
  let sectionCity = document.createElement("section");
  sectionCity.classList.add("city");
  let cityName = document.createElement("h3");
  cityName.classList.add("city-name");

  // Append city name and country
  cityName.innerHTML = `${data.name}, ${data.sys.country}`;
  sectionCity.appendChild(cityName);
  main.appendChild(sectionCity);

  // Convert timestamp to Date object
  let date = new Date(data.dt * 1000);

  let dateTimeElement = document.createElement("p");
  dateTimeElement.classList.add("date-time");
  dateTimeElement.innerHTML = `${formatDate(date)}`;
  main.appendChild(dateTimeElement);

  // Get weather icon
  let weatherIconElement = document.createElement("img");
  weatherIconElement.classList.add("weather-icon");
  let iconCode = data.weather[0].icon;
  weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
  main.appendChild(weatherIconElement);

  // Get weather and weather description
  let weatherElement = document.createElement("p");
  weatherElement.classList.add("weather-description");
  weatherElement.innerHTML = `${data.weather[0].main} - ${data.weather[0].description}`;
  main.appendChild(weatherElement);

  let weatherTempContainer = document.createElement("div");
  weatherTempContainer.classList.add("weather-temp-container");

  for (let i = 0; i < tempArray.length; i++) {
    let weatherTemp = document.createElement("div");
    weatherTemp.classList.add("weather-temp");

    weatherTemp.innerHTML = `<h4 class="weather-temp-label">${tempLabels[i]}</h4> ${Math.round(data.main[tempArray[i]])} °C`;
    weatherTempContainer.appendChild(weatherTemp);
  }

  main.appendChild(weatherTempContainer);
}

function formatDate(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleString("en-US", options);
}

function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position.coords.latitude, position.coords.longitude);
        // navigator.geolocation.getCurrentPosition(showPosition);
      },
      (err) => {
        displayError(err.message);
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=45.5197485&lon=-73.6626959&appid=a1c493e064760a6fb7f2db56917b5ae3&units=metric`;

        getWeather(url);
      }
    );
  } else {
    displayError("Geolocation is not supported by your browser");
  }
}

function showPosition(position) {
  console.log("showPosition");
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=a1c493e064760a6fb7f2db56917b5ae3&units=metric`;

  getWeather(url);
}

getPosition();

function displayError(error) {
  let section = document.createElement("section");
  let h3 = document.createElement("h3");
  h3.innerHTML = error;

  section.appendChild(h3);
  main.appendChild(section);
}
