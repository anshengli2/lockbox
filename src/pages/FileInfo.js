import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../styles/theme.css";
import { useLocation } from "react-router-dom";
import { gapi } from "gapi-script";
import ShareDocument from "../components/ShareDocument";
const FileInfo = () => {
  const location = useLocation();
  const [privateKey, setPrivateKey] = useState("");
  const [properties] = useState(location.state.info);
  const [document, setDocument] = useState({});
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const SCOPES = "https://www.googleapis.com/auth/drive";
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      var key = JSON.parse(localStorage.getItem("user")).key;
      fetch(`/.netlify/functions/generatePrivKey?input=${key}`)
        .then((response) => response.text())
        .then((data) => setPrivateKey(JSON.parse(data).data));
    }
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
            fetch(
              ` https://docs.googleapis.com/v1/documents/${properties.property.id}?fields=body/content`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  "Content-Type": "application/json",
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                setDocument({
                  username:
                    data.body.content[1].paragraph.elements[0].textRun.content,
                  password:
                    data.body.content[2].paragraph.elements[0].textRun.content,
                });
              });
            // try {
            //   fetch(
            //     ` https://www.googleapis.com/drive/v3/files/${properties.property.id}/permissions`,
            //     {
            //       method: "GET",
            //       headers: {
            //         Authorization: `Bearer ${accessToken}`,
            //         "Content-Type": "application/json",
            //       },
            //     }
            //   );
            // } catch (error) {
            //   console.log(error);
            // }
          }
        });
    }
    gapi.load("client:auth2", start);
  }, []);
  const [username, setUsername] = useState("");
  const Decrypt_Username = async () => {
    try {
      var info = JSON.parse(document.username);
      const decrypt_line = await fetch(
        `/.netlify/functions/decrypt?key=${privateKey}&nonce=${info.nonce}&header=${info.header}&ciphertext=${info.ciphertext}&tag=${info.tag}`
      );
      const decrypted_value = await decrypt_line.json();
      setUsername(decrypted_value.message_decoded);
    } catch (error) {
      console.error(error);
    }
  };
  const [password, setPassword] = useState("");
  const Decrypt_Password = async () => {
    try {
      var info = JSON.parse(document.password);
      const decrypt_line = await fetch(
        `/.netlify/functions/decrypt?key=${privateKey}&nonce=${info.nonce}&header=${info.header}&ciphertext=${info.ciphertext}&tag=${info.tag}`
      );
      const decrypted_value = await decrypt_line.json();
      console.log(decrypted_value);
      setPassword(decrypted_value.message_decoded);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container className="bg-tertiary-color p-5 mt-5 mb-5 profile-content ">
      <h1 className="font fw-bold fs-1">
        Decrypt File: {properties.property.name.split(":")[1]}
      </h1>
      <Row className="g-2 mt-3">
        <Col xs={10} md={10}>
          <Card>
            <Card.Body>
              {username === "" ? "Click to reveal username" : username}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={8} md={2} style={{ float: "left" }}>
          <Button
            variant="primary"
            className="btn btn-lg mt-2 btn-warning text-black grow font"
            size="lg"
            onClick={Decrypt_Username}>
            Decrypt
          </Button>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col xs={10} md={10}>
          <Card>
            <Card.Body>
              {password === "" ? "Click to reveal password" : password}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={8} md={2} style={{ float: "left" }}>
          <Button
            variant="primary"
            className="btn btn-lg mt-2 btn-warning text-black grow font"
            size="lg"
            onClick={Decrypt_Password}>
            Decrypt
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <ShareDocument id={properties.property.id} />
      </Row>
    </Container>
  );
};

export default FileInfo;
