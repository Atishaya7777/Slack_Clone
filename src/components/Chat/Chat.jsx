import "./chat.css"
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons"
import { useState, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from './../../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from "../../firebase";
import Messages from './Messages';


const Chat = () => {
    const chatRef = useRef(null);
    const [toggleStarredChat, setToggleStarredChat] = useState(false);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessage, loading] = useCollection(
        roomId &&
        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy("timestamp", "asc")
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, loading])

    return (
        <div className="chatContainer">
            {roomDetails && roomMessage && (
                <>
                    <div className="header">
                        <div className="headerLeft">
                            <h4><strong>#{roomDetails?.data().name}</strong></h4>
                            <StarBorderOutlined className="starChannelIcon" onClick={() => setToggleStarredChat(!toggleStarredChat)} style={{color:toggleStarredChat && "#EEBC1D"}}/> {/* Hex code for dark gold */}
                        </div>
                        <div className="headerRight">
                            <p>
                                <InfoOutlined className="headerRightHelpIcon"/> Details
                            </p>
                        </div>
                    </div>
                    <div className="chatMessages">
                        {roomMessage?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();
                            return (
                                <Messages
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            )
                        })}
                        <div className="chatBottom" ref={chatRef}>

                        </div>
                    </div>
                    <ChatInput
                        channelName={roomDetails?.data().name}
                        channelId={roomId}
                        chatRef={chatRef}
                    />
                </>
            )}
        </div>
    )
}

export default Chat
