import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RobGrad from '../images/RobGrad.png';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        top: '79%',
        transform: 'translateY(-50%)',
      }}
      onClick={onClick}
    />
  );
}

function BlogCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    useCSS: true,

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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="p-10 text-white justify-center">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="card-container">
          <div className="pcard">
            <img src={RobGrad} alt="Rob" className="cardimg"></img>
            <div>
              <h2>Blog 1</h2>
              <h3>Java</h3>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="pcard">
            <img src={RobGrad} alt="Rob" className="cardimg"></img>
            <div>
              <h2>Project 2</h2>
              <h3>Java</h3>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="pcard">
            <img src={RobGrad} alt="Rob" className="cardimg"></img>
            <div>
              <h2>Project 3</h2>
              <h3>Java</h3>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="pcard">
            <img src={RobGrad} alt="Rob" className="cardimg"></img>
            <div>
              <h2>Project 4</h2>
              <h3>Java</h3>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="pcard">
            <img src={RobGrad} alt="Rob" className="cardimg"></img>
            <div>
              <h2>Project 5</h2>
              <h3>Java</h3>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="pcard">
            <img src={RobGrad} alt="Rob" className="cardimg"></img>
            <div>
              <h2>Project 6</h2>
              <h3>Java</h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default BlogCarousel;
