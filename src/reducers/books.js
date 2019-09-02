import * as Types from "../constants/ActionTypes";

var initialState = [];
const books = (state = initialState, action) => { 
    switch (action.type) {
        case Types.FETCH_BOOKS:
            state = action.books;
            state.map((item, index) => {
                item['index'] = index;
            });
            return [...state];
        default: return [...state];
    }
};

export default books;