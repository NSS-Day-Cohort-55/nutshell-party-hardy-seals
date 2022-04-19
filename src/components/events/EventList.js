import { EventCard } from "./EventCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsersEvents, getAllEvents, deleteEvent } from "../../modules/EventManager";
import "./Events.css"

export const EventList = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()
    const userId = JSON.parse(sessionStorage.getItem("nutshell_user")).id

    const getEvents = () => getAllEvents().then(setEvents)
    
    const showWeather = eventId => navigate(`/events/${eventId}/forecast`)
    const handleEdit = eventId => navigate(`/events/${eventId}`)
    const handleDelete = eventId => deleteEvent(eventId).then(getEvents)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn btn-primary"
                    onClick={() => { navigate("/events/0") }}>
                    Add New Event
                </button>
            </section>
            <br></br>
            <div className="container-cards">
                {events.map((event, index) =>
                    <EventCard
                        key={event.id}
                        event={event}
                        index={index}
                        userId={userId}
                        showWeather={showWeather}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                )}
            </div>
        </>
    )
}