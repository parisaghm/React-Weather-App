import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Form from './components/Form';
import WeatherInfoPage from './components/WeatherInfo';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/weather-info/:city" element={<WeatherInfoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;