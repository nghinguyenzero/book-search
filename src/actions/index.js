import * as Types from './../constants/ActionTypes';
import callApi from "./../utils/apiCaller";

export const actFetchArticlesRequest = () => {
    return (dispatch) => {
        return callApi('', 'GET', null).then(res => {
            dispatch(actFetchArticles(res.data.articles));
        })
    };
}
export const actFetchArticles = (articles) => {
    return {
        type: Types.FETCH_BOOKS,
        articles
    }
}

const findArticle = (articles, id) => {
    var data = null;
    if (articles.length > 0) {
        articles.forEach((item) => {
            if (item.index === parseInt(id)) {
                data = item;
            }
        });
    }
    return data
}

export const actGetArticleRequest = (articles, id) => {
    return (dispatch) => {  
        var data = findArticle(articles, id);
        if(data != null) {
            return dispatch(actGetArticle(data));
        }
    };
}

export const actGetArticle = (article) => {
    return {
        type: Types.GET_BOOK,
        article
    };
}

export const actAddToHistory = (article) => {
    return {
        type: Types.FETCH_FAVORITE_BOOKS,
        article
    };
}

export const actSearchByKey = (keyword) => { 
    return {
        type: Types.SEARCH_BY_KEY,
        keyword
    }
}

