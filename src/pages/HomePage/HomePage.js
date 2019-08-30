import React, { Component } from 'react';
import Articles from './../../components/Articles';
import Article from './../../components/Article';
import Search from './../../components/Search';
import { connect } from "react-redux";
import { actFetchArticlesRequest, actSearchByKey } from "./../../actions/index";
import { filter } from 'lodash';
import {NUMB_OF_BOOKS} from "./../../constants/ActionTypes";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: NUMB_OF_BOOKS,
    };
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + NUMB_OF_BOOKS };
    });
  }

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    var { articles, keyword } = this.props;
    if (keyword) {
      articles = filter(articles, (article) => {
        return article.title.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    articles.sort(function (a, b) {
      var c = new Date(a.publishedAt);
      var d = new Date(b.publishedAt);
      return d - c;
    });

    return (
      <div className="container" >
        <Search />
        <Articles>
          {this.showNewsList(articles.slice(0, this.state.visible))}
        </Articles>
        <div className="text-center mb-10 mt-10">
          {this.state.visible < articles.length &&
            <button onClick={() => this.loadMore()} type="button" className="load-more btn btn-large btn-block btn-primary">Load more</button>
          }
        </div>
      </div>
    );

  }

  showNewsList = (articles) => {
    var result = null;
    if (articles.length > 0) {
      result = articles.map((article, index) => {
        return (<Article
          key={index}
          article={article}
          index={index}
        />)
      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    keyword: state.keyword, articles: state.articles
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchArticles: () => {
      dispatch(actFetchArticlesRequest());
    },
    onSearchByKey: (keyword) => {
      dispatch(actSearchByKey(keyword));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
