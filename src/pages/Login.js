import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
  });
  const updateData = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: inputFields["email"],
    //     password: inputFields["password"],
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {})
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    props.setUser(inputFields.username);
    navigate("/");
  };
  const handleLogOut = () => {
    // fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: inputFields["email"],
    //     password: inputFields["password"],
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {})
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    props.setUser("");
    navigate("/");
  };
  if (props.user === "") {
    return (
      <Container
        className="w-25 profile-content mt-5"
        style={{ minWidth: "28rem" }}>
        <Form className="p-5">
          <Form.Group>
            <Row className="mt-2">
              <Form.Control
                placeholder="Username"
                name="username"
                onChange={updateData}
              />
            </Row>
            <Row className="mt-2">
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                onChange={updateData}
              />
            </Row>
            <Container className="d-flex mt-3 justify-content-center">
              <Button onClick={handleSubmit} className="btn btn-lg grow">
                <span className="font fw-bold">Login</span>
              </Button>
            </Container>
          </Form.Group>
        </Form>
      </Container>
    );
  } else {
    return (
      <Container className="d-flex mt-3 justify-content-center">
        <Button onClick={handleLogOut} className="btn btn-lg grow">
          <span className="font fw-bold">Log out</span>
        </Button>
      </Container>
    );
  }
};

export default Login;
