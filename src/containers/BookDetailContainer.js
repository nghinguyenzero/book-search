import React, { Component } from 'react';
import { connect } from "react-redux";
import { actAddToFavorite } from '../actions';
import BookDetail from "./../components/BookDetail";

class BookDetailContainer extends Component {
    render() {
        var { book } = this.props;
        return (
           <BookDetail
           onAddFavorite={this.onAddFavorite}
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
        },
    }
}

export default connect(null, mapDispatchToProps)(BookDetailContainer);
