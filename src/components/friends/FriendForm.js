// Wes Mitchell

import react from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../../modules/FriendManager";
import { addFriend } from "../../modules/FriendManager";
import "./FriendForm.css" 

export const FriendForm = () => {
  const [friend, setFriend] = useState(
    {
      userId: 0,
      loggedUserId: JSON.parse(sessionStorage.nutshell_user).id
    })

  const [users, setUsers] = useState([])

  const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const handleControlledInputChange = evt => {
    const newFriend = { ...friend }
    let selectedVal = parseInt(evt.target.value)
    newFriend[evt.target.id] = selectedVal
    setFriend(newFriend)
  }

  const handleClickSaveFriend = (evt) => {
    evt.preventDefault()

    if (friend.userId === 0) {
      window.alert("Please select a user from the dropdown")
      setIsLoading(false)
    } else {
      setIsLoading(true)
      addFriend(friend).then(() => navigate('/friends'))
    }
  }

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  return (
    <form className="friendForm">
      <h2 className="friendForm__title">New Friend</h2>
        <div className="form-group">
          <label htmlFor="location">Choose a Buddy: </label>
          <select value={friend.userId} name="userId" id="userId" onChange={handleControlledInputChange} className="form-control">
            <option value="0">---</option>
            {users.map(user => ( user.id === loggedInUser.id ? '' :
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      <button type="button" onClick={handleClickSaveFriend}>Add Friend</button>
    </form>
  )
}