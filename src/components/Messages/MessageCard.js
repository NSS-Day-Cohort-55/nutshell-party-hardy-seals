import react from "react";
import { Link } from "react-router-dom";

export const MessageCard = ({message, handleDeleteMessage, loggedInUser}) => (
    <div className="card">
        <div className="card-content">
            <h5>{message.user.name}</h5>
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
)