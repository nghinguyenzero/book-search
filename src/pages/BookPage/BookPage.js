import React, { Component } from 'react';
import { connect } from "react-redux";
import { actGetBookRequest } from "../../actions/index";
import { actAddToFavorite } from '../../actions/index';
import BookDetail from "./../../components/BookDetail";
import {findIndex } from 'lodash';

class BookPage extends Component {
  componentWillMount() {
    var { match, books } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onGetBook(books, id);
    }
  }
  render() {
    var { books,match } = this.props;
    // console.log(5, this.props);
    var id = match.params.id;

     let index = findIndex(books, function(o) { return o.id == id; });
     if(index>0){
        let book =  books[index];
      return ( <div>
        <BookDetail
          book={book}
        />
        </div>
    );

     }
     else {
       return (<div>dddddddddd</div>);
     }

  }
  onAddFavorite = (book) => {
    this.props.onAddFavorite(book);
  }
}

const mapStateToProps = state => {
  return { book: state.book, books: state.books }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetBook: (books, id) => {
      dispatch(actGetBookRequest(books, id));
    },
    onAddFavorite: (book) => {
      dispatch(actAddToFavorite(book));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);