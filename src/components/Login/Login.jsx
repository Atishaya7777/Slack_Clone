import "./login.css";
import { Button } from "@material-ui/core";
import { provider, auth } from "../../firebase";

const Login = () => {
    function handleSignIn(e) {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }
    return (
        <div className="loginContainer">
            <div className="loginInnerContainer">
                <img
                    src='https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj'
                    alt="Image of the Slack Logo"
                    className="loginLogo"
                />
                <h1>Sign in to SLACKed!</h1>
                <p>https://slack-clone-yt-5d5e2.web.app</p>
                <Button onClick={handleSignIn} className="signInButton">Sign in with Google</Button>
            </div>
        </div>
    )
}
export default Login
