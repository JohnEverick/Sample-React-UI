import React from "react";
import Carousel from "../components/Carousel";
import ArticleList from "../components/ArticleList";
import BannerList from "../components/BannerList";
import Header from "../components/Header";
import Footer from "../components/Footer";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Header />
          <Carousel />
          <div className="content-area">
            <ArticleList />
            <BannerList />
          </div>
          <Footer />
          <button
            className="top-button transparent-btn clickable"
            onClick={() => window.scrollTo(0, 0)}
          ></button>
        </div>
      </>
    );
  }
}

export default MainPage;
