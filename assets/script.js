const APIkey="3b41a3a2d317ea4220e8e87edf0ba6f5";



function getWeather() {
  
  const currentWeatherContainer = document.getElementById('currentWeather');
  const forecastContainer = document.getElementById('forecast');
  const searchHistoryContainer = document.getElementById('searchHistory');

  if (currentWeatherContainer) {
    currentWeatherContainer.innerHTML = '';
  }

  if (forecastContainer) {
    forecastContainer.innerHTML = '';
  }


  const city = document.getElementById("cityInput");
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIkey}&units=imperial`;
  const futureUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${APIkey}&units=imperial`;
  
fetch (currentUrl)
    .then (function (response){
        return response.json();
    })
    .then (function(weather){  
      localStorage.setItem('currentWeather', JSON.stringify(weather));    
            const CurrentWeatherEl = document.createElement('div');
            const CurrentCityEl = document.createElement('h3');
            const CurrentIconEl = document.createElement('img');
            const CurrentTempEl = document.createElement("p");
            const CurrentWindEl = document.createElement("p");
            const CurrentHumidity=document.createElement("p");
            const today=dayjs().format("(MM/DD/YYYY)");
            CurrentCityEl.textContent=weather.name+" "+today;
            CurrentIconEl.src=`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
            CurrentTempEl.textContent= `Temp: ${weather.main.temp} °F`;
            CurrentWindEl.textContent=`Wind: ${weather.wind.speed} MPH`;
            CurrentHumidity.textContent=`Humidity: ${weather.main.humidity} %`;
            CurrentCityEl.append(CurrentIconEl);
            CurrentWeatherEl.append(CurrentCityEl,CurrentTempEl,CurrentWindEl,CurrentHumidity);
            currentWeatherContainer.appendChild(CurrentWeatherEl);
            updateSearchHistory(city.value);
          }
        )

fetch (futureUrl)
.then (function (response){
    return response.json();
})
.then (function(forcast){
  localStorage.setItem('forecast', JSON.stringify(forecast));
  for (i=7; i<forcast.list.length; i=i+8){  
            const forcastEl = document.createElement('div');
            const forcastTitleEl=document.createElement('h3');
            const forcastDateEl = document.createElement('h4');
            const forcastIconEl = document.createElement('img');
            const forcastTempEl = document.createElement("p");
            const forcastWindEl = document.createElement("p");
            const forcastHumidity=document.createElement("p");
            forcastTitleEl.textContent="5-Day Forecast:";
            forcastDateEl.textContent=dayjs.unix(forcast.list[i].dt).format("MM/DD/YYYY");
            forcastIconEl.src=`https://openweathermap.org/img/w/${forcast.list[i].weather[0].icon}.png`;
            forcastTempEl.textContent= `Temp: ${forcast.list[i].main.temp} °F`;
            forcastWindEl.textContent=`Wind: ${forcast.list[i].wind.speed} MPH`;
            forcastHumidity.textContent=`Humidity: ${forcast.list[i].main.humidity} %`;
            forcastDateEl.append(forcastIconEl);
            forcastEl.append(forcastDateEl,forcastTempEl,forcastWindEl,forcastHumidity);
            forecastContainer.append(forcastEl);
  }
}
    )

}

function updateSearchHistory(city) {
  const searchHistoryContainer = document.getElementById('searchHistory');
  const historyItem = document.createElement('button');
  historyItem.textContent = `${city}`;

  historyItem.addEventListener("click", function (event) {
    const clickedCityName = event.target.textContent;
    getHistoryWeather(clickedCityName); // Pass city name to getWeather
  });

  searchHistoryContainer.appendChild(historyItem);
}

function getHistoryWeather(cityname) {
  
  const currentWeatherContainer = document.getElementById('currentWeather');
  const forecastContainer = document.getElementById('forecast');
  const searchHistoryContainer = document.getElementById('searchHistory');

  if (currentWeatherContainer) {
    currentWeatherContainer.innerHTML = '';
  }

  if (forecastContainer) {
    forecastContainer.innerHTML = '';
  }

  
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=imperial`;
  const futureUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${APIkey}&units=imperial`;
  
fetch (currentUrl)
    .then (function (response){
        return response.json();
    })
    .then (function(weather){  
      localStorage.setItem('currentWeather', JSON.stringify(weather));    
            const CurrentWeatherEl = document.createElement('div');
            const CurrentCityEl = document.createElement('h3');
            const CurrentIconEl = document.createElement('img');
            const CurrentTempEl = document.createElement("p");
            const CurrentWindEl = document.createElement("p");
            const CurrentHumidity=document.createElement("p");
            const today=dayjs().format("(MM/DD/YYYY)");
            CurrentCityEl.textContent=weather.name+" "+today;
            CurrentIconEl.src=`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
            CurrentTempEl.textContent= `Temp: ${weather.main.temp} °F`;
            CurrentWindEl.textContent=`Wind: ${weather.wind.speed} MPH`;
            CurrentHumidity.textContent=`Humidity: ${weather.main.humidity} %`;
            CurrentCityEl.append(CurrentIconEl);
            CurrentWeatherEl.append(CurrentCityEl,CurrentTempEl,CurrentWindEl,CurrentHumidity);
            currentWeatherContainer.appendChild(CurrentWeatherEl);
          }
        )

fetch (futureUrl)
.then (function (response){
    return response.json();
})
.then (function(forcast){
  localStorage.setItem('forecast', JSON.stringify(forecast));
  for (i=7; i<forcast.list.length; i=i+8){  
            const forcastEl = document.createElement('div');
            const forcastDateEl = document.createElement('h4');
            const forcastIconEl = document.createElement('img');
            const forcastTempEl = document.createElement("p");
            const forcastWindEl = document.createElement("p");
            const forcastHumidity=document.createElement("p");
            forcastDateEl.textContent=dayjs.unix(forcast.list[i].dt).format("MM/DD/YYYY");
            forcastIconEl.src=`https://openweathermap.org/img/w/${forcast.list[i].weather[0].icon}.png`;
            forcastTempEl.textContent= `Temp: ${forcast.list[i].main.temp} °F`;
            forcastWindEl.textContent=`Wind: ${forcast.list[i].wind.speed} MPH`;
            forcastHumidity.textContent=`Humidity: ${forcast.list[i].main.humidity} %`;
            forcastDateEl.append(forcastIconEl);
            forcastEl.append(forcastDateEl,forcastTempEl,forcastWindEl,forcastHumidity);
            forecastContainer.appendChild(forcastEl);
  }
}
    )

}