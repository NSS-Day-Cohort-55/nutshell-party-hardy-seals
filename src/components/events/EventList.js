import { EventCard } from "./EventCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsersEvents, deleteEvent } from "../../modules/EventManager";
import "./Events.css"

export const EventList = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()
    const userId = JSON.parse(sessionStorage.getItem("nutshell_user")).id

    const getEvents = () => {
        return getAllUsersEvents(userId).then(APIData => {
            setEvents(APIData)
        })
    }

    const handleDelete = (eventId) => {
        deleteEvent(eventId).then(getEvents)
    }

    const showWeather = (eventId) => {
        navigate(`/events/${eventId}/forecast`)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn btn-primary"
                    onClick={() => { navigate("/events/create") }}>
                    Add New Event
                </button>
            </section>
            <div className="container-cards">
                {events.map((event, index) =>
                    <EventCard
                        key={event.id}
                        event={event}
                        index={index}
                        handleDelete={handleDelete}
                        showWeather={showWeather}
                    />)}
            </div>
        </>
    )
}