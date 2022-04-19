export const EventCard = ({ event, index, handleDelete, handleEdit, showWeather }) => {
    return (
        <>
            <div className={index > 0 ? "card" : "important-card"}>
                <div className="card-content">
                    <h3>Name: <span className="card-eventname">
                        {event.name}
                    </span></h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => showWeather(event.id)}
                        className="btn btn-info"
                    >Show Weather
                    </button>
                    <button
                        type="button"
                        onClick={() => handleEdit(event.id)}
                        className="btn btn-primary"
                    >Edit Event
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDelete(event.id)}
                        className="btn btn-danger"
                    >Delete Event
                    </button>
                </div>
            </div>
        </>
    )
}