import React from "react";

const WeatherInfo = ({ temperature, description, city, country }) => {
  
    if(temperature){
        return (
        <div className="container-div-info">
          <div className="div-info">
            <p>Location: {city}, {country}</p>
            <p>Temperature: {temperature}°</p>
            <p>Description: {description}</p>
          </div>
        </div>
      );
    }
    else{
        return(
            <>
            </>
        )
    }
};

export default WeatherInfo;
