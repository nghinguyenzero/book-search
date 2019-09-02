
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actFetchBooksRequest } from "../actions/index"
import Search from "./../components/Search";

class SearchContainer extends Component {
    render() {
        return (
            <Search
                onSearchByKey={this.props.onSearchByKey}
            />
        );
    }
}

const mapStateToProps = state => {
    return { keyword: state.keyword }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchByKey: (value) => {
            dispatch(actFetchBooksRequest(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

