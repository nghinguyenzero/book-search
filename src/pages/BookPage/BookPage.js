import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actGetArticleRequest } from "../../actions/index";

class BookPage extends Component {

  componentDidMount() {
    var { match, articles } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onGetArticle(articles, id);
    }
  }

  render() {
    var { article } = this.props;
    var date = new Date(article.publishedAt).toLocaleString();
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mt-4">{article.title}</h1>
            <div className="lead">
              {article.author}
            </div>
            <hr></hr>
            <div>Posted on {date}</div>
            <hr></hr>
            <img className="img-fluid rounded img-article" src={article.urlToImage} alt=""></img>
            <hr></hr>
            <div>{article.content}</div>
            <Link to="/" className="btn btn-danger mr-10 mt-10"> Back
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { article: state.article, articles: state.articles }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetArticle: (articles, id) => {
      dispatch(actGetArticleRequest(articles, id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
