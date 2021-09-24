import React, {useState} from "react";
import {Carousel} from 'react-bootstrap';
// import slider1 from '../../public/images/slider1.jpg'

function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} className="p-1" style={{backgroundColor: "lightgray"}}>
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="/images/shoes3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="/images/slider7.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"400px"}}>
          <img
            className="d-block w-100"
            src="/images/shoes2.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
