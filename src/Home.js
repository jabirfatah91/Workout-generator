import React from "react";
import { Jumbotron, Container, ButtonGroup, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Jumbotron
        className="Landing-page-home d-flex align-items-center min-vh-100"
        fluid
      >
        <Container className="text-center">
          <h1 style={{ fontSize: "4em", color: "white" }}>Turn Fat into FIT</h1>
          <h2 style={{ color: "white" }}>and Dare to be Great !</h2>
          <Button variant="primary" size="lg" href="/about" className="button">
            About
          </Button>
          <Button
            variant="primary"
            size="lg"
            href="/generator"
            className="button"
          >
            Generator
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
}
export default Home;
