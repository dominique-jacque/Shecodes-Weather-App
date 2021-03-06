// Feature #1-displaying current time and date
function formatDate() {
    let now = new Date();
    let date = now.getDate();
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let year = now.getFullYear();
  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[now.getDay()];
  
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let month = months[now.getMonth()];
    let today = `${day}, ${month} ${date}, ${year} ${hours}:${minutes}`;
    return today;
  }
  let h3 = document.querySelector("h3");
  h3.innerHTML = formatDate(Date);
  
 
  function displayCurrentWeather(response) {
    console.log(response.data);
    let temp = Math.round(response.data.main.temp);
    let humid = response.data.main.humidity;
    let descript = response.data.weather[0].main;
    let wind = Math.round(response.data.wind.speed);
    let currentTemp = document.querySelector("#current-temperature");
    let currentHumid = document.querySelector("#current-humid");
    let currentDescript = document.querySelector("#current-descript");
    let currentWind = document.querySelector("#current-wind");
    currentTemp.innerHTML = `${temp}°F`;
    currentHumid.innerHTML = `${humid}%`;
    currentDescript.innerHTML = `${descript}`;
    currentWind.innerHTML = `${wind}mph`;
  }
  
  function searchCity(event) {
    event.preventDefault();
    let currentCity = document.querySelector("#city-name");
    let input = document.querySelector("#search-form-input");
    currentCity.innerHTML = `Weather for ${input.value}`;
    let apiKey = "08e97ecdda5ea0cf3c620c610617c3ee";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayCurrentWeather);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchCity, false);
  