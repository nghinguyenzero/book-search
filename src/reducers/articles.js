import * as Types from "../constants/ActionTypes";

var initialState = [];
const articles = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_BOOKS:
            state = action.articles;
            state.map((item, index) => {
                item['index'] = index;
            });
            return [...state];
        default: return [...state];
    }
};

export default articles;