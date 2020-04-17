import React from "react";
import { slides } from "../data/DummyData";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 1,
    };
  }

  handleSlideClick = (activeSlide) => {
    // Trapping if activeSlide goes out of bounds
    if (activeSlide < 1) {
      activeSlide = slides.length;
    } else if (activeSlide > slides.length) {
      activeSlide = 1;
    }
    this.setState({
      activeSlide: activeSlide,
    });
  };

  render() {
    const { activeSlide } = this.state;
    return (
      <div className="carousel">
        {slides.map((data, index) => {
          let activeCount = index + 1;
          return (
            <div
              key={index}
              className={
                "carousel-slide " + (activeSlide === activeCount && "active")
              }
            >
              <img
                className="carousel-image"
                src={process.env.PUBLIC_URL + "/images/" + data.image}
                alt={data.image}
              />
              <div className="carousel-caption">
                <div className="carousel-caption-header">{data.header}</div>
                <div className="carousel-caption-text">{data.text}</div>
              </div>
              <div className="carousel-buttons">
                <button className="carousel-button-left transparent-btn clickable">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/icn_arrow.font_のコピー_2.png"
                    }
                    onClick={this.handleSlideClick.bind(this, activeSlide - 1)}
                    alt="arrow-left"
                  />
                </button>
                <button className="carousel-button-right transparent-btn clickable">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/icn_arrow.font_のコピー.png"
                    }
                    onClick={this.handleSlideClick.bind(this, activeSlide + 1)}
                    alt="arrow-right"
                  />
                </button>
              </div>
            </div>
          );
        })}
        <div className="carousel-pagers">
          {slides.map((data, index) => {
            return (
              <button
                key={index}
                className="pager-btn transparent-btn clickable"
                onClick={this.handleSlideClick.bind(this, index + 1)}
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    (index + 1 === activeSlide
                      ? "images/楕円形_1_のコピー.png"
                      : "images/楕円形_1.png")
                  }
                  alt="pager-btn"
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
