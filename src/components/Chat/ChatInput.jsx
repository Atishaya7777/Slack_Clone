import { Button } from "@material-ui/core";
import "./chatinput.css";
import { useState } from "react";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
    const [inputText, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault(); // Prevents refresh

        if (channelId) {
                db.collection('rooms').doc(channelId).collection('messages').add({
                    message: inputText,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userImage: user.photoURL
                });
        }

        
        chatRef.current.scrollIntoView({
            behavior: "smooth"
        })

        setInput('');
    }


    return (
        <div className="chatInputContainer">
            <form>
                <input value={inputText} placeholder={`Message #${channelName}`} onChange={e => setInput(e.target.value)} />
                <Button hidden type="submit" onClick={sendMessage} className="sendButton">
                    SEND
                </Button>
            </form>
        </div>
    )
}

export default ChatInput
