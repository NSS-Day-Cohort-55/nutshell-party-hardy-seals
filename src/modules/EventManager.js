export const getAllUsersEvents = (userId) => {
    return fetch(`http://localhost:8088/events?userId=${userId}&_sort=date`)
        .then(response => response.json())
}

export const addEvent = (event) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(event)
    }).then(response => response.json())
}

export const deleteEvent = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
}

export const getEventById = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`)
        .then(response => response.json())
}

export const editEvent = (event) => {
    return fetch(`http://localhost:8088/events/${event.id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(event)
    }).then(response => response.json())

}