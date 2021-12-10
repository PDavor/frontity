import React from "react";
import slider1 from "./assets/img/slider1.jpg";
import slider2 from "./assets/img/slider2.jpg";

const Slider = () => {
  return (
    <div class="container-fluid p-0">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
