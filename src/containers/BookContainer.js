import React, { Component } from 'react';
import { connect } from "react-redux";
import { actAddToFavorite } from '../actions';
import Book from "./../components/Book";

class BookContainer extends Component {
    render() {
        var { book } = this.props;
        return (
           <Book
           onAddFavorite={this.onAddFavorite}
           onViewDetail={this.onViewDetail}
           book={book}
           />
        );
    }

    onAddFavorite = (book) => {
        this.props.onAddFavorite(book);
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddFavorite: (book) => {
            dispatch(actAddToFavorite(book));
        }
    }
}

export default connect(null, mapDispatchToProps)(BookContainer);
