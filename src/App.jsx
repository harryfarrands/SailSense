import React, { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = () => {
    // Logic to fetch weather data based on location
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const weatherDisplay = weather ? (
    <div className="weather-info">
      <h2>Weather in {location}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  ) : null;

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <header>
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Search location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
      </header>
      <main>
        {/* World map component should go here */}
        <div className="map">World Map</div>
        {/* Weather display */}
        {weatherDisplay}
      </main>
    </div>
  );
}

export default App;