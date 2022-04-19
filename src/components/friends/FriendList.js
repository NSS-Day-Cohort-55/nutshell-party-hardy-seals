// Wesley Mitchell

import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FriendCard } from "./FriendCard";
import { deleteFriend, getAllFriends, getFriendById } from "../../modules/FriendManager";

export const FriendList = () => {
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

  const navigate = useNavigate()

  const handleDeleteFriend = (id) => {
    setIsLoading(true)
    deleteFriend(id)
      .then(() => getAllFriends(loggedInUser)
        .then(setFriends))
    setIsLoading(false)
  }

  // useEffect(() => {
  //   const friendsToUserArr = []
  //   getAllFriends(loggedInUser).then(friends => {
  //     for (const friend of friends) {
  //       getFriendById(friend).then(res => {
  //         friendsToUserArr.push(res)
  //       })
  //     }
  //   }).then(() => setFriends(friendsToUserArr))
  // }, [])



  useEffect(() => {
    getAllFriends(loggedInUser).then(setFriends)
  }, [])

  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn btn-primary"
          onClick={() => { navigate("/friends/create") }}>
          Add Friend
        </button>
      </section>
      <div className="container-cards">
        {friends.map(friend => (<FriendCard key={friend.id} friend={friend} handleDeleteFriend={handleDeleteFriend} />))}
        {/* {friends.map(friend => <FriendCard friend={friend} key={friend.id} handleDeleteFriend={handleDeleteFriend} loggedInUser={loggedInUser} />)} */}
      </div>
    </>
  )
}