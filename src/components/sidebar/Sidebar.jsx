import { Apps, BookmarkBorder, Drafts, ExpandLess, FiberManualRecord, FileCopy, InsertComment, PeopleAlt, Inbox, ExpandMore, Add } from "@material-ui/icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarOption from './SideBarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);

    return (
        <div className="sideBarContainer">
            <div className="sideBarHeader">
                <div className="sideBarInfo">
                    <h2>Insert Group Name here</h2>
                    <h3>
                        <FiberManualRecord className="onlineIcon"/>
                        {user.displayName}
                    </h3>
                </div>
                <FontAwesomeIcon icon={faPencilAlt} className="sideBarHeader-createIcon"/>
            </div>
            <SideBarOption Icon={InsertComment} title="Threads" />
            <SideBarOption Icon={Inbox} title="Mentions & Reactions" />
            <SideBarOption Icon={Drafts} title="Saved items" />
            <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
            <SideBarOption Icon={PeopleAlt} title="People & user groups" />
            <SideBarOption Icon={Apps} title="Apps" />
            <SideBarOption Icon={FileCopy} title="File browser" />
            <SideBarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SideBarOption Icon={ExpandMore} title="Channels" />
            <hr />
            {/* The addChannelOption is a prop which is used for the onClick event and then adds functionality of adding a new channel to the preexisting ones. Still have to code it though. */}
            <SideBarOption Icon={Add} addChannelOption={true} title="Add Channel" />

            {channels?.docs.map(doc => (
                <SideBarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            ))}
        </div>
    )
}
export default Sidebar
