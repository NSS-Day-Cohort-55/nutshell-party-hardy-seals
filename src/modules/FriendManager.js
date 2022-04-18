const remoteURL = "http://localhost:8088"

export const getAllFriends = (loggedUser) => {
  return fetch(`${remoteURL}/friends?loggedUserId=${loggedUser.id}&_expand=user`)
  .then(res => res.json())
}

export const deleteFriend = (id) => { 
  return fetch(`${remoteURL}/friends/${id}`, {
    method: "DELETE",
  })
  .then(response => response.json())
}

export const getFriendById = (friend) => { 
  return fetch(`${remoteURL}/users/${friend.friendId}`)
  .then(res => res.json())
}

export const getUserFriends = (user, friend) => { 
  return fetch(`${remoteURL}/users/userid=${user.id}&_userid=${friend.id}`)
  .then(res => res.json())
}


