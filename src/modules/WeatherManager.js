import { settings } from "../settings.js"
import { getEventById } from "./EventManager.js"


export const getWeatherData = (location) => {
    //location is a city, State, so first we need to grab the latitude and longitude by calling getlatlon
    //then we feed the returned values to the weather API
    return getLatLon(location)
            .then(latlon => fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latlon.lat}&lon=${latlon.lon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${settings.weatherKey}`))
            .then(response => response.json())
}

const getLatLon = (location) => {
    //splits location into city and state
    const city = location.split(", ")[0]
    const state = location.split(", ")[1]

    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&${state}&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(latlon => latlon[0])
}