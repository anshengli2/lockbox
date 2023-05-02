import React from "react";
import "../styles/theme.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const LoggedIn = () => {
  if (localStorage.getItem("user") === null) {
    return (
      <>
        <Link className="nav-link font mx-3" to="/Login">
          Login
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link className="nav-link font mx-3" to="/Login">
          Log Out
        </Link>
      </>
    );
  }
};
const CurrentUser = () => {
  if (localStorage.getItem("user") === null) {
    return (
      <>
        <Link className="nav-link font mx-3" to="/Register">
          Register
        </Link>
      </>
    );
  } else {
    return (
      <>
        <span className="fw-bold fs-3 font nav-link">
          {JSON.parse(localStorage.getItem("user")).username}
        </span>
      </>
    );
  }
};
const NavigationBar = (props) => {
  return (
    <header className="select-menu">
      <Navbar
        fixed="sticky"
        bg="dark"
        variant="dark"
        expand="lg"
        className="navbg">
        <Container fluid>
          <Link className="nav-link navbar-brand" to="/">
            <span className="fw-bold fs-3 font">LockBox</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navMenu"
            className="justify-content-end text-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                {localStorage.getItem("user") !== null && (
                  <>
                    <Link className="nav-link font mx-3" to="/Content">
                      <span className="fw-bold fs-3 font">Storage</span>
                    </Link>
                  </>
                )}
              </li>
              <li className="nav-item">
                <LoggedIn isLogin={props.isLogin} />
              </li>
              <li className="nav-item">
                <CurrentUser />
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
