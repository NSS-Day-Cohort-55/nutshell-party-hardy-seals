import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MessageCard.css"

export const MessageCard = ({message, handleDeleteMessage, loggedInUser, isFriend, handleAddFriend}) => {
    const [friend, setFriend] = useState({
        userId: 0,
        loggedUserId: 0
    })
    const [dialogVisible, setDialogVisible] = useState(false)

    useEffect(() => {
        setFriend({
            userId: message.userId,
            loggedUserId: loggedInUser.id
        })
    }, [])

    return (
    <>
        <dialog className="dialog" id={message.id} open={dialogVisible}>
            <p>Add {message.user.name} as a friend?</p>
            <button className="btn btn-primary" onClick={() => {handleAddFriend(friend) 
                                                                setDialogVisible(false)}}
                                                                >Add</button>
            <button className="btn btn-primary" onClick={() => setDialogVisible(false)}>Cancel</button>
        </dialog>
        <div className="card">
            <div className="card-content" >
                {!isFriend ?
                    <div className="not-friends" onClick={() => setDialogVisible(true)}>
                        <h5>{message.user.name}</h5>
                    </div>
                    :
                    <div>
                        <h5>{message.user.name}</h5>
                    </div> }
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