import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="main-logo-row">
          <a href="/" className="main-logo">
          <img src="/images/soiree-society-logo-color.png" alt="Soiree Society in cursive in front of an arch backdrop decorated with flowers." className="justify-content-center flex-direction-column" />
          </a>
        </Row>
        <Row>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container className="nav-container">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="main-nav">
                  <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/team">Meet The Team</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/contact">Book Now</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
        <Wrapper />;
      </Container>
    );
  }
}

export default App;