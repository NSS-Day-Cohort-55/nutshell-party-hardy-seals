import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../../modules/EventManager";
import { formatDatetoYYYYMMDD } from "../../helpers/DateFormatter";
import "./EventForm.css"



export const EventForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [event, setEvent] = useState({
        name: "",
        date: getToday(),
        location: "",
        userId: 0
    })

    const navigate = useNavigate()

    const newEvent = () => {
        setIsLoading(true)

        const newEvent = {
            name: event.name,
            date: event.date,
            location: event.location,
            userId: JSON.parse(sessionStorage.getItem("nutshell_user")).id
        }

        addEvent(newEvent)
            .then(() => navigate("/events"))
    }

    const handleFieldChange = e => {
        const newEvent = { ...event }
        newEvent[e.target.id] = e.target.value
        setEvent(newEvent)
    }

    useEffect(() => {
        document.querySelector("#date").valueAsDate = new Date()
    }, [])

    return (
        <form>
            <h2>New Event</h2>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        className="formControl"
                        onChange={handleFieldChange}
                        id="name"
                    />
                    <label htmlFor="name">Event Name</label>
                    <input
                        type="date"
                        required
                        className="formControl"
                        onChange={handleFieldChange}
                        id="date"
                    />
                    <label htmlFor="date">Event Date</label>
                    <input
                        type="text"
                        required
                        className="formControl"
                        onChange={handleFieldChange}
                        id="location"
                    />
                    <label htmlFor="location">Event Location</label>
                </div>
                <div className="alignRight">
                    <button
                        type="button" disabled={isLoading}
                        onClick={newEvent}
                        className="btn btn-primary"
                    >Submit</button>
                </div>
            </fieldset>
        </form>

    )
}


const getToday = () => {
    return formatDatetoYYYYMMDD()
}