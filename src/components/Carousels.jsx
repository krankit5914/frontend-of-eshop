import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousels = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./././images/bg1.jpg"
            alt=" slide"
            height="200px"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./././images/bg2.jpg"
            alt="Second slide"
            height="200px"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="./././images/bg3.png"
            alt="Third slide"
            height="200px"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./././images/bg4.jpg"
            alt="Second slide"
            height="200px"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
