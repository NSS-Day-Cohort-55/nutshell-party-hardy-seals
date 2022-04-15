import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FriendCard } from "./FriendCard";
import { deleteFriend, getAllFriends } from "../../modules/FriendManager";
import './friendList.css'

export const Friendist = () => { 
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleDeleteFriend = (id) => { 
    setIsLoading(true)
    deleteFriend(id)
      .then(() => getAllFriends()
        .then(setFriends))
        setIsLoading(false)
   }

   useEffect(() => {
     getAllFriends().then(setFriends)
   }, [])

   const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

  return (
    <>
    <section className="section-content">
      <button type="button"
              className="btn btn-primary"
              onClick={() => {navigate("/friends/create")}}>
              Add Friend
      </button>
    </section>
    <div className="container-cards">
      {friends.map(friend => <FriendCard friend={friend} key={friend.id} handleDeleteFriend={handleDeleteFriend} loggedInUser={loggedInUser}/>)}
    </div>
    </>
  )
}