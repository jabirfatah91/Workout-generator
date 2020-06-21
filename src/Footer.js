import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter className="font-medium unique-color-dark pt-4 mt-4">
      <MDBContainer fluid>
        <MDBRow className="text-center">
          <MDBCol md="4" style={{ textAlign: "left", alignSelf: "stretch" }}>
            <h5>About the Workout Generator</h5>
            <p>
              This application offers you a rational decision based on the
              duration of exercise you select from the list.
            </p>
          </MDBCol>

          
          <MDBCol md="4">
            <h5 className="title">Contact Me</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">jabirfatah91@yahoo.com</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Follow Me</h5>
            <ul>
              <li className="list-unstyled">
                <Button variant="primary" size="sm" href="/" className="button">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> Workout Generator </a>
          <p>
            Designed and Developed by <a href="#">Jabir Fatah</a>
          </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;
