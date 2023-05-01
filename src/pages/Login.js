import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import LoginGoogle from "../components/LoginGoogle";
import LogoutGoogle from "../components/LogoutGoogle";
import "../styles/theme.css";
const Login = (props) => {
  const [inputFields, setInputFields] = useState({
    username: "",
    key: "",
  });
  const updateData = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  if (localStorage.getItem("user") === null) {
    return (
      <Container
        className="w-25 profile-content mt-5"
        style={{ minWidth: "28rem" }}>
        <Form className="p-5">
          <Form.Group>
            <Row>
              <Container className="d-flex justify-content-center">
                <span className="font" style={{ fontSize: "2rem" }}>
                  Login
                </span>
              </Container>
            </Row>
            <Row className="mt-2">
              <Form.Control
                placeholder="Username"
                name="username"
                onChange={updateData}
              />
            </Row>
            <Container className="d-flex mt-3 justify-content-center">
              <LoginGoogle
                inputFields={inputFields}
                setInputFields={setInputFields}
                setLogin={props.setLogin}
              />
            </Container>
          </Form.Group>
        </Form>
      </Container>
    );
  } else {
    return (
      <Container className="d-flex mt-3 justify-content-center">
        <LogoutGoogle setLogin={props.setLogin} />
      </Container>
    );
  }
};

export default Login;
