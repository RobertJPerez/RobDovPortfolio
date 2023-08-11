import React, { useRef, useCallback } from 'react';
import '../App.css';
import { Tooltip } from 'react-tooltip';
import RobGrad from '../images/RobGrad.png';
import 'react-tooltip/dist/react-tooltip.css';

const TOOLTIP_IDS = [
  'tooltip1',
  'tooltip2',
  'tooltip3',
  'tooltip4',
  'tooltip5',
  'tooltip6',
];
const DIV_IDS = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6'];
const BUTTON_NAMES = ['1', '2', '3', '4', '5', '6'];

const TooltipButton = ({ tooltipId, buttonName, handleClick }) => (
  <button
    data-tooltip-id={tooltipId}
    data-tooltip-content={`Tooltip for ${buttonName}`}
    className="header-button"
    onClick={handleClick}
  >
    {buttonName}
    <Tooltip
      id={tooltipId}
      place="bottom"
      type="dark"
      className="rounded text-white"
    />
  </button>
);

function Hero() {
  const divRefs = useRef(DIV_IDS.map(() => React.createRef()));

  const handleClick = useCallback((divIndex) => {
    const currentDiv = divRefs.current[divIndex].current;

    if (currentDiv) {
      currentDiv.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div>
      <div className="header space-x-14">
        {TOOLTIP_IDS.map((tooltipId, i) => (
          <TooltipButton
            key={tooltipId}
            tooltipId={tooltipId}
            buttonName={BUTTON_NAMES[i]}
            handleClick={() => handleClick(i)}
          />
        ))}
      </div>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div
          ref={divRefs.current[0]}
          id="div1"
          className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center font-raleway"
        >
          <img src={RobGrad} alt="Rob Grad" className="img-contained" />
          <h3 className="text-gray-800 sm:mt-2">Welcome, I'm</h3>
          <h1 className="font-oleo font-raleway sm:-mb-8 sm:-mt-4">Robert</h1>
          <h1 className="font-oleo">Perez</h1>
          <h2 className="font-raleway -mt-2 mb-3">Full Stack Engineer</h2>
          {/* <p className="text-base text-center sm:px-12 sm:w-2/3 text-gray-800 sm:mb-4">
            I currently work for Ben Inc as a Full Stack Engineer. I have a wide
            range of skills and experience in Full Stack Development, and I'm
            always looking to learn more.
          </p> */}
          <div className="quoteBox bg-black p-5 rounded flex items-center justify-center w-2/3">
            <p className="text-white text-base font-raleway leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0 w-3/4 flex items-center justify-center mt-9">
              I turn ideas into outstanding Full Stack Applications with
              Effective Collaboration, that results in Team Success, Client
              Satifaction, User Engagment, and Ground Breaking Products.
            </p>
          </div>
          <p className="text-base sm:px-12 sm:w-2/3 text-gray-800 sm:mt-4">
            Let’s start by looking at some of my work history and past
            accomplishments to back this up!
          </p>
        </div>

        <div
          ref={divRefs.current[1]}
          id="div2"
          className="snap-start bg-white w-screen h-screen flex items-center justify-center"
        >
          <div className="w-1/2 h-screen flex flex-row items-center justify-center bg-white">
            <div className="w-1/2 sm:hidden">img</div>
            <div className="w-1/2">
              <h2 className="font-oleo">Career</h2>
              <p className="font-oleo text-[20px]">
                When working on a project I'm passionate about, I'm a dedicated
                team player who is always striving to improve himself and his
                team. Through my experience, I've learned that the best way to
                achieve success is to have a clear vision, a well-defined plan,
                and a team that is willing to work togeter to achieve the same
                goal.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={divRefs.current[2]}
          id="div3"
          className="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center "
        >
          3
        </div>
        <div
          ref={divRefs.current[3]}
          id="div4"
          className="snap-start bg-purple-200 w-screen h-screen flex items-center justify-center"
        >
          4
        </div>
        <div
          ref={divRefs.current[4]}
          id="div5"
          className="snap-start bg-red-200 w-screen h-screen flex items-center justify-center"
        >
          5
        </div>
        <div
          ref={divRefs.current[5]}
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
