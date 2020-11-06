import React from "react";
import { connect } from "react-redux";

import { Loader } from "./Loader";
import { AppState } from '../store'

type Props = ReturnType<typeof mapStateToProps>

const News: React.FC<Props> = ({ articles, isLoading }) => {
  return (
    <React.Fragment>
      <div className="row mt-4">
        <div className="col">
          <h3>News</h3>
        </div>
      </div>
      <div className="row align-items-stretch" style={{ minHeight: 330 }}>
        {isLoading && <Loader />}
        {articles.map((article, i) => (
          <div className="col-3" key={i}>
            <div className="card">
              <img
                src={article.featuredImg}
                style={{ height: 150 }}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h6 className="card-title">{article.title}</h6>
                <a href={article.newsLink} className="btn btn-primary">
                  Learn moore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ news }: AppState) => ({
  articles: news.articles,
  isLoading: news.isLoading,
});

export default connect(mapStateToProps)(News);
