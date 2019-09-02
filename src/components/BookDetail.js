import React from 'react';
import { Link } from "react-router-dom";

const BookDetail = (props) => {
    var onAddFavoriteCom = (book) => {
        this.props.onAddFavorite(book);
    }

    var { book } = props;
    console.log('props', props);
    var { authors, publisher, publishedDate, subtitle, imageLinks, previewLink, title } = this.props.book.volumeInfo;
    return (
        <div className="book">
            <div className="book__title">
                <h2><a href={previewLink}
                    rel="noopener noreferrer" target="_blank">{title}</a></h2>
            </div>
            <div className="book__img-block"><img
                src={imageLinks.thumbnail}
                alt={title}
                className="book__img"></img>
                <div className="book__desc">
                    <div className="book__field" title="author"><strong>Author:</strong> {authors}</div>
                    <div className="book__field"><strong>Publisher:</strong> {publisher}</div>
                    <div className="book__field"><strong>Published:</strong> {publishedDate}</div>
                    <div className="book__field">{subtitle}</div>
                    <Link
                        to={`/books/${book.id}`}
                        className="btn btn-primary display-4"
                    >View</Link>
                    <div className="btn btn-primary display-4"
                        onClick={() => onAddFavoriteCom(book)}>
                        add favorite
                          </div>
                </div>
            </div>
        </div>
    );
}


export default BookDetail;
