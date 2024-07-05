const APIkey="3b41a3a2d317ea4220e8e87edf0ba6f5";
const requestUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3b41a3a2d317ea4220e8e87edf0ba6f5&units=imperial";

fetch (requestUrl)
    .then (function (response){
        return response.json();
    })
    .then (function(weather){      
            const CurrentWeatherEl = document.createElement('div');
            const CurrentCityEl = document.createElement('h3');
            const CurrentWeatherIconEl = document.createElement('p');
            const CurrentTempEl = document.createElement("p");
            const CurrentWindEl = document.createElement("p");
            const CurrentHumidity=document.createElement("p");
            const today=dayjs().format("(MM/DD/YYYY)");
            CurrentCityEl.textContent=weather.name+" "+today;
            CurrentTempEl.textContent= `Temp: ${weather.main.temp} °F`;
            CurrentWindEl.textContent=`Wind: ${weather.wind.speed} MPH`;
            CurrentHumidity.textContent=`Humidity: ${weather.main.humidity} %`;
            CurrentWeatherEl.append(CurrentCityEl,CurrentTempEl,CurrentWindEl,CurrentHumidity);
            document.body.appendChild(CurrentWeatherEl);
            console.log(CurrentWeatherEl);
            console.log(weather);
          }
        )
    
   
