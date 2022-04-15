import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getEventById } from "../../modules/EventManager"

import { getWeatherData } from "../../modules/WeatherManager"



export const EventForecast = () => {
    const [weather, setWeather] = useState([])
    const [event, setEvent] = useState({})
        
    const { eventId } = useParams()


    useEffect(() => {
        getEventById(eventId)
            .then(event => {
                setEvent(event)
                return getWeatherData(event.location)
            })
            .then(weather => weatherStats(weather))
            .then(weatherStats => setWeather(weatherStats))
    }, [])

    return <h1>butts</h1>
}


const weatherStats = (weatherArray) => {
    const weatherStats = []
    
    //park data comes with a forecast every 3 hours for 5 days (40 entries), so we skip 8 indexes (24hrs) each loop
    for (let i = 0; i < 40; i += 8) {
        let high = -999999
        let low = 9999999
        let feelsLike = 0

        //in order to calculate the average feels-like, high, and low temperatures, we loop through each day's worth 
        //of weather data and find highest high, lowest low, and running tally of feelsLike (to get average after looping)
        for (let j = i; j < i + 8; j++) {
            if (weatherArray.list[j].main.temp_max > high) {
                high = weatherArray.list[j].main.temp_max
            }
            if (weatherArray.list[j].main.temp_min < low){
                low = weatherArray.list[j].main.temp_min
            }
            feelsLike += weatherArray.list[j].main.feels_like
        }
        //divide by 8 (24 hours) to get feelsLike average
        feelsLike /= 8

        const day = {
            high: high,
            low: low,
            feelsLike: feelsLike,
            forecast: weatherArray.list[i].weather[0].description,
            day: weatherArray.list[i].dt_txt.split(" ")[0]
        }

        weatherStats.push(day)
    }
    return weatherStats
}