import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsItem" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
