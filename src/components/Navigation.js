import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import FVResume from "../Assets/FVResume.pdf";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="#aboutme"
          onClick={() => handlePageChange("AboutMe")}
        >
          Fernando Vasquez
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#aboutme" onClick={() => handlePageChange("AboutMe")}>
            About Me
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </Nav.Link>
          <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
