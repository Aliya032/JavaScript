const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("temp-img");
const description = document.getElementById("description");
const tempMax = document.getElementById("temp-max");
const tempMin = document.getElementById("temp-min");

const months = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById("app");

const getWeather = async () => {
  try {
    const cityName = document.getElementById("search-bar-input").value;
    const weatherDataFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid={api_key}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData);
    city.innerHTML = `${weatherData.name}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
    description.innerHTML = `${weatherData.weather[0].main}`;
    temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}ºC</h2>`;
    tempMax.innerHTML = `${weatherData.main.temp_max}`;
    tempMin.innerHTML = `${weatherData.main.temp_min}`;
  } catch (error) {
    console.log(error);
  }
};
