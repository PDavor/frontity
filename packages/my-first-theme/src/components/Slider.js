import React from "react";
import slider1 from "./assets/img/slider1.jpg";
import slider2 from "./assets/img/slider2.jpg";

const Slider = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
