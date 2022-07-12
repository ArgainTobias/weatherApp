import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import { WEATHER_KEY } from "../keys";
import { useState } from "react";

const Main = () => {
  const [info, setInfo] = useState({
    temperature: "",
    description: "",
    city: "",
    country: "",
  });

  const getWeather = (e) => {
    e.preventDefault();

    const { city, country } = e.target.elements;

    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${WEATHER_KEY}&units=metric`;

    fetch(api_url)
      .then((res) => res.json())
      .then((response) => {
        const { temp } = response.main;
        const { name } = response;
        const { country } = response.sys;
        const { description } = response.weather[0];

        setInfo({
          temperature: { temp },
          description: { description },
          city: { name },
          country: { country },
        });
      });
  };

  return (
    <main>
      <div className="container-weathers">
        <WeatherForm getWeather={getWeather} />
        <WeatherInfo
          temperature={info.temperature.temp}
          description={info.description.description}
          city={info.city.name}
          country={info.country.country}
        />
      </div>
    </main>
  );
};

export default Main;