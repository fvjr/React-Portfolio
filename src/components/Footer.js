import React from "react";
import Navbar from "react-bootstrap/Navbar";

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
      <p style={styles}>FOOTER - 2022 Fernando Vasquez - fvjr</p>
    </div>
  );
}
