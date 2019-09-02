import React, { Component } from 'react';
import { connect } from "react-redux";
import { actGetBookRequest } from "../../actions/index";
import { actAddToFavorite, actDeleteToFavorite } from '../../actions/index';
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
          onAddFavorite={this.onAddFavorite}
          onDeleteFavorite={this.onDeleteFavorite}
        />
        </div>
    );
  }
  onAddFavorite = (book) => {
    this.props.onAddFavorite(book);
  }
  onDeleteFavorite = (book) => {
    this.props.onDeleteFavorite(book);
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
    },
    onDeleteFavorite: (book) => {
      dispatch(actDeleteToFavorite(book));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);