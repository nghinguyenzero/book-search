import React, { Component } from 'react';

class ArticlesViewed extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">History </h3>
        </div>
        <div className="panel-body">
          {/* ArticleViewed */}
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Time view</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ArticlesViewed;
