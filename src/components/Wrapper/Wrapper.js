import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";
import "./Wrapper.css";

class Wrapper extends Component {
  state = {
   clicked: []
  }

  render () {
    return (
      <Container>
        <Row>
          <Col className="top-banner">
            <div className="left-teardrop">
              <img src="/images/teardrop.png" alt="A teardrop shape facing left."/>
            </div>
            <p>Coming soon</p>
            <div className="right-teardrop">
              <img src="/images/teardrop.png" alt="A teardrop shape facing right."/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="logo-wrapper justify-content-center">
            <img src="/images/soiree-society-logo-color.png" alt="Soiree Society logo in cursive in front of an arch backdrop decorated with flowers." />
          </Col>
        </Row>
        <Row>
          <Col className="logo-subtext-wrapper justify-content-center flex-direction-column">
            <p className="logo-subtext-main display-flex justify-content-center">BOUTIQUE PARTY & EVENT DESIGN</p>
            <p className="logo-subtext-secondary display-flex justify-content-center">SERVING CHARLOTTE NC AND SURROUNDING AREAS</p>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Wrapper;