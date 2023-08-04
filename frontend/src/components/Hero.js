import React from 'react';
import '../App.css';
import { Tooltip } from 'react-tooltip';
import RobGrad from '../images/RobGrad.png';
import 'react-tooltip/dist/react-tooltip.css';

function Hero() {
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="header space-x-14">
        <button
          data-tooltip-id="tooltip1"
          data-tooltip-content="Tooltip for 1"
          className="header-button"
          onClick={() => handleClick('div1')}
        >
          1
          <Tooltip
            id="tooltip1"
            place="bottom"
            type="dark"
            className="rounded text-white"
          />
        </button>
        <button
          data-tooltip-id="tooltip2"
          data-tooltip-content="Tooltip for 2"
          className="header-button"
          onClick={() => handleClick('div2')}
        >
          2
          <Tooltip
            id="tooltip2"
            place="bottom"
            type="dark"
            className="rounded text-white"
          />
        </button>
        <button
          data-tooltip-id="tooltip3"
          data-tooltip-content="Tooltip for 3"
          className="header-button"
          onClick={() => handleClick('div3')}
        >
          3
          <Tooltip
            id="tooltip3"
            place="bottom"
            type="dark"
            className="rounded text-white"
          />
        </button>
        <button
          data-tooltip-id="tooltip4"
          data-tooltip-content="Tooltip for 4"
          className="header-button"
          onClick={() => handleClick('div4')}
        >
          4
          <Tooltip
            id="tooltip4"
            place="bottom"
            type="dark"
            className="rounded text-white"
          />
        </button>
        <button
          data-tooltip-id="tooltip5"
          data-tooltip-content="Tooltip for 5"
          className="header-button"
          onClick={() => handleClick('div5')}
        >
          5
          <Tooltip
            id="tooltip5"
            place="bottom"
            type="dark"
            className="rounded text-white"
          />
        </button>
        <button
          data-tooltip-id="tooltip6"
          data-tooltip-content="Tooltip for 6"
          className="header-button"
          onClick={() => handleClick('div6')}
        >
          6
          <Tooltip
            id="tooltip6"
            place="bottom"
            type="dark"
            className="rounded text-white"
          />
        </button>
      </div>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div
          id="div1"
          className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center"
        >
          <img src={RobGrad} alt="Rob Grad" className="img-contained mt-80" />
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold font-raleway">Welcome, I'm</p>
            <h2 className="text-[120px] font-oleo -mt-5">Robert</h2>
            <h2 className="text-[120px] -mt-16 font-oleo">Perez</h2>
            <div className="-mt-4 text-base font-raleway text-[20px] leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0 w-full sm:w-3/4 md:w-1/3 lg:max-w-xlg bg-white p-5 rounded">
              I currently work for Ben Inc as a Full Stack Engineer. I have a
              wide range of skills and experience in Full Stack Development, and
              I'm always looking to learn more.
            </div>
            <div className="quoteBox bg-black p-5 rounded flex items-center justify-center w-1/3 h-1.5/3 -mt-8">
              <div className="mt-5 text-white text-base font-raleway text-[30px] leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0 w-3/4 flex items-center justify-center">
                I turn ideas into outstanding Full Stack Applications with
                Effective Collaboration, that results in Team Success, Client
                Satifaction, User Engagment, and Ground Breaking Products.
              </div>
            </div>

            <div className="mt-5 text-base font-bold font-raleway text-[18px] leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0 w-full sm:w-3/4 md:w-1/3 lg:max-w-xlg">
              When working on a project I'm passionate about, I'm a dedicated
              team player who is always striving to improve himself and his
              team. Through my experience, I've learned that the best way to
              achieve success is to have a clear vision, a well-defined plan,
              and a team that is willing to work together to achieve the same
              goal.
            </div>
            <div className="mt-5 text-base font-bold font-raleway text-[18px] leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0 w-full sm:w-3/4 md:w-1/3 lg:max-w-xlg">
              Let’s start by looking at some of my work history and past
              accomplishments to back this up!
            </div>
          </div>
        </div>

        <div
          id="div2"
          className="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center "
        >
          2
        </div>
        <div
          id="div3"
          className="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center "
        >
          3
        </div>
        <div
          id="div4"
          className="snap-start bg-purple-200 w-screen h-screen flex items-center justify-center"
        >
          4
        </div>
        <div
          id="div5"
          className="snap-start bg-red-200 w-screen h-screen flex items-center justify-center"
        >
          5
        </div>
        <div
          id="div6"
          className="snap-start bg-blue-200 w-screen h-screen flex items-center justify-center "
        >
          6
        </div>
      </div>
    </div>
  );
}

export default Hero;
