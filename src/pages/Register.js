import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";
const Register = () => {
  const [inputFields, setInputFields] = useState({
    id: "",
    username: "",
    pwd: "",
  });

  const updateData = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(inputFields),
    // };
    // fetch("http://localhost:3000/register", requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => {})
    //   .catch(console.log);
    navigate("/");
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
                name="pwd"
                type="password"
                onChange={updateData}
              />
            </Col>
          </Row>
        </Form.Group>
        <hr />
        <div className="d-flex justify-content-center mb-5">
          <Button
            size="lg"
            variant="warning"
            onClick={handleSubmit}
            className="grow w-25">
            <span className="font fw-bold">Submit</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
