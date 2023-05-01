import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/theme.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { gapi } from "gapi-script";
const DocumentCard = (props) => {
  const navigate = useNavigate();

  const deleteDocument = () => {
    const accessToken = gapi.auth.getToken().access_token;
    fetch(`https://www.googleapis.com/drive/v3/files/${props.property.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => console.log(response))
      // .then((data) => console.log(data))
      .catch((error) => console.error(error));
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
            onClick={deleteDocument}></i>
        </OverlayTrigger>
      </div>
    </Container>
  );
};

export default DocumentCard;
