import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultPropTypes = {
    country: "in",
    catagory: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    catagory: PropTypes.string,
  };
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=e26436aa94614f54a990b42b173a2c45&page=1&pageSize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNext = async () => {
    if (this.state.page + 1 < Math.ceil(this.state.totalResults / 6)) {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=e26436aa94614f54a990b42b173a2c45&page=1&pageSize=6`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePrev = async () => {
    if (this.state.page > 1) {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=e26436aa94614f54a990b42b173a2c45&page=1&pageSize=6`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
      });
    }
  };

  capitalizeFirstLetter(word) {
    if (!word) word = "general";
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          NewsMonkey - {`${this.capitalizeFirstLetter(this.props.catagory)}`}{" "}
          Top Headlines
        </h1>
        <div className="row">
          {this.state.articles.map((article) => {
            if (!article) {
              return <h1>Not Found</h1>;
            }
            return (
              <div className="col-md-4" key={!article.url ? "" : article.url}>
                <NewsItem
                  title={article.title ? article.title : ""}
                  description={article.description ? article.description : ""}
                  imageUrl={article.urlToImage ? article.urlToImage : ""}
                  newsUrl={!article.url ? "" : article.url}
                  author={!article.author ? "Unknown" : article.author}
                  date={article.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >= Math.ceil(this.state.totalResults / 6)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
