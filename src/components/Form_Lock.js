import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";

function Form_Lock() {
  return (
    <Container className='mt-5'>
        <Form.Text className="text-muted mb-3">
           Please enter the information to protect/store.
        </Form.Text>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Account Header</Form.Label>
          <Form.Control type="input" placeholder="Enter Account Name/Header" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="input" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Form_Lock;