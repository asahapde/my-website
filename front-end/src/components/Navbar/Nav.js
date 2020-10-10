import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

class NavComponent extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">
                <Link to='/'>
                    <Navbar.Brand href="#home">Abdullah Sahapdeen</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/about'>
                            <Nav.Link href="#about">About Me</Nav.Link>
                        </Link>
                        <Link to='/experience'>
                            <Nav.Link href="#about">Experience</Nav.Link>
                        </Link>
                        <Link to='/project'>
                            <Nav.Link href="#about">Project</Nav.Link>
                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavComponent;