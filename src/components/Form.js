import React, { useState } from 'react';
import { WeatherInfoStyle } from '../them/WeatherInfoStyle';
import LogoSun from '../icon/sun.png';
import { useNavigate } from 'react-router-dom'; 

const Form = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/weather-info/${city}`);
  };

  return (
    <WeatherInfoStyle>
      <div className="form-container">
        <h3>React Weather App</h3>
  
        <img src={LogoSun} className="weatherLogo" alt="Weather Logo" />
        <span className="chooseCityLabel">Find Weather of your city</span>
        <form className="searchBox" onSubmit={handleSubmit}>
          <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
    </WeatherInfoStyle>
  );
};

export default Form;
