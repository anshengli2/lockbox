import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import { Row, Container } from "react-bootstrap";
import "../styles/theme.css";
import DocumentCard from "./DocumentCard";
const DisplayFiles = (props) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SCOPES = "https://www.googleapis.com/auth/drive";
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
        })
        .then(() => {
          if (localStorage.getItem("user") !== null) {
            var accessToken = gapi.auth.getToken().access_token;

            fetch("https://www.googleapis.com/drive/v3/files", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.text())
              .then((data) => JSON.parse(data).files)
              .then((filterData) => {
                setFiles(
                  filterData.filter((file) => file.name.includes("LockBox:"))
                );
              });
          }
        });
    }
    gapi.load("client:auth2", start);
  }, [props.submit]);
  return (
    <Container>
      <h1 className="font fw-bold fs-1">Encrypted Files</h1>
      <Row xs={1} md={1} xxl={1}>
        {files.map((p) => (
          <DocumentCard key={p.id} property={p} setSubmit={props.setSubmit} />
        ))}
      </Row>
    </Container>
  );
};

export default DisplayFiles;
