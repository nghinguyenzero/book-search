import * as Types from '../constants/ActionTypes';

// var data = JSON.parse(localStorage.getItem('book'));

var initialState = {};//data ?{} : data ;
const book = (state = initialState, action) => {   
    switch (action.type) {
        case Types.GET_BOOK:
            // console.log('action', action);
            // localStorage.setItem('book', JSON.stringify(action.book));
            return action.book;
        default: return state;
    }
};

export default book;