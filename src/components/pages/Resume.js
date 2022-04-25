import React from "react";
import Container from "react-bootstrap/Container";
import FVResume from "../../Assets/FVResume.pdf";
import Button from "react-bootstrap/Button";

const styles = {
  fontSize: "24px",
  textAlign: "center",
  background: "gray",
};

export default function Resume() {
  return (
    <div style={styles}>
      <Container>
        <p>
          I'm currently in the Penn LPS full-stack Web Developer bootcamp
          provided by Trilogy Education Services.
        </p>
        <p>
          I look forward to utilizing the skills that I have been developing to
          help build full-stack applications, with a focus in Back-end.
        </p>
        <p>
          My experience and skills include: ReactJS, JavaScript(ES6+), CSS,
          HTML5, Bootstrap, Node, MySQL, NoSQL, Express, and more.
        </p>
        <p>
          Download my resume
          <Button variant="warning" href={FVResume} download={true}>
            here.
          </Button>
        </p>
      </Container>
    </div>
  );
}
