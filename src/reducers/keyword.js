import * as Types from './../constants/ActionTypes';
var initialState = '';
const keyword = (state = initialState, action) => { 
    switch (action.type) {
        case Types.SEARCH_BY_KEY:
            return action.keyword.keyword;
        default: return state;
    }
};

export default keyword;