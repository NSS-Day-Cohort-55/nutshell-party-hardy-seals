import { getAllMessages, deleteMessage } from "../../modules/MessageManager";
import react, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCard } from "./MessageCard";
import { getAllFriends, addFriend } from "../../modules/FriendManager";

export const MessageList = () => {
    const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

    const [messages, setMessages] = useState([])
    const [Friends, setFriends] = useState([])

    const navigate = useNavigate()
    const messagesEndRef = useRef()

    const getMessages = () => {
        return getAllMessages()
        .then(messages => {
            setMessages(messages)
        })
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
 

    useEffect(() => {
        getMessages()
        .then(() => scrollToBottom)
    }, [])

    
    // useEffect(() => {
    //     scrollToBottom()
    // }, [messages])

    useEffect(() => {
        getAllFriends(loggedInUser)
        .then((res) => setFriends(res))
    }, [])

    const handleDeleteMessage = (id) => {
        deleteMessage(id)
        .then(() => getAllMessages().then((res) => setMessages(res)))
    }
    
    const handleAddFriend = (friend) => {
        addFriend(friend)
        .then(() => {
            getAllFriends(loggedInUser)
            .then((res) => setFriends(res))
        })
    }
    
    return (
        <>
            <button 
                type="button" 
                className="btn btn-primary"
				onClick={() => {navigate("/messages/create")}}
                >
				New Message
            </button>
            <div className="card-container">
                {messages.map(message =>
                    <MessageCard
                        key={message.id}
                        message={message}
                        handleDeleteMessage={handleDeleteMessage}
                        loggedInUser={loggedInUser}
                        isFriend={Friends.find(friend => friend.userId === message.userId || message.userId === loggedInUser.id) ? true : false}
                        handleAddFriend={handleAddFriend} />)}
                <div ref={messagesEndRef}></div>
            </div>
        </>
    )
}