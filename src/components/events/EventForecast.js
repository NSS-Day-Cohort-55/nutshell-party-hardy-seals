import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getEventById } from "../../modules/EventManager"
import { getWeatherData } from "../../modules/WeatherManager"
import { formatDatetoYYYYMMDD, futureDate } from "../../helpers/DateFormatter"



export const EventForecast = () => {
    const [weather, setWeather] = useState([])
    const [event, setEvent] = useState({})

    const { eventId } = useParams()


    useEffect(() => {
        getEventById(eventId)
            .then(event => {
                setEvent(event)
                getWeatherData(event.location).then(forecast => {
                    const dayOfForecast = forecast.daily.find(day => formatDatetoYYYYMMDD(new Date(day.dt * 1000)) === event.date)
                    setWeather(dayOfForecast)
                }) 
            })
    }, [])


    //check if day is > 7 days in the future or if the event has already past, if so, say no weather available
    return (event.date > futureDate(7) || event.date < futureDate(0) ? <>
            <h1>{event.name}</h1>
            <h2>{event.location}</h2>
            <p>{event.date}</p>
            <p>Sorry, there is no forecast for that day.</p>
        </>
        :
        <>
            <h1>{event.name}</h1>
            <h2>{event.location}</h2>
            <p>{event.date}</p>
            <h2>Weather Forecast:</h2>
            <p>High: {weather?.temp?.max} &deg;F</p>
            <p>Low: {weather?.temp?.min} &deg;F</p>
            <p>Feels Like: {weather?.feels_like?.day} &deg;F</p>
            {weather.weather ? <p>Low: {weather?.weather[0].description}</p> : ""}
        </>
    )
}