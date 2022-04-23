import React from "react";
import Profilepic from "../../Assets/Profilepic.png";
import Container from "react-bootstrap/Container";

export default function AboutMe() {
  return (
    <div>
      <Container>
        <p>
          Hi! I'm Fernando Vasquez. I'm a full-stack developer (in training)
          with an interest in developing full-stack applications that help users
          solve everyday problems.
        </p>
        <img src={Profilepic} alt="pic of me"></img>
      </Container>
    </div>
  );
}
