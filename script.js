const apikey = "5ee34aea92853e735d5dc08738f2be7e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weathericon = document.querySelector('.weather-icon');

async function weather(city) {
    const weatherElement = document.querySelector('.weather');
    const errorElement = document.querySelector('.error');
    
    weatherElement.classList.remove('fadeIn');
    weatherElement.classList.add('fadeOut');
    errorElement.classList.remove('fadeIn');
    errorElement.classList.add('fadeOut');

    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    
    setTimeout(async () => {
        if (response.status == 404) {
            errorElement.style.display = 'block';
            errorElement.classList.remove('fadeOut');
            errorElement.classList.add('fadeIn');
            weatherElement.style.display = 'none';
        } else {
            var data = await response.json();

            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
            document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

            if (data.weather[0].main == "Clouds" || data.weather[0].main == "Haze") {
                weathericon.src = "clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weathericon.src = "clear.png";
            } else if (data.weather[0].main == "Rain") {
                weathericon.src = "rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                weathericon.src = "drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                weathericon.src = "mist.png";
            } else if (data.weather[0].main == "Snow") {
                weathericon.src = "snow.png";
            }

            console.log(data);

            weatherElement.style.display = 'block';
            weatherElement.classList.remove('fadeOut');
            weatherElement.classList.add('fadeIn');
            errorElement.style.display = 'none';
        }
    }, 500); 
}

searchbtn.addEventListener('click', () => {
    weather(searchbox.value);
});
