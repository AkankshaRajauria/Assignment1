import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../App.css"

function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="p-1 bannerclass"
        style={{ backgroundColor: "#c2c2c2" }}
      >
        <Carousel.Item className="bannerclass">
          <img
            className="d-block w-100 height-banner mobile-height"
            src="/images/laptop-banner4.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="bannerclass">
          <img
            className="d-block w-100 mobile-height"
            src="/images/shoes3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="bannerclass">
          <img
            className="d-block w-100 height-banner mobile-height"
            src="/images/laptop-banner5.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
