import React, { Component } from 'react';
import { connect } from "react-redux";
import ArticlesViewed from './../../components/ArticlesViewed';
import ArticleViewed from './../../components/ArticleViewed';

class FavoriteBooksPage extends Component {
  render() {
    var { history } = this.props;
    history.sort( (a, b) => b.timeView - a.timeView);
    return (
      <div>
        <ArticlesViewed>
          {this.showHistory(history)}
        </ArticlesViewed>
      </div>
    );
  }

  showHistory = (history) => {
    var result = null;
    if (history.length > 0) {
      result = history.map((article, index) => {
        return (<ArticleViewed
          key={index}
          article={article}
          index={index}
        />)
      })
    }
    return result;
  }
}
const mapStateToProps = state => {
  return { history: state.history }
}

export default connect(mapStateToProps, null)(FavoriteBooksPage);
