import React, { Component } from 'react';
import { connect } from "react-redux";
import { actAddToFavorite, actDetailBook } from '../actions';
import Book from "./../components/Book";

class BookContainer extends Component {
    render() {
        var { book } = this.props;
        return (
           <Book
           onDetailBook={this.onDetailBook}
           book={book}
           />
        );
    }

    onDetailBook = (book) => {
        this.props.onDetailBook(book);
    }

}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onDetailBook: (book) => {
            dispatch(actDetailBook(book));
        }
    }
}

export default connect(null, mapDispatchToProps)(BookContainer);
