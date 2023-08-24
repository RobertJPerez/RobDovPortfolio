import React, { useRef, useCallback, useState } from 'react';
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

const SvgButton = ({ tooltipId, handleClick }) => (
  <button
    data-tooltip-id={tooltipId}
    data-tooltip-content="SVG Tooltip"
    className="header-button"
    onClick={handleClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
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
  const [activeSkill, setActiveSkill] = useState('technical');

  const techSkills = [
    { id: 0, title: 'Tech Skill 1', image: 'path/to/placeholder/image1.png' },
    { id: 1, title: 'Tech Skill 2', image: 'path/to/placeholder/image2.png' },
    { id: 2, title: 'Tech Skill 3', image: 'path/to/placeholder/image1.png' },
    { id: 3, title: 'Tech Skill 4', image: 'path/to/placeholder/image2.png' },
    { id: 4, title: 'Tech Skill 5', image: 'path/to/placeholder/image1.png' },
    { id: 5, title: 'Tech Skill 6', image: 'path/to/placeholder/image2.png' },
  ];

  const softSkills = [
    { id: 0, title: 'Soft Skill 1', image: 'path/to/placeholder/image1.png' },
    { id: 1, title: 'Soft Skill 2', image: 'path/to/placeholder/image1.png' },
    { id: 2, title: 'Soft Skill 3', image: 'path/to/placeholder/image1.png' },
    { id: 3, title: 'Soft Skill 4', image: 'path/to/placeholder/image1.png' },
    { id: 4, title: 'Soft Skill 5', image: 'path/to/placeholder/image1.png' },
    { id: 5, title: 'Soft Skill 6', image: 'path/to/placeholder/image1.png' },
  ];

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
        {TOOLTIP_IDS.map((tooltipId, i) => {
          // Use the SvgButton for the first button (index 0)
          if (i === 0) {
            return (
              <SvgButton
                key={tooltipId}
                tooltipId={tooltipId}
                handleClick={() => handleClick(i)}
              />
            );
          }
          // Use the TooltipButton for the rest
          return (
            <TooltipButton
              key={tooltipId}
              tooltipId={tooltipId}
              buttonName={BUTTON_NAMES[i]}
              handleClick={() => handleClick(i)}
            />
          );
        })}
      </div>

      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div
          ref={divRefs.current[0]}
          id="div1"
          className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center font-raleway"
        >
          <img src={RobGrad} alt="Rob Grad" className="img-contained" />
          <h3 className="text-gray-800 sm:mt-2">Welcome, I'm</h3>
          <h1 className="font-oleo font-raleway sm:-mb-8 sm:-mt-4 mr-12">
            Robert
          </h1>
          <h1 className="font-oleo ml-10">Perez</h1>
          <h3 className="font-raleway -mt-2 mb-3">
            Agile Certified Full Stack Engineer
          </h3>
          {/* <p className="text-base text-center sm:px-12 sm:w-2/3 text-gray-800 sm:mb-4">
            I currently work for Ben Inc as a Full Stack Engineer. I have a wide
            range of skills and experience in Full Stack Development, and I'm
            always looking to learn more.
          </p> */}
          <div className="quoteBox bg-black p-1 rounded flex items-center justify-center w-2/3">
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
          <div className="sm:w-screen w-1/2 h-screen flex flex-row items-center justify-center bg-white">
            <div className="md:w-1/2 sm:hidden">img</div>
            <div className="sm:w-11/12 w-1/2 items-center sm:ml-3 sm:space-y-4">
              <h2 className="font-oleo sm:mr-4">Experience</h2>
              <p className="font-raleway text-base text-justify sm:w-4/5 sm:m-10 justify-center text-gray-800 peer-checked:hidden">
                Born in the year 2000, my life has been characterized by
                constant change and innovation. From an early age, I was
                captivated by the transformative power of technology. My passion
                began to manifest during my teenage years when I delved into
                programming, creating modifications for my favorite games. This
                was my initial foray into the realm of digital creation,
                fulfilling my desire to innovate and craft better experiences.
              </p>
              <p className="font-raleway text-base text-justify sm:w-4/5 sm:m-10 justify-center text-gray-800 peer-checked:hidden">
                My academic journey at the University of Delaware, majoring in
                Computer Science, further honed my skills. It transformed my
                hobby into a refined craft. I immersed myself in the
                foundational concepts of CS and the multiplying value of
                teamwork. After graduating in 2023, brimming with enthusiasm for
                the industry, I joined Ben Inc as a Full Stack Engineer. Since
                then, I have undertaken numerous contracts for businesses,
                continuously expanding my professional horizons.
              </p>
              <div className="relative w-[400px] overflow-hidden sm:ml-9">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">University of Delaware</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg">
                    I owkred here for a long lBorn in the year 2000, my life has
                    been characterized by constant change and innovation. From
                    an early age, I was captivated by the transformative power
                    of technology. My passion began to manifest during my
                    teenage years when I delved into programming, creating
                    modifications for my favorite games. This was my initial
                    foray into the realm of digital creation, fulfilling my
                    desire to innovate and craft better experiences.ong long
                    long long logn time
                  </p>
                </div>
              </div>
              <div className="relative w-[400px] overflow-hidden sm:ml-9">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">Ben Inc</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg">
                    I owkred here for a long long long long long logn time
                  </p>
                </div>
              </div>
              <div className="relative w-[400px] overflow-hidden sm:ml-9">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">Contract work</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg">
                    I owkred here for a long long long long long logn time
                  </p>
                </div>
              </div>

              <div className="space-x-4 mt-5">
                <button className="bg-black text-white rounded px-4 py-2">
                  Qualifications
                </button>
                <button className="border-black border-2 text-black rounded px-4 py-2">
                  Contact
                </button>
                <button className="underline text-gray-600">TL;DR</button>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={divRefs.current[2]}
          id="div3"
          className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center"
        >
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => setActiveSkill('technical')}
              className={`border-2 rounded px-4 py-2 ${
                activeSkill === 'technical'
                  ? 'bg-black text-white border-black'
                  : 'text-black border-gray-200'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveSkill('soft')}
              className={`border-2 rounded px-4 py-2 ${
                activeSkill === 'soft'
                  ? 'bg-black text-white border-black'
                  : 'text-black border-gray-200'
              }`}
            >
              Soft Skills
            </button>
          </div>

          <div className="flex flex-row space-x-8 mt-9 m-10">
            {activeSkill === 'technical'
              ? techSkills.slice(0, 3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-black bg-black text-white rounded-2xl border-2 w-40 h-40 flex items-center justify-center"
                  >
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-20 h-20"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))
              : softSkills.slice(0, 3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-black bg-black text-white rounded-2xl border-2 border-w-40 h-40 flex items-center justify-center"
                  >
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-20 h-20"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))}
          </div>

          <div className="flex flex-row space-x-8">
            {activeSkill === 'technical'
              ? techSkills.slice(3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-gray-200 rounded-2xl border-2 w-40 h-40 flex items-center justify-center"
                  >
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-20 h-20"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))
              : softSkills.slice(3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-gray-200 rounded-2xl border-2 w-40 h-40 flex items-center justify-center"
                  >
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-20 h-20"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))}
          </div>
        </div>
        <div className="snap-start bg-white w-screen h-screen flex items-center justify-center">
          <div className="sm:w-screen w-1/2 h-screen flex flex-row items-center justify-center bg-white">
            <div className="md:w-1/2 sm:hidden">img</div>
            <div className="sm:w-11/12 w-1/2 items-center sm:ml-3 sm:space-y-4">
              <h2 className="font-oleo sm:mr-4">Experience</h2>
              <p className="font-raleway text-base text-justify sm:w-4/5 sm:m-10 justify-center text-gray-800 peer-checked:hidden">
                Born in the year 2000, my life has been characterized by
                constant change and innovation. From an early age, I was
                captivated by the transformative power of technology. My passion
                began to manifest during my teenage years when I delved into
                programming, creating modifications for my favorite games. This
                was my initial foray into the realm of digital creation,
                fulfilling my desire to innovate and craft better experiences.
              </p>
              <p className="font-raleway text-base text-justify sm:w-4/5 sm:m-10 justify-center text-gray-800 peer-checked:hidden">
                My academic journey at the University of Delaware, majoring in
                Computer Science, further honed my skills. It transformed my
                hobby into a refined craft. I immersed myself in the
                foundational concepts of CS and the multiplying value of
                teamwork. After graduating in 2023, brimming with enthusiasm for
                the industry, I joined Ben Inc as a Full Stack Engineer. Since
                then, I have undertaken numerous contracts for businesses,
                continuously expanding my professional horizons.
              </p>
              <div className="relative w-[400px] overflow-hidden sm:ml-9">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">University of Delaware</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg">
                    I owkred here for a long lBorn in the year 2000, my life has
                    been characterized by constant change and innovation. From
                    an early age, I was captivated by the transformative power
                    of technology. My passion began to manifest during my
                    teenage years when I delved into programming, creating
                    modifications for my favorite games. This was my initial
                    foray into the realm of digital creation, fulfilling my
                    desire to innovate and craft better experiences.ong long
                    long long logn time
                  </p>
                </div>
              </div>
              <div className="relative w-[400px] overflow-hidden sm:ml-9">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">Ben Inc</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg">
                    I owkred here for a long long long long long logn time
                  </p>
                </div>
              </div>
              <div className="relative w-[400px] overflow-hidden sm:ml-9">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">Contract work</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg">
                    I owkred here for a long long long long long logn time
                  </p>
                </div>
              </div>

              <div className="space-x-4 mt-5">
                <button className="bg-black text-white rounded px-4 py-2">
                  Qualifications
                </button>
                <button className="border-black border-2 text-black rounded px-4 py-2">
                  Contact
                </button>
                <button className="underline text-gray-600">TL;DR</button>
              </div>
            </div>
          </div>
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
