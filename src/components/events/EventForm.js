import react, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addEvent, editEvent, getEventById } from "../../modules/EventManager";
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
    let {eventId} = useParams()
    eventId = parseInt(eventId)

    const navigate = useNavigate()

    const submitForm = () => {
        setIsLoading(true)

        const newEvent = {
            name: event.name,
            date: event.date,
            location: event.location,
            userId: JSON.parse(sessionStorage.getItem("nutshell_user")).id
        }

        if (eventId === 0) {
            addEvent(newEvent)
                .then(() => navigate("/events"))
        } else {
            newEvent.id = eventId

            editEvent(newEvent)
                .then(() => navigate("/events"))
        }
    }

    const handleFieldChange = e => {
        const newEvent = { ...event }
        newEvent[e.target.id] = e.target.value
        setEvent(newEvent)
    }

    useEffect(() => {
        if(eventId === 0) {
            document.querySelector("#date").valueAsDate = new Date() 
        } else {
            getEventById(eventId).then(event => {
                setEvent(event)
                document.querySelector("#name").value = event.name
                document.querySelector("#date").value = event.date
                document.querySelector("#location").value = event.location

                return event
            }) 
        }

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
                        onClick={submitForm}
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