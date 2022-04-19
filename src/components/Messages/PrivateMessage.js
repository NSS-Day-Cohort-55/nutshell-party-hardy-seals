


const GetPrivateMessage = () => {
    const loggedInUser = JSON.parse(sessionStorage.nutshell_user)


    
    return (
        <form className="messageForm">
			<h3 className="messageForm__title">Send a Private Message</h3>
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
				Send Message
          </button>
		</form>
    )
}