import * as Types from './../constants/ActionTypes';
import { findIndex } from "lodash";

var data = JSON.parse(localStorage.getItem('favoriteBooks'));
var initialState = data ? data : [];
const favoriteBooks = (state = initialState, action) => {
    var { book } = action;
    switch (action.type) {
        case Types.ADD_FAVORITE_BOOKS:
            let index = findIndex(state, function(o) { return o.id == book.id; });
            if (index === -1) {
                state.push(book);
                localStorage.setItem('favoriteBooks', JSON.stringify(state));
            }
            return [...state];
            
        default: return [...state];
    }
};


export default favoriteBooks;