const remoteURL = "http://localhost:8088"

export const getAllMessages = () => {
    return fetch (`${remoteURL}/messages?_expand=user`)
    .then(response => response.json())
}

export const getMessageById = (messageId) => {
    return fetch (`${remoteURL}/messages/${messageId}?_expand=user`)
    .then(response => response.json())
}
 
export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
}

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(response => response.json())
}

export const getUserById = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
    .then(response => response.json())
}

export const deleteMessage = (messageId) => {
    return fetch(`${remoteURL}/messages/${messageId}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const updateMessage = (editedMessage) => {
    return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMessage)
    }).then(data => data.json())
}