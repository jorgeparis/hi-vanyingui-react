import React from "react";
import Slider from "react-slick";
import main_image from "./static/fresh-veg-2.jpg";
import image_two from "./static/fresh-veg-1.jpg";

export function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div
      className="container slider-container"
      style={{ height: "500px", width: "100%", objectFit: "cover",overflow:'hidden' }}
    >
      <div className="row">
        <div className="col">
          <Slider {...settings}>
            <div
              className="container"
            >
              <div className="row justify-content-center rounded mb-3">
                <div className="col">
                  <img
                    src={main_image}
                    alt=""
                    style={{ height: "auto", width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col">
                  <img
                    src={main_image}
                    alt=""
                    style={{ height: "auto", width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
