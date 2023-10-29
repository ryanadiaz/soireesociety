import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      console.log(this.props.data);
      var photos = this.props.data.map(function (photos) {
        var projectImage = 'images/portfolio/' + photos.image;
        
        return (
          <div key={photos.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={photos.title} src={projectImage} />
            </div>
          </div>
        )
      })

    }

    return (
      <section id="portfolio">
        {photos}
      </section>
    );
  }
}
    
export default Portfolio;