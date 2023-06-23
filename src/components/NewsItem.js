import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
            <p className="card-text my-2">
              <small className="text-body-secondary">
                By <strong>{author}</strong> on <em>{date.slice(0, 10)}</em>
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
