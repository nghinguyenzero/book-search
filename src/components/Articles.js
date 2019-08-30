import React, { Component } from 'react';

class Articles extends Component {
  render() {
    return (
      <div className="container">
      <div className="media-container-row">
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default Articles;
