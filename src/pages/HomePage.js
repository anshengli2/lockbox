import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/theme.css";
import { Col, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid className="mt-3">
      <div
        class=" font d-flex align-items-center justify-content-center"
        style={{ height: "25vh" }}>
        <p>
          <span
            className="d-flex justify-content-center"
            style={{ fontSize: "56px", fontWeight: "bolder" }}>
            Secure your information with&nbsp;
            <span style={{ textDecoration: "underline" }}> LockBox</span>
          </span>

          <br />
          <span
            className="d-flex justify-content-center text-muted"
            style={{ fontSize: "24px" }}>
            Share your private information with your friends and family with no
            worrries
          </span>
        </p>
      </div>
      <Row xs={1} md={2} xl={3} xxl={3} className="g-1 mt-3 bg-tertiary-color">
        <Col>
          <Container
            className="mb-5 mt-5 profile-content-primary shadows p-5 font text-tertiary "
            style={{
              height: "32rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <h1>Encrypt</h1>
            <p className="d-none d-xl-block">
              Encryption is a process of converting into a secret code to
              protect its confidentiality. It also plays a vital role in
              ensuring the security and privacy of sensitive data by using
              algorithms and mathematical computations to convert the original
              data to a format that is not readable, which can only be
              deciphered by a decryption key. In today’s day and age, this is
              very important because cyberattacks and data breaches are becoming
              more common.
            </p>
          </Container>
        </Col>
        <Col>
          <Container
            className="mb-5 mt-5 profile-content-primary shadows p-5 font text-tertiary "
            style={{
              height: "32rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <h1>Decrypt</h1>
            <p className="d-none d-xl-block">
              Also, playing a vital role in data security, decryption is the
              process of converting encrypted data back. Using the decryption
              key, you can get your file back in the original form. This is the
              opposite process of encryption so that they can read the original
              protected information. Thus, only authorized individuals can
              interpret the confidential information.
            </p>
          </Container>
        </Col>
        <Col>
          <Container
            className=" mt-5 profile-content-primary shadows p-5 font text-tertiary "
            style={{
              height: "32rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <h1>Share</h1>
            <p className="d-none d-xl-block">
              Through encryption and decryption you can share your files more
              securely because it has additional layer of security to protect
              sensitive files from unauthorized access. Through encryption, it
              converts files into an unreadable file and then decrypts them with
              a decryption key, so that individuals and organizations can safely
              share their files with important information.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
