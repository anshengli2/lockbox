import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function AddInfo() {
  const handleSubmit = () => {};
  return (
    <Container className="mt-5 profile-content mb-5 p-5 font">
      <Form.Text className="text-muted mb-3" style={{ fontSize: "1.2rem" }}>
        Please enter the information to protect/store.
      </Form.Text>
      <Form>
        <Form.Group className="mb-3" controlId="header">
          <Form.Label>Account Header</Form.Label>
          <Form.Control type="input" placeholder="UTD" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="input" placeholder="bob170005" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password123" />
        </Form.Group>
        <Container className="d-flex mt-3 justify-content-center">
          <Button
            size="md"
            variant="primary"
            className="grow w-25 "
            onClick={handleSubmit}>
            <span className="font fw-bold">Submit</span>
          </Button>
        </Container>
      </Form>
    </Container>
  );
}

export default AddInfo;
