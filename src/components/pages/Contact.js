import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Portfolio() {
  return (
    <div>
      <h2>Want to connect? Send me a message</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>What's your email?</Form.Label>
          <Form.Control type="email" placeholder="Your email here" />
        </Form.Group>
        <Form.Label>What's your name?</Form.Label>
        <Form.Control type="text" placeholder="Your name here" />
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>What are you thinking?</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Your message here"
            rows={3}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
