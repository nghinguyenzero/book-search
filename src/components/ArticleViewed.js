import React, { Component } from 'react';

class ArticleViewed extends Component {
  render() {
    var { article } = this.props; 
    var timeView = new Date(article.timeView).toLocaleString();
    return (
      <tr>
        <td>{article.title}</td>
        <td>{timeView}</td>
      </tr>
    );
  }
}

export default ArticleViewed;
