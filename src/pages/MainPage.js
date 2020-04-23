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
        <Header />
        <div className="content-area">
          <Carousel />
          <ArticleList />
          <BannerList />
        </div>
        <Footer />
        <button
          className="top-button transparent-btn clickable"
          onClick={() => window.scrollTo(0, 0)}
        ></button>
      </>
    );
  }
}

export default MainPage;
