import { useState, useEffect } from "react";
import { Button, Container, Form, Row, Card, Col } from "react-bootstrap";
import { gapi } from "gapi-script";
import "../styles/theme.css";
const ShamirKeys = (props) => {
  const [document, setDocument] = useState({});
  const [isUploading, setIsUploading] = useState(false);

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
            fetch(
              ` https://docs.googleapis.com/v1/documents/${props.properties.property.id}?fields=body/content`,
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
          }
        });
    }
    gapi.load("client:auth2", start);
  }, []);

  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [shamirKeys, setShamirKeys] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with key1 and key2
  };
  const DecryptKey = () => {
    setIsUploading(true);
    fetch(`/.netlify/functions/shamirPrivKey?key1=${key1}&key2=${key2}`)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        }
      })
      .then((data) => {
        setShamirKeys(JSON.parse(data).data);
        setMessage("Generated shamir key. Ready for decryption >:)");
        setKey1("");
        setKey2("");
      })
      .catch((error) => setMessage("Wrong shamir keys >:("))
      .finally(() => setIsUploading(false));
  };
  const [username, setUsername] = useState("");
  const Decrypt_Username = async () => {
    try {
      var info = JSON.parse(document.username);
      const decrypt_line = await fetch(
        `/.netlify/functions/decrypt?key=${shamirKeys}&nonce=${info.nonce}&header=${info.header}&ciphertext=${info.ciphertext}&tag=${info.tag}`
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
        `/.netlify/functions/decrypt?key=${shamirKeys}&nonce=${info.nonce}&header=${info.header}&ciphertext=${info.ciphertext}&tag=${info.tag}`
      );
      const decrypted_value = await decrypt_line.json();
      setPassword(decrypted_value.message_decoded);
    } catch (error) {
      console.error(error);
    }
  };
  if (shamirKeys !== "") {
    return (
      <Container className="bg-tertiary-color p-5 mt-5 mb-5 profile-content font">
        <h1 className="font fw-bold fs-1 mb-2">
          Decrypt Shared File: {props.properties.property.name.split(":")[1]}
        </h1>
        <p className="fs-2 mt-3">{message}</p>
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
      </Container>
    );
  } else {
    return (
      <Container className="bg-tertiary-color p-5 mt-5 mb-5 profile-content font">
        <h1 className="font fw-bold fs-1 mb-2">
          Decrypt Shared File: {props.properties.property.name.split(":")[1]}
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formKey1" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter key 1"
              value={key1}
              onChange={(e) => setKey1(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formKey2" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter key 2"
              value={key2}
              onChange={(e) => setKey2(e.target.value)}
            />
          </Form.Group>

          <Container className="d-flex mt-3 justify-content-center">
            <Button
              size="md"
              variant="primary"
              className="grow w-25 "
              onClick={DecryptKey}>
              {isUploading ? (
                <span className="font fw-bold">Generating...</span>
              ) : (
                <span className="font fw-bold">Submit</span>
              )}
            </Button>
          </Container>
        </Form>
        <p className="text-center fs-2 mt-3">{message}</p>
      </Container>
    );
  }
};

export default ShamirKeys;
