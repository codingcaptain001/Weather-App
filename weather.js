const ApiKey = "c090852fd7c9972321b057021a9dbff6"

const Apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const SearchBox = document.querySelector(".search input")
const Searchbtn = document.querySelector(".search button")
const WeatherIcon = document.querySelector(".weather-icon")

async function checkweather (city) {
    const response = await fetch(Apiurl + city + `&appid=${ApiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".Weather").style.display = "none"
    }else {
        const data = await response.json()
    
    
        document.querySelector(".city-name").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h"
    
        if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
            WeatherIcon.src = "images/snow.png"
        }
    
        document.querySelector(".Weather").style.display = "block"
        document.querySelector(".error").style.display = "none"

    }

}

Searchbtn.addEventListener("click" , ()=> {
    checkweather(SearchBox.value)

})
