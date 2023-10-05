import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    useCSS: true,
    autoplay: true,

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
        <h2 className="text-black font-oleo mb-10">Blogs</h2>
        <Slider {...settings}>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Site Done!</h2>
                <h3>Oct. 1st, 2023</h3>
                <Link to="/sitedone" className="project-link-button">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Lessons Learned.</h2>
                <h3>September 30th, 2023</h3>
                <Link to="/lessonslearned" className="project-link-button">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Agile in Action.</h2>
                <h3>Sept. 22nd, 2023</h3>
                <Link to="/agileinaction" className="project-link-button">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Dental Development</h2>
                <h3>Sept. 8th, 2023</h3>
                <Link to="/dentaldevelopment" className="project-link-button">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>AI Everywhere</h2>
                <h3>Aug. 26th, 2023</h3>
                <Link to="/aieverywhere" className="project-link-button">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Real World Apps</h2>
                <h3>Jul. 19th, 2023</h3>
                <Link to="/realworldapps" className="project-link-button">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Newspaper} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Internship Secured</h2>
                <h3>Jul. 1st, 2023</h3>
                <Link to="/internshipsecured" className="project-link-button">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BlogCarousel;
