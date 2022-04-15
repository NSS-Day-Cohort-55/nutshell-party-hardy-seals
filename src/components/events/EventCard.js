export const EventCard = ({ event, index, handleDelete, showWeather }) => {
    return (index > 0 ?
        <>
            <div className="card">
                <div className="card-content">
                    <h3>Name: <span className="card-eventname">
                        {event.name}
                    </span></h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                </div>
                <button
                    type="button"
                    onClick={() => showWeather(event.id)}
                    className="btn btn-primary"
                >Show Weather
                </button>
                <button
                    type="button"
                    onClick={() => handleDelete(event.id)}
                    className="btn btn-primary"
                >Delete Event
                </button>
            </div>
        </>
        :
        <>
            <div className="important-card">
                <div className="card-content">
                    <h1>Name: <span className="card-eventname">
                        {event.name}
                    </span></h1>
                    <p className="important-text">Date: {event.date}</p>
                    <p className="important-text">Location: {event.location}</p>
                </div>
                <button
                    type="button"
                    onClick={() => showWeather(event.id)}
                    className="btn btn-primary"
                >Show Weather
                </button>
                <button
                    type="button"
                    onClick={() => handleDelete(event.id)}
                    className="btn btn-primary"
                >Delete Event
                </button>
            </div>
        </>
    )
}