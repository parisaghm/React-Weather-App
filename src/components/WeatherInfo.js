import React, { useEffect, useState } from 'react';
import { WeatherInfoStyle } from '../them/WeatherInfoStyle';
import { useParams } from 'react-router-dom';

const WeatherIcons = {
  '01d': <img src="https://img.icons8.com/fluency/96/000000/sun.png"/>,
  '01n': <img src="https://img.icons8.com/fluency/96/000000/full-moon.png"/>,
  '02d': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-day.png"/>,
  '02n': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-night.png"/>,
  '03d': <img src="https://img.icons8.com/fluency/96/000000/moderate-rain.png"/>,
  '03n': <img src="https://img.icons8.com/fluency/96/000000/moderate-rain.png"/>,
  '04d': <img src="https://img.icons8.com/fluency/96/000000/clouds.png"/>,
  '04n': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-night.png"/>,
  '09d': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-rain.png"/>,
  '09n': <img src="https://img.icons8.com/fluency/96/000000/rainy-night.png"/>,
  '10d': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-rain.png"/>,
  '10n': <img src="https://img.icons8.com/fluency/96/000000/rainy-night.png"/>,
  '11d': <img src="https://img.icons8.com/fluency/96/000000/chance-of-storm.png"/>,
  '11n': <img src="https://img.icons8.com/fluency/96/000000/stormy-night.png"/>
   
}


const WeatherInfoPage = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = '56a2c31c64a6247e0e851f88799c0dd5';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);


  return (
    <WeatherInfoStyle>
      <div className="form-container">
        <h3>React Weather App</h3>
        <div className="weatherInfo">
          {weather ? (
            <React.Fragment>
            <div className="condition-info">
              <span>
              <span className='condition-style'>{`${Math.floor(weather && weather.main && weather.main.temp - 273)}°C`}</span>{` | ${weather && weather.weather && weather.weather[0].description}`}
              </span>
                {WeatherIcons[weather.weather[0].icon]}
            </div>   
              <p className='condition-style'>{weather.name}</p>
    
            </React.Fragment>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </WeatherInfoStyle>
  );
};

export default WeatherInfoPage;
