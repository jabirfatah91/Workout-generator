import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Generator = () => (
  <div>
    <Jumbotron
      className="Landing-page d-flex align-items-center min-vh-100"
      fluid
    >
      <Container className="text-center">
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
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
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                    <option>35</option>
                    <option>40</option>
                    <option>45</option>
                    <option>50</option>
                    <option>55</option>
                    <option>60</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Generate Workout</Button>
          </Form>
          )}
        </Formik>
      </Container>
    </Jumbotron>
  </div>
);

export default Generator;
