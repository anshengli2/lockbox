import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/theme.css";
import { useLocation, useNavigate } from "react-router-dom";
const FileInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [properties] = useState(location.state.info);
  console.log(properties);
  return (
    <Container className="bg-tertiary-color p-5 mt-5 mb-5 profile-content ">
      <h1 className="font fw-bold fs-1">
        Decrypt File: {properties.property.name.split(":")[1]}
      </h1>
      <Row className="g-2 mt-3">
        <Col xs={10} md={10}>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
        <Col xs={8} md={2} style={{ float: "left" }}>
          <Button variant="outline-dark" className="w-75 grow" size="lg">
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col xs={10} md={10}>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Col>
        <Col xs={8} md={2} style={{ float: "left" }}>
          <Button variant="outline-dark" className="w-75 grow" size="lg">
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FileInfo;
