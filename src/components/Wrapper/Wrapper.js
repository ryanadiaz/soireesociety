import React, {Component} from "react";
import $ from 'jquery';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Wrapper.css";
import Portfolio from "../Portfolio/Portfolio";
import MailchimpFormContainer from "../MailchimpForm/MailchimpFormContainer";

class Wrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolioData: {
        "photos": [
          {
            "title":"Little Cutie Babyshower",
            "image":"little-cutie_061123.jpg"
          },
          {
            "title":"Hydration Station Mimosa Party",
            "image":"hydration-station_043023.jpg"
          },
          {
            "title":"Layla's 1st Birthday",
            "image":"layla-birthday_060423.jpg"
          }
        ]
      }
    };
  }

  render () {
    return (
      <Container>
        <Row>
          <Col className="logo-subtext-wrapper justify-content-center flex-direction-column">
            <p className="logo-subtext-main display-flex justify-content-center">BOUTIQUE PARTY & EVENT DESIGN</p>
            <p className="logo-subtext-secondary display-flex justify-content-center">SERVING CHARLOTTE NC AND SURROUNDING AREAS</p>
          </Col>
        </Row>
        <Row id="description" className="row-padding">
          <p>We offer a fully personalized experience curated to each client, including full-service design.</p>
          <p><span>Soirée Society</span> is excited to maximize your special event's potential!</p>
        </Row>
        <Portfolio data={this.state.portfolioData.photos} />
        <Row className="testimonial-wrapper row-padding">
          <Col lg={9} className="testimonial-item">
            "ABSOLUTELY STUNNING!!! If you're looking for the perfect experience for your next event, Soirée Society will not disappoint...My daughters birthday could not have gone better!" <span className="testimonial-author"> - Lauryn Laliberte</span>
          </Col>
        </Row>
        <Row className="how-it-works-wrapper row-padding">
          <Col xs={12}>
            <p className="how-it-works-title">How it works...</p>
          </Col>
          <Col lg={6} className="how-it-works-item">
            <img src="/images/icons/clipboard.png" alt="icon of clipboard" />
            <p>Fill out our inquiry form and tell us about your event!</p>
          </Col>
          <Col lg={6} className="how-it-works-item">
            <img src="/images/icons/envelope.png" alt="icon of envelope" />
            <p>We will reach out to you within 48 hours via email with pricing and initial design mockups!</p>
          </Col>
          <Col lg={6} className="how-it-works-item">
            <img src="/images/icons/monitor.png" alt="icon of computer monitor" />
            <p>Work with our team to make edits and finalize your event design/build!</p>
          </Col>
          <Col lg={6} className="how-it-works-item">
            <img src="/images/icons/calendar.png" alt="icon of calendar" />
            <p>Book your event or photoshoot!</p>
          </Col>
        </Row>
        <Row className="signup-form-wrapper">
          <Col>
            <p className="sign-form-text">Our website is almost done! sign up to receive news, updates and specials.</p>
            <MailchimpFormContainer />
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Wrapper;