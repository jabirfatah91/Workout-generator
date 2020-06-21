import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Generator from "./Generator";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeKey: window.Location.pathname,
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar
            className="navbar navbar-dark bg-primary text-uppercase font-weight-bold"
            expand="lg"
          >
            <Navbar.Brand href="/">Workout Generator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" activeKey={this.state.activeKey}>
                <Nav.Link href="/" eventKey="/">
                  Home
                </Nav.Link>
                <Nav.Link href="/About" eventKey="/about">
                  About
                </Nav.Link>
                <Nav.Link href="/Generator" eventKey="/generator">
                  Generator
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/About" render={() => <About />} />
          <Route exact path="/Generator" render={() => <Generator />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
