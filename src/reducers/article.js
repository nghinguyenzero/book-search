import * as Types from '../constants/ActionTypes';

var initialState = {};
const article = (state = initialState, action) => {  
    switch (action.type) {
        case Types.GET_BOOK:
            return action.article;
        default: return state;
    }
};

export default article;