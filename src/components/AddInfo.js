import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { gapi } from "gapi-script";
import React, { useState, useEffect } from "react";
import "../styles/theme.css";

function AddInfo(props) {
  const [inputFields, setInputFields] = useState({
    header: "",
    username: "",
    password: "",
  });
  const updateData = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };
  const [privateKey, setPrivateKey] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      var key = JSON.parse(localStorage.getItem("user")).key;
      fetch(`/.netlify/functions/generatePrivKey?input=${key}`)
        .then((response) => response.text())
        .then((data) => setPrivateKey(JSON.parse(data).data));
    }
  }, []);
  const [isUploading, setIsUploading] = useState(false);
  const createFile = async () => {
    setIsUploading(true);
    try {
      var accessToken = gapi.auth.getToken().access_token;
      const response = await fetch("https://docs.googleapis.com/v1/documents", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `LockBox:${inputFields.header}`,
        }),
      });
      const encrypt_username = await fetch(
        `/.netlify/functions/encrypt?key=${privateKey}&header=${inputFields.header}&dataVal=${inputFields.username}`
      );
      const encrypted_username = await encrypt_username.json();

      const encrypt_password = await fetch(
        `/.netlify/functions/encrypt?key=${privateKey}&header=${inputFields.header}&dataVal=${inputFields.password}`
      );
      const encrypted_password = await encrypt_password.json();

      const { documentId } = await response.json();

      await fetch(
        `https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requests: [
              {
                insertText: {
                  text: `${JSON.stringify(
                    encrypted_username
                  )}\n${JSON.stringify(encrypted_password)}`,
                  endOfSegmentLocation: {},
                },
              },
            ],
          }),
        }
      ).then((res) => {
        setInputFields({
          header: "",
          username: "",
          password: "",
        });
        props.setSubmit(props.submit + 1);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Container className="mt-5 profile-content mb-5 p-5 font">
      <Form.Text className="text-muted mb-3" style={{ fontSize: "1.2rem" }}>
        Please enter the information to protect/store.
      </Form.Text>
      <Form>
        <Form.Group className="mb-3" controlId="header">
          <Form.Label>Account Header</Form.Label>
          <Form.Control
            type="input"
            placeholder="UTD"
            name="header"
            onChange={updateData}
            value={inputFields.header}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="input"
            placeholder="bob170005"
            name="username"
            onChange={updateData}
            value={inputFields.username}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password123"
            name="password"
            onChange={updateData}
            value={inputFields.password}
          />
        </Form.Group>
        <Container className="d-flex mt-3 justify-content-center">
          <Button
            size="md"
            variant="primary"
            className="grow w-25 "
            onClick={createFile}>
            {isUploading ? (
              <span className="font fw-bold">Uploading...</span>
            ) : (
              <span className="font fw-bold">Submit</span>
            )}
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default AddInfo;
