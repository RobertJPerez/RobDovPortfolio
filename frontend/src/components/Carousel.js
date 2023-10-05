import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RobGrad from '../images/RobGrad.png';
import Server from '../images/Server.png';
import Robot from '../images/Robot.png';
import Tooth from '../images/Tooth.png';
import Datastructure from '../images/Datastructure.png';
import Gardening from '../images/Gardening.png';
import ServicesPortfolio from '../images/ServicesPortfolio.png';
import Bird from '../images/Dove.png';
import { Link } from 'react-router-dom';
import Chat from '../images/Chat.png';
import Spades from '../images/spades.png';
import games from '../images/games.png';
import coal from '../images/coal.png';

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

function Carousel() {
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
        <h2 className="text-black font-oleo mb-10">Projects</h2>
        <Slider {...settings}>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img
                  src={ServicesPortfolio}
                  alt="Rob"
                  className="cardimg"
                ></img>
              </div>
              <div>
                <h2>Portfolio Site</h2>
                <h3>Javascript, Tailwind, HTML, Nodejs</h3>
                <Link to="/" className="project-link-button">
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Robot} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Anywhere AI</h2>
                <h3>MERN Stack, ChatGPT API</h3>
                <Link to="/" className="project-link-button">
                  Launching Soon!
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Tooth} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Ghisalberti Dental</h2>
                <h3>MERN Stack</h3>
                <Link to="/" className="project-link-button">
                  Launching Soon!
                </Link>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="pcard">
              <div className="white-circle">
                <img src={Gardening} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Garden Game</h2>
                <h3>React, Typescript</h3>
                <a
                  href="https://github.com/RobertJPerez/React-Garden-Game"
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
                <img src={Datastructure} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Sorting Project</h2>
                <h3>C++</h3>
                <a
                  href="https://github.com/RobertJPerez/DataStructures-SortingProject"
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
                <img src={Server} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>School Manager</h2>
                <h3>SQL</h3>
                <a
                  href="https://github.com/RobertJPerez/SQLJEmployeeManager.git"
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
                <img src={Datastructure} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>CPU Scheduler</h2>
                <h3>C</h3>
                <a
                  href="https://github.com/RobertJPerez/OperatingSystems-Scheduling-DeadlockAvoidance.git"
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
                <img src={Bird} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>GLFW Flappy Bird</h2>
                <h3>C++</h3>
                <a
                  href="https://github.com/RobertJPerez/GLFWFlappyBird.git"
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
                <img src={Chat} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>UDP Chatroom</h2>
                <h3>C++</h3>
                <a
                  href="https://github.com/RobertJPerez/UDP-Client-Server-Chatroom.git"
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
                <img
                  src={ServicesPortfolio}
                  alt="Rob"
                  className="cardimg"
                ></img>
              </div>
              <div>
                <h2>Loan Calculator</h2>
                <h3>Java</h3>
                <a
                  href="https://github.com/RobertJPerez/Student-Loan-Calculator.git"
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
                <img src={Bird} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Twitter</h2>
                <h3>Typescript, Tailwind</h3>
                <a
                  href="https://github.com/RobertJPerez/twitter.git"
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
                <img src={Spades} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Poker</h2>
                <h3>Java</h3>
                <a
                  href="https://github.com/RobertJPerez/Poker.git"
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
                <img src={games} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Othello</h2>
                <h3>C++</h3>
                <a
                  href="https://github.com/RobertJPerez/Othello.git"
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
                <img src={coal} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Minesweeper</h2>
                <h3>C++</h3>
                <a
                  href="https://github.com/RobertJPerez/Minesweeper"
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
                <img src={Server} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>Enrollment SQL</h2>
                <h3>SQL</h3>
                <a
                  href="https://github.com/RobertJPerez/SQL-SchoolManager"
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
                <img
                  src={ServicesPortfolio}
                  alt="Rob"
                  className="cardimg"
                ></img>
              </div>
              <div>
                <h2>TCP File Transfer</h2>
                <h3>C</h3>
                <a
                  href="https://github.com/RobertJPerez/TCP-FileTransfer"
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
                <img src={Datastructure} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>DLL DeCoder</h2>
                <h3>C++</h3>
                <a
                  href="https://github.com/RobertJPerez/DLL-DeCoder.git"
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
                <img src={Spades} alt="Rob" className="cardimg"></img>
              </div>
              <div>
                <h2>GLFW Tank</h2>
                <h3>C++</h3>
                <a
                  href="https://github.com/RobertJPerez/GLFW-Tank.git"
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
                <img
                  src={ServicesPortfolio}
                  alt="Rob"
                  className="cardimg"
                ></img>
              </div>
              <div>
                <h2>UDP File Transfer</h2>
                <h3>C</h3>
                <a
                  href="https://github.com/RobertJPerez/UDP-FileTransferer.git"
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

export default Carousel;
