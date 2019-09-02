import React, { Component } from 'react';
import { connect } from "react-redux";
import Books from './../../components/Books';
import BookContainer from './../../containers/BookContainer';

class FavoriteBooksPage extends Component {
  render() {
    var { favoriteBooks } = this.props;
    return (
      <div id="wrapper" >
        <Books>
          {this.showFavoriteBooks(favoriteBooks)}
        </Books>
      </div>
    );
  }

  showFavoriteBooks = (favoriteBooks) => {
    var result = null;
    if (favoriteBooks.length > 0) {
      result = favoriteBooks.map((book, index) => {
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
  return { favoriteBooks: state.favoriteBooks }
}

export default connect(mapStateToProps, null)(FavoriteBooksPage);
