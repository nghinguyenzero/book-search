import React from 'react';
import { Link } from "react-router-dom";
import {findIndex} from "lodash";

const BookDetail = (props) => {
    var data = JSON.parse(localStorage.getItem('favoriteBooks'));
    var index = findIndex(data, function(o) { return o.id === props.book.id });
    var onAddFavoriteCom = (book) => {
        props.onAddFavorite(book);
    }
    var onDeleteFavoriteCom = (book) => {
        props.onDeleteFavorite(book);
    }

    var { book } = props;
    var { authors, publisher, publishedDate, subtitle, imageLinks, previewLink, title, description } = book.volumeInfo
    return (
        <div id="book-detail" >
            <div id="wrapper" >
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
                        <div className="book__field " title="author"><strong>Author:</strong> {authors}</div>
                        <div className="book__field"><strong>Publisher:</strong> {publisher}</div>
                        <div className="book__field"><strong>Published:</strong> {publishedDate}</div>
                        <div className="book__field "><strong>Subtitle:</strong>{subtitle}</div>

                        <div className="book__field"><strong>Description:</strong>
                            <div className='description'>
                                {description}
                            </div>

                        </div>
                        { index === -1 ? 
                        <div className="btn btn-primary display-4  mt-20 mb-20  display-inline"
                            onClick={() => onAddFavoriteCom(book)}>
                            ADD FAVORITE
                          </div>
                          : 
                          <div className="btn btn-primary display-4  mt-20 mb-20  display-inline"
                          onClick={() => onDeleteFavoriteCom(book)}
                          >
                          CANCEL FAVORITE
                        </div>
                          }
                        <Link
                            to={`/`}
                            className="btn btn-primary display-4 mr-10 mt-20  display-inline"
                        >BACK</Link>

                    </div>
                </div>

            </div>

        </div>

    );
}


export default BookDetail;
