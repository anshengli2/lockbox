import React, { useState } from "react";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import "../styles/theme.css";
import { useLocation } from "react-router-dom";
import ShamirKeys from "../components/ShamirKeys";
const Shamir = () => {
  const location = useLocation();
  const [properties] = useState(location.state.info);
  return (
    <Container className="d-flex mt-3 justify-content-center">
      <ShamirKeys properties={properties} />
    </Container>
  );
};

export default Shamir;
