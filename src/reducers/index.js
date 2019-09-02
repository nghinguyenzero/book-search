import { combineReducers } from 'redux';
import keyword from "./keyword";
import books from "./books";
import book from "./book";
import favoriteBooks from "./favoriteBooks";

const appReducers = combineReducers({
    book, books, favoriteBooks, keyword
});
export default appReducers;