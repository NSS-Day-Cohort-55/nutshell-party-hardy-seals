import { getAllMessages, deleteMessage } from "../../modules/MessageManager";
import react, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCard } from "./MessageCard";
import { getAllFriends, addFriend } from "../../modules/FriendManager";

export const MessageList = () => {
    const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

    const [messages, setMessages] = useState([])
    const [friends, setFriends] = useState([])
    const [initialPageLoad, setInitialPageLoad] = useState([true])

    const navigate = useNavigate()
    const messagesEndRef = useRef(null)

    const getMessages = () => {
        return getAllMessages()
            .then(messages => {
                setMessages(messages)
            })
    }

    const getFriends = () => getAllFriends(loggedInUser).then(setFriends)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        Promise.all([
            getMessages(),
            getFriends()
        ]).then(() => setInitialPageLoad(false))
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [initialPageLoad])

    setTimeout(() => {
        getMessages()
    }, 2000);

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
                onClick={() => { navigate("/messages/create") }}
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
                        isFriend={friends.find(friend => friend.userId === message.userId || message.userId === loggedInUser.id) ? true : false}
                        handleAddFriend={handleAddFriend} />)}
                <div ref={messagesEndRef}></div>
            </div>
        </>
    )
}