const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = month + "/" + day + "/" + year;
document.getElementById("date").innerText = fullDate;



let weather = {
  apiKey: "1d5828eb71ccc2ff98c538b094271c14",
  fetchWeather: function () {},
};

// Get the weather data from the API
function getWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
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
  document.getElementById("city-heading").innerText =
    "Weather in " + data.city.name;
  for (let i = 0; i < 5; i++) {
    let daydata = data.list[i * 8];

    let parent = document.getElementById("card-" + i);
    console.log(data);
    parent.querySelector("#day-heading").innerText =
      "Weather on Day " + (i + 1);
    parent.querySelector("#city-temp").innerText = daydata.main.temp + "°F";
    parent.querySelector("#city-des").innerText =
      daydata.weather[0].description;
    parent.querySelector("#city-hum").innerText =
      "Humidity: " + daydata.main.humidity + "%";
    parent.querySelector("#city-wind").innerText =
      "Wind Speed: " + daydata.wind.speed + "mph";
    parent.querySelector("#city-icon").src = getWeatherIcon(
      daydata.weather[0].icon
    );
  }
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

main();
