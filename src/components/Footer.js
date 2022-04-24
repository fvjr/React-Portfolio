import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const styles = {
  textAlign: "center",
  background: "gray",
  color: "white",
  width: "100%",
  marginTop: "2rem",
  padding: "2rem",
  position: "fixed",
  bottom: "0",
  left: "0",
};

export default function Footer() {
  return (
    <div>
      <p style={styles}>
        2022 Fernando Vasquez{" "}
        <Button variant="warning" href="https://github.com/fvjr">
          GitHub
        </Button>
        <Button
          variant="warning"
          href="https://www.linkedin.com/in/fernando-vasquez-977ba2223/"
        >
          LinkedIn
        </Button>
      </p>
    </div>
  );
}
