import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  textAlign: "center",
  background: "gray",
  color: "white",
  width: "100%",
  marginTop: "1rem",
  padding: "1rem",
  bottom: "0",
  left: "0",
};

export default function Footer() {
  return (
    <div style={styles}>
      <Row>
        <p>
          2022 Fernando Vasquez
          <Button variant="warning" href="https://github.com/fvjr">
            GitHub
          </Button>
          <Button
            variant="warning"
            href="https://www.linkedin.com/in/fernando-vasquez-977ba2223/"
          >
            LinkedIn
          </Button>
          <Button
            variant="warning"
            href="https://stackoverflow.com/users/17353064/fvjr"
          >
            stackoverflow
          </Button>
        </p>
      </Row>
    </div>
  );
}
