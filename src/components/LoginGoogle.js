import React from "react";
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = "754134333513-v8coo7359ds6v333nf0s9n38j0c16quq.apps.googleusercontent.com"

function LoginGoogle() {
    const onSuccess = (res) => {
        console.log("Login successful, Current user: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login failed ", res);
    }
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Continue"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default LoginGoogle;