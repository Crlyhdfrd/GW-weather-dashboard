//var APIKey = "98a5a136a93d1ff5a8e840d473af4ec0"
//var city;
//var state;

let weather = {
  apiKey: "1d5828eb71ccc2ff98c538b094271c14",
  fetchWeather: function () {},
};

// Get the weather data from the API
function getWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=1d5828eb71ccc2ff98c538b094271c14"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayWeather(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Display the weather data on the page
function displayWeather(data) {
  console.log(data);
  document.getElementById("city-heading").innerText = "Weather in " + data.name;
  document.getElementById("city-temp").innerText = data.main.temp + "°F";
  document.getElementById("city-des").innerText = data.weather[0].description;
  document.getElementById("city-hum").innerText =
    "Humidity: " + data.main.humidity + "%";
  document.getElementById("city-wind").innerText =
    "Wind Speed: " + data.wind.speed + " mph";
  document.getElementById("city-icon").src = getWeatherIcon(
    data.weather[0].icon
  );
}

function getWeatherIcon(icon) {
  return "https://openweathermap.org/img/w/" + icon + ".png";
}

function sumbit() {
  getWeather(document.getElementById("main-search").value);
}

window.addEventListener("load", () => {
  getWeather("Dallas");
});

function main() {
  getWeather("Dallas");
}

// main();
