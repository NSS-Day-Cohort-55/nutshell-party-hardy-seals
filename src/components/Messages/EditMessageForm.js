import react, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateMessage, getMessageById } from "../../modules/MessageManager";

export const MessageEditForm = () => {
    const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

    const [message, setMessage] = useState({
        recipientId: 0,
        userId: loggedInUser.id,
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const {messageId} = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (event) => {
        const stateToChange = {...message}
        stateToChange[event.target.id] = event.target.value
        setMessage(stateToChange)
    }

    const updateExistingMessage = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const editedMessage = {
            id: messageId,
            recipientId: message.recipientId,
            userId: message.userId,
            message: message.message
        }
        updateMessage(editedMessage)
        .then(() => navigate("/messages"))
    }

    useEffect(() => {
        getMessageById(messageId)
        .then(message => {
            setMessage(message)
        })
        setIsLoading(false)
    }, [messageId])

    return (
        <>
        <form className="messageForm">
            <h3 className="messageForm__title">Edit Your Message</h3>
			<fieldset>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        type="text" 
                        id="message" 
                        onChange={handleFieldChange} 
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
				onClick={updateExistingMessage}
                >
				Save Edits
            </button>
		</form>
        </>
    )
}