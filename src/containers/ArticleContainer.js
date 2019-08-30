import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actAddToHistory } from "../actions/index"
import Moment from 'react-moment';

class ArticleContainer extends Component {
    render() {

        var {article} = this.props;
        return (
            <div className="card p-3 col-12 col-md-6 col-lg-4">
                <div className="card-wrapper mt-mb-10 ">
                    <div className="card-img card-center">
                        <img src={article.urlToImage} className="img-320" alt="Mobirise" media-simple="true"></img>
                    </div>
                    <div className="card-box">
                        <h4 className="card-title mbr-fonts-style display-7 h-50">
                            {article.title}
                        </h4>
                        <p className="mbr-text mbr-fonts-style display-7 description">
                             {article.description}
                        </p>
                        <Moment to={article.publishedAt}></Moment> <br></br>
                        <strong className="mbr-text mbr-fonts-style display-7">
                            source: {article.source.name}  
                        </strong>
                        
                    </div>
                    <div className="mbr-section-btn text-center">
                        <Link
                            to={`/articles/${article.index}`}
                            className="btn btn-primary display-4"
                            onClick={() => this.onViewDetail(article)}
                        >View</Link>
                    </div>
                </div>
            </div>

        );
    }

    onViewDetail = (article) => {
        this.props.onAddHistory(article);
    }
}
const mapStateToProps = state => {
    return { newsHistoryList: state.newsHistoryList }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddHistory: (article) => {
            dispatch(actAddToHistory(article));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
