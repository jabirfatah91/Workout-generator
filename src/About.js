import React from "react";
import {
  Jumbotron,
  ButtonGroup,
  Button,
  Container,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";

function About() {
  return (
    <div>
      <Jumbotron
        className="Landing-page-about d-flex align-items-center min-vh-100"
        fluid
      >
        <Container className="text-center" fluid>
          <h1 style={{ fontSize: "4em", color: "white" }}>
            Everyone Needs a Tune-up
          </h1>
          <h2 style={{ color: "white" }}>and Don't Stop till You Drop !</h2>

          <Row>
            <Col
              md={{ offset: 2, span: 8 }}
              lg={{ offset: 2, span: 8 }}
              xl={{ offset: 2, span: 8 }}
            >
              <ListGroup>
                <ListGroup.Item variant="info">
                  <h3>How to Use My Workout Generator?</h3>
                </ListGroup.Item>
                <ListGroup.Item variant="">
                  Go to the Generator page. The form in the page allows you to select the duration in minutes. Once you 
                  submit the button "Generate Workout", you will see the workout suggestion that it has to offer.
      
                  For example, if you choose 15 minutes to workout from the drop-down, the
                  program generates an autodecision of how many differen types
                  of exercises you can carry out within the time frame, as well
                  as the number of reps of each exercise type.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
export default About;
