import React, { useState, useEffect } from "react";
import slider1 from "./assets/img/slider1.jpg";
import slider2 from "./assets/img/slider2.jpg";
import slider3 from "./assets/img/slider3.jpg";

const imgs = [slider1, slider2, slider3];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = imgs.length - 1;
  useEffect(() => {
    const interval = setInterval(() => {
      if (current < length) {
        setCurrent(current + 1);
      } else {
        setCurrent(0);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imgs[current]}
              className="d-block w-100"
              alt="slider image"
              id="some-img"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                objectPosition: "center 50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
//   <div className="container-fluid p-0">
//     <div
//       id="carouselExampleSlidesOnly"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src={slider1} className="d-block w-100" alt="..." />
//         </div>
//         <div className="carousel-item">
//           <img src={slider2} className="d-block w-100" alt="..." />
//         </div>
//       </div>
//     </div>
//   </div>
// );
