const remoteURL = "http://localhost:8088"

export const addFriend = (newFriend) => {
    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
}

export const getFriends = () => {
    return fetch(`${remoteURL}/friends`)
    .then(response => response.json())
}