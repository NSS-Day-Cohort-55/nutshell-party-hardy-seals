import react, { useState, useEffect } from "react";
import { addMessage, getAllUsers } from "../../modules/MessageManager";
import { useNavigate } from "react-router-dom";

export const MessageForm = () => {
    const loggedInUser = JSON.parse(sessionStorage.nutshell_user)
    
    const [message, setMessage] = useState({
        recipientId: 0,
        userId: loggedInUser.id,
        message: ""
    })
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newMessage = {...message}
        let selectedVal = event.target.value
        if (event.target.id === "message" && event.target.value.startsWith("@")) {
            const recipientName = event.target.value.split(" ")[0].split("@")[1]
           const userObj = users.find( (user) => {
               return user.name.startsWith(recipientName)
            })
            newMessage.recipientId = userObj.id
        }
        newMessage[event.target.id] = selectedVal
        setMessage(newMessage) 
    }

    useEffect(() => {
        getAllUsers()
        .then(users => {
            setUsers(users)
        })
        setIsLoading(false)
    }, [])

    const handleClickSendMessage = (event) => {
        event.preventDefault()
        if (message.message === "") {
            window.alert("Please type a message before submitting")
        } else {
            setIsLoading(true)
            addMessage(message)
            .then(() => navigate("/messages"))
        }
    }

    return (
        <form className="messageForm">
			<h3 className="messageForm__title">Send a New Message</h3>
			<fieldset>
				<div className="form-group">
					<label htmlFor="message">Message:</label>
					<textarea 
                        type="text" 
                        id="message" 
                        onChange={handleControlledInputChange} 
                        required autoFocus 
                        className="form-control" 
                        placeholder="Type your message here ..." 
                        value={message.message}
                        >
                        </textarea>
				</div>
			</fieldset>
			<button 
                type="button" 
                className="btn btn-primary"
                disabled={isLoading}
				onClick={handleClickSendMessage}
                >
				Submit Message
          </button>
		</form>
    )
}