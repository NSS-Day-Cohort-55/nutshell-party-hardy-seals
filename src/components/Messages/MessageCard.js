import react from "react";

export const MessageCard = ({message, handleDeleteMessage, loggedInUser}) => (
    <div className="card">
        <div className="card-content">
            <h5>{message.user.name}</h5>
            <div className="message-box">
                <p>{message.message}</p>
                {message.userId === loggedInUser.id ? <button type="button" className="btn btn-primary" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                    : ""}
            </div>
        </div>
    </div>
)