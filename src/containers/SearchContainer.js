
import React, { Component } from 'react';
import { connect } from "react-redux";
import { actSearchByKey } from "./../actions/index";


class SearchContainer extends Component {

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onSearchByKey({[name]: value});
    }

    render() {
        var { keyword } = this.props;
        return (
            <input className="form-control mb-10" type="text" id="myInput" placeholder="Search for key..." title="Type in a name"
                value={keyword}
                name='keyword'
                onChange={this.onChange}
            ></input>
        );
    }
}
const mapStateToProps = state => { 
    return { keyword: state.keyword }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchByKey: (value) => {
            dispatch(actSearchByKey(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
