import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { gapi } from "gapi-script";

function ShareDocument(props) {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  async function shareFileByEmail(email) {
    setResponse("");
    // First, retrieve the file metadata to get the current permissions.
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${props.id}?fields=permissions`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${gapi.auth.getToken().access_token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve file metadata: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    const currentPermissions = data.permissions;

    // Check if the email address already has access.
    const existingPermission = currentPermissions.find(
      (permission) => permission.emailAddress === email
    );
    if (existingPermission) {
      setResponse(
        `The email address '${email}' already has access to the file.`
      );
      return;
    }

    // If the email address doesn't have access, add a new permission for it.
    const newPermission = {
      role: "reader", // Change this to the desired access level (e.g. reader, writer, owner).
      type: "user",
      emailAddress: email,
    };

    const addPermissionResponse = await fetch(
      `https://www.googleapis.com/drive/v3/files/${props.id}/permissions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${gapi.auth.getToken().access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPermission),
      }
    );

    if (!addPermissionResponse.ok) {
      throw new Error(
        `Failed to add new permission: ${addPermissionResponse.status} ${addPermissionResponse.statusText}`
      );
    }
    setResponse(
      `The email address '${email}' has been given read access to the file.`
    );
  }
  const handleShareDocument = () => {
    shareFileByEmail(email);
    setEmail("");
  };

  return (
    <Container className="font">
      <h3>Share a Google document</h3>
      <Form.Group controlId="formEmail">
        <Form.Control
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>
      <Button className="mt-3" onClick={handleShareDocument}>
        Share Document
      </Button>
      <p className="font">{response}</p>
    </Container>
  );
}

export default ShareDocument;
