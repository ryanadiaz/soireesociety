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
      portfolioData: {}
    };
  }

  getportfolioData(){
    $.ajax({
      url:'./portfolioData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({portfolioData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getportfolioData();
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
        <Portfolio data={this.state.portfolioData.photos} />
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