import React from "react";
import GoogleLogin from "react-google-login";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";
function LoginGoogle(props) {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: props.inputFields.username,
        key: res.profileObj.googleId,
      })
    );
    console.log(localStorage.getItem("user"));
    props.setLogin(true);
    navigate("/Content");
  };
  const onFailure = (res) => console.log(res, ": Login failure");
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        render={(renderProps) => (
          <Button
            variant="primary"
            className="btn btn-lg mt-2 btn-warning text-black grow font"
            style={{ width: "32rem" }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}>
            Continue
          </Button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
}

export default LoginGoogle;
