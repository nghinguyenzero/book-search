import { combineReducers } from 'redux';
import articles from "./articles";
import article from "./article";
import history from "./history";
import keyword from "./keyword";

const appReducers = combineReducers({
    articles, article, history, keyword
});
export default appReducers;