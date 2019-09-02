
import React from 'react';

const Search = (props) => {
    var onChange = (e) => {
        var target = e.target;
        var value = target.value;
        props.onSearchByKey(value);
    }
    return (
        <div id="search-block">
            <div className="clear display-block" >
                {/* <div className="clear__left"></div>
                <div className="clear__right"></div> */}
            </div>
            <input type="text" placeholder="Type author, book name, subject..."
                id="myInput"
                name='keyword'
                onChange={onChange}
            ></input>
        </div>
    );
}

export default Search;

