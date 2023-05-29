import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Wrapper.css";

class Wrapper extends Component {
  state = {   // this.state.clickycards = the clickycards json array
   clicked: []
  }

  render () {
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <p>Coming soon</p>
            <p>Boutique event rental and design company serving Charlotte, NC and surrounding areas.</p>
          </Col>
          <Col lg={6}>
            <img src="/images/backyard-blurred-background.png" />
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Wrapper;