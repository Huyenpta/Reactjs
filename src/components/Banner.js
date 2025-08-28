import React from "react";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/tea1.png" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/tea2.png" alt="Slide 2" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;