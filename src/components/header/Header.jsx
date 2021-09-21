import { Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import "./header.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase";

const Header = () => {
    const [user] = useAuthState(auth);

    console.log(user);

    const [toggleHeaderSearch, setToggleHeaderSearch] = useState(false);
    return (
        <div className="header-container">
            <div className="header-left">
                <Avatar className="header-avatar"
                    src={user?.photoURL}
                    alt={user?.displayName}
                    onClick={() => auth.signOut()}
                />
                <FontAwesomeIcon icon={faClock} className="header-left-clock-icon"/>
            </div>

            {/* header search */}
            <div className="header-search">
                <Search />
                <input placeholder={!toggleHeaderSearch && "Search anything..."} onFocus={() => setToggleHeaderSearch(true)} onBlur={() => setToggleHeaderSearch(false)} />
            </div>
            
            {/* header right */}
            <div className="header-right">
                <FontAwesomeIcon icon={faQuestion} className="header-right-help-icon" />
            </div>
        </div>
    )
}

export default Header;