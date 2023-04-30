import React from "react";
import GoogleLogin from "react-google-login";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function LoginGoogle(props) {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log(res, ": Login successful, Current user: ", res.profileObj);
    localStorage.setItem("user", props.inputFields.username);
    props.setLogin(true);
    navigate("/");
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
