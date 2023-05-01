import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/theme.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const DocumentCard = (props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    props.delete(props.info.id);
  };
  const handleClick = useCallback(
    () =>
      navigate(
        "/FileInfo",
        { state: { info: { property: props.property } } },
        { replace: true }
      ),
    [navigate]
  );
  return (
    <Container>
      <div
        className="card-list mb-2 grow profile-content-primary"
        style={{ height: "6rem" }}>
        <p
          className="centered font text-shadow ps-5 edit-link"
          style={{ color: "white" }}
          onClick={handleClick}>
          {props.property.name}
        </p>
        <OverlayTrigger placement="right" overlay={<Tooltip>Remove</Tooltip>}>
          <i
            className="edit-link bi bi-trash btn-centered fs-2"
            style={{ color: "white" }}
            onClick={handleSubmit}></i>
        </OverlayTrigger>
      </div>
    </Container>
  );
};

export default DocumentCard;
