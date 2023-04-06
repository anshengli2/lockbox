import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/theme.css";
function NavigationBar() {
  return (
    <>
      <Navbar variant="dark" fixed="sticky" className="navbg">
        <Container>
          <Navbar.Brand href="/" className="font fs-1 fw-bold">
            LockBox
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
