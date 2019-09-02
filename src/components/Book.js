import React from 'react';
import { Link } from "react-router-dom";

const Book = (props) => {
    var { book } = props;
    var { authors, publisher, publishedDate, subtitle, imageLinks, previewLink, title } = props.book.volumeInfo;

    var onDetailBookCom = (book) => {
        props.onDetailBook(book);
    }
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
            </div>
            <div className="book__desc">
                <div className="book__field" title="author"><strong>Author:</strong> {authors}</div>
                <div className="book__field"><strong>Publisher:</strong> {publisher}</div>
                <div className="book__field"><strong>Published:</strong> {publishedDate}</div>
                <div className="book__field">{subtitle}</div>
                <Link
                    to={`/books/${book.id}`}
                    className="btn btn-primary display-4  mr-10 mt-10"
                    onClick={() => onDetailBookCom(book)}
                >View</Link>

            </div>
        </div>
    );
}

export default Book;
