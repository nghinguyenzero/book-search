import React, { Component } from 'react';
import { connect } from "react-redux";
import { actGetBookRequest } from "../../actions/index";
import { actAddToFavorite } from '../../actions/index';
import BookDetail from "./../../components/BookDetail";

class BookPage extends Component {
  componenWillMount() {
   
    var { match, books } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onGetBook(books, id);
    }
  }
  render() {
    var { book , match } = this.props;
      return ( <div>
        <BookDetail
          book={book={}?JSON.parse(localStorage.getItem('book')):book}
        />
        </div>
    );
  }
  onAddFavorite = (book) => {
    this.props.onAddFavorite(book);
  }
}

const mapStateToProps = state => { 
  return { book: state.book, books: state.books }
}

const mapDispatchToProps = (dispatch) => {
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