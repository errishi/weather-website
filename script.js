const temp = document.querySelector(".temp");
const City = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");
const Weather = document.querySelector(".weather");
const Error = document.querySelector(".error");

const apiKey = "04b457b951bf22550a7d57786a2ef4fa";


async function checkWeather (city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiURL);
    
    if(response.status == "404"){
        Error.style.display = "block";
        Weather.style.display = "none";
    }
    else{
        var data = await response.json();
        City.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            icon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            icon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            icon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            icon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            icon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            icon.src = "images/snow.png";
        }   
        Weather.style.display = "block";
        Error.style.display = "none";
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})