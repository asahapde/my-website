import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import './Home.css';
import image from '../../images/picture.jpg';
import { FaLinkedin, FaGithub, FaEnvelopeOpen } from 'react-icons/fa';

class Home extends Component {
    render() {
        return (
            <Container>
                <Image src={image} thumbnail className="m-5"/>
                <h3 className="m-3">Software Engineering student at Univeristy of Western Ontario</h3>
                <h4 className="m-3">Seeking for Summer 2021 Internships</h4>
                <h4 className="m-3">Available for 4-16 months</h4>
                <Row className="m-5">
                    <Col><a href="https://www.linkedin.com/in/abdullah-sahapdeen/" target="_blank"><FaLinkedin size="5em" className="iconLinked"/></a></Col>
                    <Col><a href="mailto:asahapde@gmail.com" target="_blank"><FaEnvelopeOpen size="5em" className="iconMail"/></a></Col>
                    <Col><a href="https://github.com/asahapde" target="_blank"><FaGithub size="5em" className="iconGithub"/></a></Col>
                </Row>
            </Container>
        )
    }
}

export default Home;