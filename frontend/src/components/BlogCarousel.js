import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Newspaper from '../images/Newspaper.png';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        top: '50%',
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
    <div className="carousel-container flex justify-center items-center p-10 text-white">
      <div className="carousel-inner">
        <h2 className="text-white mb-4">Single Item</h2>
        <Slider {...settings}>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Ghiselberti Dental</h2>
                <h3>Javascript, CSS, HTML, MongoDB</h3>
                <a
                  href="YOUR_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Anywhere AI</h2>
                <h3>MERN Stack, ChatGPT API</h3>
                <a
                  href="YOUR_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Project 3</h2>
                <h3>Java</h3>
                <a
                  href="YOUR_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Project 4</h2>
                <h3>Java</h3>
                <a
                  href="YOUR_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Project 5</h2>
                <h3>Java</h3>
                <a
                  href="YOUR_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Project 6</h2>
                <h3>Java</h3>
                <a
                  href="YOUR_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BlogCarousel;
