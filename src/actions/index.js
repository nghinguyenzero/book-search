import * as Types from './../constants/ActionTypes';
import callApi from "./../utils/apiCaller";
import {findIndex } from 'lodash';

export const actFetchBooksRequest = (keyword) => {
    return (dispatch) => {
        return callApi(keyword, 'GET', null).then(res => {  console.log('res',res);
            if(res){
                dispatch(actFetchBooks(res.data.items));
            } 
        })
    };
}

export const actFetchBooks = (books) => {
    return {
        type: Types.FETCH_BOOKS,
        books
    }
}

export const actAddToFavorite = (book) => {
    return {
        type: Types.ADD_FAVORITE_BOOKS,
        book
    };
}

export const actDeleteToFavorite = (book) => {
    return {
        type: Types.DELETE_FAVORITE_BOOKS,
        book
    };
}

export const actGetBookRequest = (books, id) => { 
    return (dispatch) => {  
        var data = JSON.parse(localStorage.getItem('book'));
        console.log('actGetBookRequest',data,id);
        if(data && data.id==id) {
            return dispatch(actGetBook(data));
        } else {
            let index = findIndex(books, function(o) { return o.id == id; });
            if(index > 0) {
                return dispatch(actGetBook(books[index]));
            }
        }


    };
}

export const actGetBook = (book) => { console.log('actGetBook',book);
    return {
        type: Types.GET_BOOK,
        book
    };
}


export const actDetailBook = (book) => {
    return {
        type: Types.GET_DETAIL_BOOK,
        book
    };
}








