import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";
const Register = () => {
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
  });
  const [privateKey, setPrivateKey] = useState("");
  const [data, setData] = useState(null);
  const updateData = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    fetch(`/.netlify/functions/generatePrivKey?input=${inputFields.password}`)
      .then((response) => response.text())
      .then((data) => setPrivateKey(JSON.parse(data).data));
  };

  const handleSubmit = () => {
    fetch(
      `/.netlify/functions/createUser?username=${inputFields.username}&password=${inputFields.password}&privatekey=${privateKey}`
    )
      .then((response) => response.text())
      .then((data) => setData(data));
    console.log(inputFields.username, inputFields.password, privateKey);
    // navigate("/Login");
  };
  return (
    <Container className="mt-5">
      <div className="m-3 fw-bold d-flex justify-content-center">
        <span className="font fs-1">Enter your details</span>
      </div>
      <hr />
      <Form className="ps-5 pe-5">
        <Form.Group className="mb-3">
          <Row className="mt-2">
            <Col>
              <Form.Control
                placeholder="Username"
                name="username"
                onChange={updateData}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                onChange={updateData}
              />
            </Col>
          </Row>
        </Form.Group>
        <hr />
        <div className="d-flex justify-content-center mb-5">
          {(!privateKey && (
            <Button
              size="lg"
              variant="warning"
              onClick={handleContinue}
              className="grow w-25">
              <span className="font fw-bold">Continue</span>
            </Button>
          )) ||
            (privateKey && (
              <Button
                size="lg"
                variant="warning"
                onClick={handleSubmit}
                className="grow w-25">
                <span className="font fw-bold">{privateKey}</span>
              </Button>
            ))}
        </div>
      </Form>
    </Container>
  );
};

export default Register;
