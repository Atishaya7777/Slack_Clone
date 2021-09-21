import { db } from "../../firebase";
import "./sidebaroption.css";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";


const SideBarOption = ({ Icon, title, addChannelOption, id }) => {
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name: ");

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
     };
    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }));
        }
    };

    return (
        <div className="sideBarOption-Container" onClick={addChannelOption ? addChannel : selectChannel }>
            {Icon && <Icon fontSize="small" style={{ padding: "10px" }} />}
            {Icon ? (
                <h3 className="sideBarOption-Header">{title}</h3>
            ) : (
                <div className="sideBarOption-Channel">
                    <span>#</span> <p>{title}</p>
                </div>
            )}
            
        </div>
    )
}

export default SideBarOption
