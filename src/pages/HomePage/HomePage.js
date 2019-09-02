import React, { Component } from 'react';
import Books from './../../components/Books';
import BookContainer from './../../containers/BookContainer';
import SearchContainer from './../../containers/SearchContainer';
import { connect } from "react-redux";


class HomePage extends Component {
  render() {
    var { books } = this.props;
    return (
      <div id="wrapper" >
        <header>
          <h1>Book Finder</h1>
        </header>
        <div id="content">
          <SearchContainer />
        </div>
        <Books>
          {this.showNewsList(books)}
        </Books>
        <div className="text-center mb-10 mt-10">
        </div>
      </div>
    );
  }

  showNewsList = (books) => {
    var result = null;
    if (books.length > 0) {
      result = books.map((book, index) => {
        return (<BookContainer
          key={index}
          book={book}
          index={index}
        />)
      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    keyword: state.keyword, books: state.books
  };
}

export default connect(mapStateToProps, null)(HomePage);

