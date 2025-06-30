import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillMail,
} from "react-icons/ai";
import { FaPhone, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kaustubh Pukale</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:kaustubhpukale3@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+919876543210"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kaustubh-pukale/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
