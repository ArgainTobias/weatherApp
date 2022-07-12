import React from 'react'

const WeatherForm = ({getWeather}) => {
  return (
    <div className='div-form'>
        <form onSubmit={getWeather}>
            <div className="div-input">
                <input type="text" name='city' placeholder='Enter your city name' autoFocus/>
            </div>
            <div className="div-input">
                <input type="text" name='country' placeholder='Enter your country name'/>
            </div>
            <button>Get weather</button>
        </form>
    </div>
  )
}

export default WeatherForm