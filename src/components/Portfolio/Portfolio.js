import React, { Component } from 'react';
import "./Portfolio.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      // console.log(this.props.data);
      var photos = this.props.data.map(function (photos) {
        var projectImage = 'images/portfolio/' + photos.image;
        
        return (
          <Col lg={4} key={photos.title} className="portfolio-item">
            <div className="item-wrap">
              <img alt={photos.title} src={projectImage} />
            </div>
          </Col>
        )
      })

    }

    return (
      <Row id="portfolio" className="row-padding d-none d-lg-flex">
        {photos}
      </Row>
    );
  }
}
    
export default Portfolio;