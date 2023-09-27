import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RobGrad from '../images/RobGrad.png';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="wrapper">
      <h2> Single Item</h2>
      <Slider {...settings} className="carousel">
        <div className="card">
          <img src={RobGrad} alt="Rob" className="cardimg w-100"></img>
          <div className="card-body">
            <h3>Project 1</h3>
            <p>Java</p>
          </div>
        </div>
        <div className="card">
          <img src={RobGrad} alt="Rob" className="w-100"></img>
          <div className="card-body">
            <h3>Project 2</h3>
            <p>Java</p>
          </div>
        </div>
        <div className="card">
          <img src={RobGrad} alt="Rob" className="w-100"></img>
          <div className="card-body">
            <h3>Project 3</h3>
            <p>Java</p>
          </div>
        </div>
        <div className="card">
          <img src={RobGrad} alt="Rob" className="w-100"></img>
          <div className="card-body">
            <h3>Project 4</h3>
            <p>Java</p>
          </div>
        </div>
        <div className="card">
          <img src={RobGrad} alt="Rob" className="w-100"></img>
          <div className="card-body">
            <h3>Project 5</h3>
            <p>Java</p>
          </div>
        </div>
        <div className="card">
          <img src={RobGrad} alt="Rob" className="w-100"></img>
          <div className="card-body">
            <h3>Project 6</h3>
            <p>Java</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
