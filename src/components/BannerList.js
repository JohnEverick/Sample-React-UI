import React from "react";
import { news } from "../data/DummyData";

class BannerList extends React.Component {
  render() {
    return (
      <div className="banner-list">
        <div className="main-banner clickable">
          <img
            src={process.env.PUBLIC_URL + "images/長方形_16.png"}
            alt="Main Banner"
          />
        </div>
        <div className="recommended">
          <div className="recommend-title">Recommend</div>
          {news.map((data, index) => {
            return (
              <div key={index} className="news-item clickable">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + data.image}
                    alt="News Item"
                  />
                </div>
                <div className="news-content">
                  <div className="caption">{data.captionText}</div>
                  <div className="date">{data.date}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="banner-tiles">
          <div className="tile clickable">
            <img
              src={process.env.PUBLIC_URL + "/images/Dummy_banner.png"}
              alt="Banner Tile"
            />
          </div>
          <div className="tile clickable">
            <img
              src={process.env.PUBLIC_URL + "/images/Dummy_banner.png"}
              alt="Banner Tile"
            />
          </div>
          <div className="tile clickable">
            <img
              src={process.env.PUBLIC_URL + "/images/Dummy_banner.png"}
              alt="Banner Tile"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BannerList;
