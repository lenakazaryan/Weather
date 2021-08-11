import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function getWeather() {
    axios
      .get(`https://goweather.herokuapp.com/weather/${city}`)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      });
  }

  function handleChange(event) {
    setCity(event.target.value);
    console.log(city);
  }

  return (
    <div>
      <div id="cover">
        <div className="tb">
          <div className="td">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleChange}
              required
            />
          </div>
          <div className="td" id="s-cover">
            <button type="submit" onClick={() => getWeather()}>
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div className="weather-container">
        {weather?.forecast?.map(function (item) {
          return (
            <div>
              <ul className="weather-container-items">
                <li>Day {item.day}</li>
                <li>Temperature {item.temperature}</li>
                <li>Wind {item.wind}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weather;
