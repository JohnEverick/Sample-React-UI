import React from "react";
import { articles } from "../data/DummyData";

class ArticleList extends React.Component {
  render() {
    return (
      <div className="article-list">
        {articles.map((data, index) => {
          return (
            <div key={index} className="article-item clickable">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/images/" + data.image}
                  alt={data.image}
                />
              </div>
              <div className="article-content">
                <div className="date">{data.date}</div>
                <div className="caption">{data.captionText}</div>
                <div className="content">{data.content}</div>
              </div>
            </div>
          );
        })}
        <button className="show-more clickable">
          More
          <img
            className="more-icon"
            src={process.env.PUBLIC_URL + "/images/icn_arrow.font_のコピー.png"}
            alt="More Icon"
          />
        </button>
      </div>
    );
  }
}

export default ArticleList;
