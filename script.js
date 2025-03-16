const apiKey="a81ea948fa0a389cb3314468876ef294";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search Button')
const weather_icon=document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response=await fetch(apiUrl+ city+`&appid=${apiKey}`);
    var  data=await response.json();
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+ "%";
    document.querySelector('.wind').innerHTML=data.wind.speed+ " km/h";
    if(data.weather[0].main=="Clouds"){
        weather_icon.src="images/clouds.png";
    }
    else  if(data.weather[0].main=="Clear"){
        weather_icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_icon.src="images/drizzle.png";
    }
    else  if(data.weather[0].main=="Humidity"){
        weather_icon.src="images/humidity.png";
    }
   else if(data.weather[0].main=="Mist"){
        weather_icon.src="images/mist.png";
    }
    else  if(data.weather[0].main=="Rain"){
        weather_icon.src="images/rain.png";
    }
    else  if(data.weather[0].main=="Snow"){
        weather_icon.src="images/snow.png";
    }
    document.querySelector('.weather').style.display="block";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

