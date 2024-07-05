const APIkey="3b41a3a2d317ea4220e8e87edf0ba6f5";
const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=3b41a3a2d317ea4220e8e87edf0ba6f5";

fetch (requestUrl)
    .then (function (response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
})
