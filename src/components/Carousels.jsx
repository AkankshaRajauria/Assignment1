import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// import slider1 from '../../public/images/slider1.jpg'

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
            className="d-block w-100"
            src="/images/shoes3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="bannerclass">
          <img
            className="d-block w-100"
            src="/images/slider7.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="bannerclass">
          <img
            className="d-block w-100"
            src="/images/shoes2.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
