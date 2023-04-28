import React from "react";
import "../styles/theme.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const LoggedIn = (props) => {
  if (props.user === "") {
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
const CurrentUser = (props) => {
  if (props.user === "") {
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
        <span className="fw-bold fs-3 font nav-link">{props.user}</span>
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
                <LoggedIn user={props.user} />
              </li>
              <li className="nav-item">
                <CurrentUser user={props.user} />
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
