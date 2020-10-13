import React, { Component } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Home.css";
import image from "../../images/picture.jpg";
import { FaLinkedin, FaGithub, FaEnvelopeOpen } from "react-icons/fa";

class Home extends Component {
  render() {
    return (
      <Container>
        <Image src={image} thumbnail className="m-5 image" />
        <h3 className="m-3">
          <strong>Software Engineering</strong> student at{" "}
          <strong className="uwo">University of Western Ontario</strong>
        </h3>
        <h4 className="m-3">Seeking Summer 2021 Internships</h4>
        <h5 className="m-3">
          <a
            href="https://drive.google.com/file/d/1sb80t1MkVx8ZQIFECEAOwEGCxQDSb7HF/view?usp=sharing"
            target="_blank"
            className="resume"
          >
            <strong>RESUME</strong>
          </a>
        </h5>
        <Row className="m-5">
          <Col>
            <a
              href="https://www.linkedin.com/in/abdullah-sahapdeen/"
              target="_blank"
            >
              <FaLinkedin size="5em" className="iconLinked" />
            </a>
          </Col>
          <Col>
            <a href="mailto:asahapde@gmail.com" target="_blank">
              <FaEnvelopeOpen size="5em" className="iconMail" />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/asahapde" target="_blank">
              <FaGithub size="5em" className="iconGithub" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
