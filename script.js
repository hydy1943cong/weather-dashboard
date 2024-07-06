const APIkey="3b41a3a2d317ea4220e8e87edf0ba6f5";
const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3b41a3a2d317ea4220e8e87edf0ba6f5&units=imperial";
const futureUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=3b41a3a2d317ea4220e8e87edf0ba6f5&units=imperial";

fetch (currentUrl)
    .then (function (response){
        return response.json();
    })
    .then (function(weather){      
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
            document.body.appendChild(CurrentWeatherEl);
            console.log(CurrentWeatherEl);
            console.log(weather);
          }
        )
    
fetch (futureUrl)
.then (function (response){
    return response.json();
})
.then (function(forcast){  
  console.log(forcast);
  for (i=7; i<forcast.list.length; i=i+8){
            const Day1El = document.createElement('div');
            const Day1DateEl = document.createElement('h4');
            const Day1IconEl = document.createElement('img');
            const Day1TempEl = document.createElement("p");
            const Day1WindEl = document.createElement("p");
            const Day1Humidity=document.createElement("p");
            Day1DateEl.textContent=dayjs.unix(forcast.list[i].dt).format("MM/DD/YYYY");
            Day1IconEl.src=`https://openweathermap.org/img/w/${forcast.list[i].weather[0].icon}.png`;
            Day1TempEl.textContent= `Temp: ${forcast.list[i].main.temp} °F`;
            Day1WindEl.textContent=`Wind: ${forcast.list[i].wind.speed} MPH`;
            Day1Humidity.textContent=`Humidity: ${forcast.list[i].main.humidity} %`;
            Day1DateEl.append(Day1IconEl);
            Day1El.append(Day1DateEl,Day1TempEl,Day1WindEl,Day1Humidity);
            document.body.appendChild(Day1El);
  }
}
    )  
