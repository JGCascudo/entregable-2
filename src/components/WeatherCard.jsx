import React, { useState } from 'react'

const weatherCard = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemperature = () => setIsCelsius(!isCelsius)

  return (
    <article>
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <section>
        <header>
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        </header>
        <article>
          <h3>{weather?.weather[0].description}</h3>
          <ul>
            <li><span>wind speed</span> {weather?.wind.speed} m/s</li>
            <li><span>Clouds</span> {weather?.clouds.all} %</li>
            <li><span>Pressure</span> {weather?.main.pressure} hPa</li>
          </ul>
        </article>
      </section>
      <footer>
        <h2>
          {
            isCelsius
              ? `${temperature?.celsius} C`
              : `${temperature?.farenheit} F`
          }
        </h2>
        <button onClick={handleChangeTemperature}>change to {isCelsius? 'F' : 'C'}</button>
      </footer>
    </article>
  )
}

export default weatherCard