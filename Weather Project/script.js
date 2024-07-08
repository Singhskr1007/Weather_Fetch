const apikey="5ee34aea92853e735d5dc08738f2be7e";

const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox=document.querySelector('.search input');
    const searchbtn=document.querySelector('.search button');

    const weathericon=document.querySelector('.weather-icon');  

    async function weather(city)
    {
        const response=await fetch(apiurl+city+`&appid=${apikey}`); 

        if(response.status==404)
            {
                document.querySelector('.error').style.display='block';
                document.querySelector('.weather').style.display='none';
            }
            
        else
        {
            var data=await response.json();

            document.querySelector('.city').innerHTML=data.name;
            document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML=data.main.humidity + " %";
            document.querySelector('.wind').innerHTML=data.wind.speed + " km/h";

        if(data.weather[0].main=="Clouds" || data.weather[0].main=="Haze" )
        {
            weathericon.src="clouds.png"
        }
        else if(data.weather[0].main=="Clear")
        {
            weathericon.src="clear.png"
        }
        else if(data.weather[0].main=="Rain")
        {
            weathericon.src="rain.png"
        }
        else if(data.weather[0].main=="Drizzle")
        {
            weathericon.src="drizzle.png"
        }
        else if(data.weather[0].main=="Mist")
        {
            weathericon.src="mist.png"
        }
        else if(data.weather[0].main=="Snow")
            {
                weathericon.src="snow.png"
            }

        console.log(data);

        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';
        }
    }
    searchbtn.addEventListener('click',()=>{
        weather(searchbox.value);
    });
   
    