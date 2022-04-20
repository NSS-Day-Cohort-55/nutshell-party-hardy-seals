export const EventCard = ({ event, index, handleDelete, handleEdit, showWeather, userId, isFriend }) => {

    const EditButtons = () => {
        return (
            <>
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
            </>
        )
    }
    const getClassStr = () => {
        let string = "card "
        if(index > 0)
            string = "important-card"
        else if(isFriend)
            string = "friend-card"
            
        return string
    }

    return (
        <>
            <div className={`${getClassStr()}`}>
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
                    {userId === event.userId ?
                        <EditButtons />
                        :
                        ""}
                </div>
            </div>
        </>
    )
}
