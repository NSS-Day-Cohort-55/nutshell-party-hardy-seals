import { useEffect, useState } from "react"
import { getWeatherData } from "../modules/WeatherManager"
import { formatDatetoYYYYMMDD } from "../helpers/DateFormatter"



export const Home = () => {
    const [weather, setWeather] = useState([])
    const today = formatDatetoYYYYMMDD(new Date())


    useEffect(() => {
        getWeatherData("Nashville, TN").then(forecast => {
            const dayOfForecast = forecast.daily.find(day => formatDatetoYYYYMMDD(new Date(day.dt * 1000)) === today)
            setWeather(dayOfForecast)
        })
    }, [])


    //check if day is > 7 days in the future or if the event has already past, if so, say no weather available
    return (
        <>
            <h2>Todyay's forecast for Nashville, TN:</h2>
            <p>High: {weather?.temp?.max} &deg;F</p>
            <p>Low: {weather?.temp?.min} &deg;F</p>
            <p>Feels Like: {weather?.feels_like?.day} &deg;F</p>
            {weather.weather ? <p>Low: {weather?.weather[0].description}</p> : ""}
        </>
    )
}