import React from 'react';

const Books = (props) => {
    return (
      <div id="books">
        {props.children}
      </div>
    );
  }

export default Books;
