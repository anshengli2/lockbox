import React from "react";
import { GoogleLogout } from "react-google-login";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";
function LogoutGoogle(props) {
  const navigate = useNavigate();
  const onLogoutSuccess = (res) => {
    localStorage.removeItem("user");
    props.setLogin(false);
    navigate("/Login");
  };
  return (
    <>
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        render={(renderProps) => (
          <Button
            variant="primary"
            className="btn btn-lg mt-2 btn-warning text-black grow font"
            style={{ width: "32rem" }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}>
            Log Out
          </Button>
        )}
        onLogoutSuccess={onLogoutSuccess}
      />
    </>
  );
}

export default LogoutGoogle;
