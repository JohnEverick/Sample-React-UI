import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="logo-container">
            <a href="/#">
              <img
                src={process.env.PUBLIC_URL + "images/Website_Logo.png"}
                className="company-logo"
              />
            </a>
          </div>
          <div className="carousel">
            <div className="carousel-slide active">
              <img
                className="carousel-image"
                src={process.env.PUBLIC_URL + "images/レイヤー_4.png"}
              />
              <div className="carousel-caption">
                <p className="carousel-caption-header">
                  キャッチコピーが入ります。
                </p>
                <p className="carousel-caption-text">
                  サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                  サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
