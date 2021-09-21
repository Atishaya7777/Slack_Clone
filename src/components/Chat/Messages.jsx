import "./messages.css";

const Messages = ({ key, message, timestamp, user, userImage }) => {
    return (
        <div className="messageContainer">
            {
                userImage ?
                    <img src={userImage} alt="Profile picture of sender" className="profilePic" />
                    :
                    <div className="noProfilePic"><p className="profilePicText">{user[0].toUpperCase()}</p></div>
            }
            <div className="messageInfo">
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message && message}</p>
            </div>
        </div>
    )
}

export default Messages
