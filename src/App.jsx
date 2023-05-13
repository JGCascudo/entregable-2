import axios from "axios";
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from "./components/weatherCard"
import Loading from "./components/Loading";

function App() {

  const [latlon, setLatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(()=> {

  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setLatlon(obj)
  }

  navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(latlon){
      const apikey = '61fed6b316a82b30e24b3a07b23dfd3f'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apikey}`
      axios.get(url)
        .then(res => {
          const celsius = (res.data.main.temp -273.15).toFixed(1)
          const farenheit = (celsius* 9/5 +32).toFixed(1)
          setTemperature({celsius, farenheit})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [latlon])

  return (
      <div className='App'>
        {
          weather ?
          <WeatherCard 
            weather={weather}
            temperature={temperature}/>
          :
            <Loading/>
        }
      </div>
  ) 
}
export default App 
