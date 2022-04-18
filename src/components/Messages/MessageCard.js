import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MessageCard.css"
import { addFriend, getFriends } from "../../modules/FriendManager";

export const MessageCard = ({message, handleDeleteMessage, loggedInUser}) => {
    const [friend, setFriend] = useState({
        userId: 0,
        friendId: 0
    })
    const [dialog, setDialog] = useState(false)

    useEffect(() => {
        setFriend({
            userId: loggedInUser.id,
            friendId: message.userId
        })   
    }, [])

    // const handleDialogClick = () => {
    //     if(loggedInUser.id !== message.userId) {
    //         setDialog(true)
    //     }
    // }

    const handleDialogClick = () => {
            setDialog(true)
    }

    const handleCancelClick = () => {
        setDialog(false)
    }

    // const handleAddFriend = () => {
    //     getFriends()
    //     .then(friendsArr => {
    //         for (const friendFromFetch of friendsArr) {
    //             if (friendFromFetch.userId === loggedInUser.id && friendFromFetch.friendId === message.userId) {
    //                 console.log("logged in user", friendFromFetch.userId, "message author", friendFromFetch.friendId)
    //                 const dialog = document.getElementById(message.id)
    //                 dialog.close()
    //             } else {
    //                 console.log("this friendship should be added only if it doesn't exist yet")
    //                 addFriend(friend)
    //                 const dialog = document.getElementById(message.id)
    //                 dialog.close()
    //             }
    //         }
    //     })
    // }

    const handleAddFriend = () => {
        addFriend(friend)
        setDialog(false)
    }

    return (
    <>
        <dialog id={message.id}>
            <p>Add {message.user.name} as a friend?</p>
            <button className="btn btn-primary" onClick={handleAddFriend}>Add</button>
            <button className="btn btn-primary" onClick={handleCancelClick}>Cancel</button>
        </dialog>
        <div className="card">
            <div className="card-content" onClick={handleDialogClick}>
                <div className="message-author">
                    <h5>{message.user.name}</h5>
                </div>
                <div className="message-box">
                    <p>{message.message}</p>
                    {message.userId === loggedInUser.id ?
                        <Link to={`/messages/${message.id}/edit`}>
                            <button type="button" className="btn btn-primary">Edit</button>
                        </Link>
                        : ""
                    }
                    {message.userId === loggedInUser.id ? 
                        <button type="button" className="btn btn-primary" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                        : ""
                    }
                </div>
            </div>
        </div>
    </>
    )
}