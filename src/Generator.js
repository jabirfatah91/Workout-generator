import React from "react";
import {
  Jumbotron,
  Container,
  Form,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";
import { Formik } from "formik";
//import List from "react-bootstrap/List";
import * as Yup from "yup";

import exercises from "./exercises";

const schema = Yup.object({
  time: Yup.number(),
});

class Generator extends React.Component {
  constructor() {
    super();
    this.state = {
      formSubmitted: false,
      currentWorkout: {},
    };
  }

  handleSubmit(values) {
    const absArr = exercises.filter((a) => a.type === "abs");
    const chestArr = exercises.filter((a) => a.type === "chest");
    const cardioArr = exercises.filter((a) => a.type === "cardio");
    const legsArr = exercises.filter((a) => a.type === "legs");

    const absWorkout = absArr[Math.floor(Math.random() * absArr.length)];
    const chestWorkout = chestArr[Math.floor(Math.random() * chestArr.length)];
    const cardioWorkout =
      cardioArr[Math.floor(Math.random() * cardioArr.length)];
    const legsWorkout = legsArr[Math.floor(Math.random() * legsArr.length)];
    const rounds = values.time / 5;

    const currentWorkout = {
      rounds: rounds,

      absName: absWorkout["name"],
      absReps: absWorkout["reps"],

      chestName: chestWorkout["name"],
      chestReps: chestWorkout["reps"],

      cardioName: cardioWorkout["name"],
      cardioReps: cardioWorkout["reps"],

      legsName: legsWorkout["name"],
      legsReps: legsWorkout["reps"],
    };
    this.setState({
      currentWorkout: currentWorkout,
      formSubmitted: true,
    });
  }
  render() {
    return (
      <div>
        <Jumbotron
          className="Landing-page-generator d-flex align-items-center min-vh-100"
          fluid
        >
          <Container className="text-center">
            <Formik
              validateSchema={schema}
              onSubmit={this.handleSubmit.bind(this)}
              initialValues={{
                time: 15,
              }}
            >
              {({ handleSubmit, handleChange, values }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col
                      md={{ offset: 4, span: 4 }}
                      lg={{ offset: 4, span: 4 }}
                      xl={{ offset: 4, span: 4 }}
                    >
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                          How long would you like to workout?
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="time"
                          value={values.time}
                          onChange={handleChange}
                        >
                          <option>15</option>
                          <option>25</option>
                          <option>35</option>
                          <option>45</option>
                          <option>55</option>
                          <option>65</option>
                          <option>75</option>
                          <option>85</option>
                          <option>95</option>
                          <option>110</option>
                          <option>115</option>
                          <option>130</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button type="submit">Generate Workout</Button>
                </Form>
              )}
            </Formik>
            <br />
            {this.state.formSubmitted ? (
              <div>
                <Row>
                  <Col
                    sm={{ offset: 4, span: 4 }}
                    lg={{ offset: 4, span: 4 }}
                    xl={{ offset: 4, span: 4 }}
                  >
                    <Card>
                      <Card.Header>
                        {this.state.currentWorkout.rounds} Rounds of:
                      </Card.Header>
                      <ListGroup>
                        <ListGroup.Item>
                          {this.state.currentWorkout.absReps}{" "}
                          {this.state.currentWorkout.absName}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {this.state.currentWorkout.chestReps}{" "}
                          {this.state.currentWorkout.chestName}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {this.state.currentWorkout.cardioReps}{" "}
                          {this.state.currentWorkout.cardioName}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {this.state.currentWorkout.legsReps}{" "}
                          {this.state.currentWorkout.legsName}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
              </div>
            ) : null}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default Generator;
