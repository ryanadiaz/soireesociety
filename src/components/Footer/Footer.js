import React, { Component } from 'react';
import "./Footer.css";
import { Col, Row, Container } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="footer-wrapper">
              <a href="https://www.instagram.com/soireesocietyclt/" target="_blank" rel="noreferrer"><img src="/images/icons/instagram.png" alt="Instagram" /></a>
              <p className="copyright">&copy; Copyright 2023 Soiree Society</p>
            </Col>
          </Row>
          </Container>
      </footer>
    );
  }
}

export default Footer;