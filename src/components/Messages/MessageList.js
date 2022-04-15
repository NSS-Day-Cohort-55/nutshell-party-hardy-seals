import { getAllMessages, deleteMessage } from "../../modules/MessageManager";
import react, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCard } from "./MessageCard";

export const MessageList = () => {
    const [messages, setMessages] = useState([])

    const navigate = useNavigate()
    const messagesEndRef = useRef(null)

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
    }, [])
    
    useEffect(() => {
    scrollToBottom()
    }, [messages])

    const handleDeleteMessage = (id) => {
        deleteMessage(id)
        .then(() => getAllMessages().then((res) => setMessages(res)))
    } 
    
    const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

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
                        loggedInUser={loggedInUser} />)}
                <div ref={messagesEndRef}></div>
            </div>
        </>
    )
}